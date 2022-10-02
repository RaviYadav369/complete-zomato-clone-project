import express from "express"

import RestaurantModel from "../../dataBase/AllModels"

const Router = express.Router();

/**
 * Route : /:id
 * Des :   Get Restaurant based on id
 * Param : _id
 * Access: Public
 * Method: Get
 */

Router.post('/', async (req, res) => {
    try {
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
        const restaurantData = await RestaurantModel.findById(_id)
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
        // http://localhost:4000/restaurant/?city:ncr
        const { city } = req.query;
        const totalRestaurant = await RestaurantModel.find({
            city: city,
        });
        if (totalRestaurant.length === 0) {
            return res.status(404).json({ message: `No Restaurant Found in ${city}` })
        }
        return res.status(200).json({ success: true, totalRestaurant })
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
        const restaurantData = await RestaurantModel.find({
            name: { $regular: searchString, $options: "i" },
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