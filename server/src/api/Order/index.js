import { getRounds } from "bcryptjs"
import express from "express"
import passport from "passport"

import { OrderModel } from "../../dataBase/AllModels"

const Router = express.Router()

/**
 * Route : /
 * Des :   Get all Order by id
 * Param : _id
 * Access: Private
 * Method: Get
 */

Router.get("/", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const { user } = req;
        const getOrder = await OrderModel.find({ user: user._id })
        if (!getOrder) {
            return res.status(404).json({ message: "user not found" })
        }
        return res.status(200).json({ success: true, Orders: getOrder })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

/**
 * Route : /:_id
 * Des :   Add new order
 * Param : _id
 * Access: Private
 * Method: post or put
 */
Router.put('/new', passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const { user } = req;
        const { orderDetails } = req.body;
        const addOrder = await OrderModel.findOneAndUpdate(
            {
                user: user._id,
            },
            {
                $push: {
                    orderDetails: orderDetails,
                },
            },
            {
                new: true,
            }
        )
        return res.status(200).json({ success: true, order: addOrder })

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

export default Router;