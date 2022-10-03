import express from "express"

import { ReviewModel} from "../../dataBase/AllModels"

const Router = express.Router();

/**
 * Route : 
 * Des : getting all Restaurant with search
 * Param : searchString
 * Access : Public
 * Method : Get
 */
Router.get("/")