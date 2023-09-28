import { Router } from "express"
import { User } from "../model/user.js"

export const userRouter = Router()

//ROUTES
//CRUD
//GET ALL USERS
userRouter.get("/", async (req, res) => {
    const Users = await User.find({});
    res.status(200).json(Users);
});

//Get user id
userRouter.get("/:id", async (req, res) => {
    const id = req.params.id;
    const userFound = await User.findById(id);

    if (!userFound) {
        return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.status(200).json(userFound);
});
