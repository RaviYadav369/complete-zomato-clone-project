import express from "express";


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
        const { email, fullname, phone } = req.user;
        return res.status(200).json({ user: {  fullname,email, phone } })

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

export default Router;