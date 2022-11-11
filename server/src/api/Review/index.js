import express from "express";
import passport from "passport";

import { ReviewsModel } from "../../dataBase/AllModels"
import { validationId } from "../../validation/Common-Validation";
import { validationReview } from "../../validation/Review-Validation";

const Router = express.Router();

/**
 * Route : /:resId
 * Des : getting all Restaurant with search
 * Param : searchString
 * Access : Public
 * Method : Get
 */
Router.get("/:resId", async (req, res) => {
    try {
        const { resId } = req.params;
        const reviews = await ReviewsModel.find({ restaurant: resId }).sort({ createdAt: -1 });
        if (reviews.length ===0) {
            return res.status(404).json({ message: "No Review Found" })
        }
        return res.status(200).json({ reviews })

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
});

/**
 * Route : /new
 * Des : Adding new restaurant review
 * Param : none
 * Access : Public
 * Method : Get
 */
Router.post('/new', passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const { _id } = req.user;
        const { reviewData } = req.body;
        await validationReview(req.body.reviewData);
        const newReview = await ReviewsModel.create({ ...reviewData, user: _id });
        return res.status(200).json({ newReview })

    } catch (error) {
        return res.status(500).json({ error: error.message })

    }
});

/**
 * Route : /delete":_id
 * Des : Deleting review
 * Param : id
 * Access : Private
 * Method : Delete
 */
Router.delete('/delete/:id', passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const { user } = req;
        const { id } = req.params;
        await validationId(req.params);
        const data = await ReviewsModel.findByIdAndDelete({ _id: id, user: user._id });
        if (!data) {
            return res.status(404).json({ message: "Review was not deleted", data })
        }
        return res.status(200).json({ message: "Review is deleted Succesfully", data })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})



export default Router;