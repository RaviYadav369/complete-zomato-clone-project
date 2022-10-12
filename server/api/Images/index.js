import express from 'express'
import multer from 'multer';
import { ImageModel } from '../../dataBase/AllModels'
const cloudinary = require('cloudinary').v2
import dotenv from 'dotenv'
dotenv.config();
const Router = express.Router()

// congiguration
// const storage = multer.memoryStorage();
// const upload = multer({ storage });

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

/**
 * Route : /
 * Des :   Get image details
 * Param : _id
 * Access: Public
 * Method: Get
 */
Router.get('/:_id', async (req, res) => {
    try {
        const image = await ImageModel.findById(req.params._id);
        return res.json({ image });

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})


Router.post('/', (req, res,next) => {
    const file = req.files.photos;
    cloudinary.uploader.upload(file.tempFilePath, {
        folder: 'zomato_clone',
        use_filename: true,
        unique_filename: false,
        overwrite: true,
    }, async(error, result) => {
        if (result) {
            console.log(result);
            const dbUpload =await ImageModel.create({
                images:[
                    {
                        Location:result.url,
                    }
                ]
            }) 
            return res.status(200).json({dbUpload })
        }
        else {
            return res.status(500).json({ error: error.message })
        }

    })

})

export default Router

