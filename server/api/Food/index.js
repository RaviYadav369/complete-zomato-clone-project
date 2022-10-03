import express from "express";

import { FoodModel } from "../../dataBase/AllModels";

const Router = express.Router();

/**
 * Route : /:id
 * Des :   Get food based on id
 * Param : _id
 * Access: Public
 * Method: Get
 */

Router.get("/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const foods = await FoodModel.findById({ _id });
        return res.status(200).json({ foods })

    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
})

/**
 * Router : /
 * Des  :  Create new food item
 * Method:  Post
 */
Router.post("/", async (req, res) => {
    try {
        const newfood = await FoodModel.create(req.body.foods);
        return res.status(200).json({ success: true, newfood })
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

/**
 * Router : /r/:id
 * Des :   Get food Based on Restaurant id
 * param : _id
 * Access :  Public
 * Method : Get 
 */
Router.get("/r/:_id", async (req, res) => {
    try {
        const { _id } = req.params
        const foods = await FoodModel.find({
            restaurant: _id,
        });
        return res.json({ foods })
    }
    catch (error) {
        return res.status(400).json({ error: error.message })
    }
})

/**
 * Route : /c/:category
 * Des : Get Food with Category
 * params : catagory
 * Access : Public
 * Method : Get
 */

Router.get("/c/:category", async (req, res) => {
    try {
        const { category } = req.params;
        const foodWithCategory = await FoodModel.find({
            category: { $regex: category, $options: "i" },
        })
        if (!foodWithCategory) {
            return res.status(404).json({ message: `No Food is matches with ${category}` })
        }
        return res.status(200).json({ success: true, foodWithCategory })

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})


export default Router;