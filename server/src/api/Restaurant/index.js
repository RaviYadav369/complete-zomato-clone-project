import express from "express"

import {RestaurantModel} from "../../dataBase/AllModels"
import { validationCategory, validationId } from "../../validation/Common-Validation";
import { validationQuery, validationRestaurant, validationSearch } from "../../validation/Restaurant-Validation";

const Router = express.Router();

/**
 * Route : /
 * Des :   create new restaurant
 * Param : none
 * Access: Public
 * Method: Get
 */

Router.post('/', async (req, res) => {
    try {
        await validationRestaurant(req.body.restaurant);
        const restaurantData = await RestaurantModel.create(req.body.restaurant);
        return res.status(200).json({ success: true, restaurantData })

    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

/**
 * Route : /:id
 * Des :   Get Restaurant based on id
 * Param : _id
 * Access: Public
 * Method: Get
 */
Router.get("/:_id", async (req, res) => {

    try {
        const { _id } = req.params;
        await validationId(req.params)
        const restaurantData = await RestaurantModel.findById({_id})
        if (!restaurantData) {
            return res.status(404).json({ message: "Does not found Restaurant with entered ID" })
        }
        return res.status(200).json({ success: true, restaurantData })
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
});

/**
 * Route : /
 * Des : getting all Restaurant with particular city
 * Param : city
 * Access : Public
 * Method : Get
 */
Router.get("/", async (req, res) => {
    try {
        // ${process.env.REACT_APP_FRONTEND_URL}restaurant/?city:ncr
        const { city } = req.query;
        const restaurants = await RestaurantModel.find({
            city: city,
        });
        if (restaurants.length === 0) {
            return res.status(404).json({ message: `No Restaurant Found in ${city}` })
        }
        return res.status(200).json({ success: true, restaurants })
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
});

/**
 * Route : /search/:searchString
 * Des : getting all Restaurant with search
 * Param : searchString
 * Access : Public
 * Method : Get
 */

Router.get("/search/:searchString", async (req, res) => {
    try {
        const { searchString } = req.params;
        await validationSearch(req.params)
        const restaurantData = await RestaurantModel.find({
            name: { $regex: searchString, $options: "i" },
        })
        if (!restaurantData) {
            return res.status(404).json({ message: "NO Reataurant Found" })
        }
        return res.status(200).json({ success: true, restaurantData })

    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }

})

export default Router;