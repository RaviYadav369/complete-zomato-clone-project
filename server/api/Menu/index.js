import express from 'express'

import { MenuModel, ImageModel } from '../../dataBase/AllModels'

const Router = express.Router();

/**
 * Route : /
 * Des :   Get food based on id
 * Param : _id
 * Access: Public
 * Method: Get
 */
Router.get('/list/:_id', async (req, res) => {
    try {
        const { _id } = req.params;
        const menus = await MenuModel.findById(_id);
        if (!menus) {
            return res.status(404).json({ message: "NO Menus Found" })
        }
        return res.status(200).json({ menus })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
});

/**
 * Route : /images/_id
 * Des :   Get all menus images
 * Param : _id
 * Access: Public
 * Method: Get
 */
Router.get('/image/:_id', async (req, res) => {
    try {
        const { _id } = req.params;
        const menuImages = await ImageModel.findById({ _id });
        if (!menuImages) {
            return res.status(404).json({ message: "NO Menu Images Found" })
        }
        return res.status(200).json({ menuImages })

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

export default Router;