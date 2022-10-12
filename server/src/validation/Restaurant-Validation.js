import joi from 'joi'

export const validationRestaurant = (restaurantObject) =>{
    const Schema = joi.object({
        name:joi.string().required().min(5).max(100),
        city:joi.string().required().min(5).max(100),
        address:joi.string().required().min(5).max(100),
        mapLocation:joi.string().required().min(5).max(100),
        
    })
    return Schema.validateAsync(restaurantObject);
}

export const validationSearch = (category) =>{
    const Schema = joi.object({
        searchString: joi.string().required(),
    })
    return Schema.validateAsync(category);
}