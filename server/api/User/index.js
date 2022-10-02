import express from "express";

import { UserModel } from "../../dataBase/User";

const Router = express.Router();

/**
 * Route : /
 * Des : getting user data
 * Param : none
 * Access : Public
 * Method : Get
 */
Router.get("/", async (req, res) => {
    try {
      

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})