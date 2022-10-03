import express from "express";

import { UserModel } from "../../dataBase/AllModels";

const Router = express.Router();

Router.post('/signup', async (req, res) => {
    try {
        await UserModel.findByEmailAndPhone(req.body.credentials);
        const newUser = await UserModel.create(req.body.credentials);
        // console.log(newUser);
        const token = newUser.generateJwtToken();
        return res.status(200).json({ token, status: "Success" });

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

Router.post("/signin", async (req, res) => {
    try {
        const user = await UserModel.findByEmailAndPassword(req.body.credentials);
        const token = user.generateJwtToken();
        return res.status(200).json({succes: true, token})

    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
})



export default Router;