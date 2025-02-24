import User from "../model/UserModel.js";

// GET
async function getUsers(req, res) {
  try {
    const response = await User.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
}

// CREATE
async function createUser(req, res) {
  try {
    const inputResult = req.body;
    await User.create(inputResult);
    res.status(201).json({ msg: "User Created" });
  } catch (error) {
    console.log(error.message);
  }
}

const updateUser = async (req, res) => {
    try {
        const inputData = req.body; //nyimpen input
        const id = req.params.id; //nyimpen id
        await User.update(inputData, {
            where: {
                id,
            },
        });
        res.status(200).json({ 
            msg: "Berhasil diupdate",
        });
    } catch (error) {
        console.log(error.message);
    }
};

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        await User.destroy({
            where: {
                id,
            },
        });
        res.status(200).json({ 
            msg: "Berhasil dihapus",
        });
    } catch (error) {
        console.log(error.message);
    }
};

export { getUsers, createUser, updateUser, deleteUser};

//await = agar javascript membaca dulu baru diproses kodingan selanjutnya