import express from "express";
import passport from "passport";

import { UserModel } from "../../dataBase/AllModels";
import { ValidationSignin, ValidationSignup } from "../../validation/Auth-Validation";

const Router = express.Router();
/**
 * Route : /signup
 * Des :   Create Account
 * Param : none
 * Access: Public
 * Method: post
 */

Router.post('/signup', async (req, res) => {
    try {
        await ValidationSignup(req.body.credentials);
        await UserModel.findByEmailAndPhone(req.body.credentials);
        const newUser = await UserModel.create(req.body.credentials);
        // console.log(newUser);
        const token = newUser.generateJwtToken();
        return res.status(200).json({ token, status: "Success" });

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

/**
 * Route : /signin
 * Des :   Login the user
 * Param : none
 * Access: Public
 * Method: post
 */

Router.post("/signin", async (req, res) => {
    try {
        await ValidationSignin(req.body.credentials)
        const user = await UserModel.findByEmailAndPassword(req.body.credentials);
        const token = user.generateJwtToken();
        return res.status(200).json({succes: true, token})

    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
});

/**
 * Route : /signin
 * Des :   Login the user
 * Param : none
 * Access: Public
 * Method: post
 */
Router.get('/google', passport.authenticate('google',{
    scope:[
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
    ]
}))

Router.get('/google/callback', passport.authenticate('google', { failureRedirect:"/"}),(req,res) =>{
    return res.status(200).json({ token:req.session.passport.user.token})
})

export default Router;