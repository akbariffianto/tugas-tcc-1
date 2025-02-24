import { Sequelize} from "sequelize";
import db from "../config/Database.js";

const User = db.define('user', {
    name: {
        type: Sequelize.STRING, allowNull: true
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    role: {
        type: Sequelize.STRING
    }
}, {
    //namanya tidak akan diubah menjadi bentuk jamak
    freezeTableName: true,
    //timestamps akan membuat 2 kolom baru di tabel
    timestamps: false,
    createdAt: 'tanggal_dibuat',
    updatedAt: 'tanggal_diperbarui'
});

export default User;

(async() => {
    await db.sync();
})();