import express from "express";
import passport from "passport";
import { UserModel } from "../../dataBase/User";
import { ValidationSignup } from "../../validation/Auth-Validation";
import { validationId } from "../../validation/Common-Validation";

const Router = express.Router();

/**
 * Route : /
 * Des : getting user data
 * Param : none
 * Access : Public
 * Method : Get
 */
Router.get("/", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const { email, fullname, phone } = req.user;
        return res.status(200).json({ user: { fullname, email, phone } })

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

/**
 * Route : /:_id
 * Des : getting user data for the review
 * Param : id
 * Access : Public
 * Method : Get
 */
Router.get("/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        await validationId(req.params);
        const getUser = await UserModel.findById(_id);
        if (!getUser) {
            return res.status(404).json({ message: "NO User Found" })
        }
        const { fullname } = getUser;
        return res.status(200).json({ succes: true, user: { fullname } })

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
});

/**
 * Route : /:_id
 * Des : Updates the user details
 * Param : id
 * Access : Private
 * Method : put
 */
Router.put('/update/:_id', passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const { _id } = req.params;
        const { userData } = req.body;
        await ValidationSignup(req.body.userData)
        const updatedUserData = await UserModel.findByIdAndUpdate(
            _id,
            {
                $set: userData,
            },
            {
                new: true,
            },
        )
        return res.status(200).json({ success: true, updatedUserData })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }

})

export default Router;