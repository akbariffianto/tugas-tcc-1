import express from "express";
import {getUsers, createUser, updateUser, deleteUser} from "../controller/UserController.js";

const router = express.Router();

router.get('/users', getUsers);
router.post('/add-users', createUser);
router.put('/update-users/:id', updateUser);
router.delete('/delete-user/:id', deleteUser);

export default router;