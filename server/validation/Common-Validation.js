import joi from 'joi'

export const validationId = (id) =>{
    const Schema = joi.object({
        _id: joi.string().required(),
    })
    return Schema.validateAsync(id);
}

export const validationCategory = (category) =>{
    const Schema = joi.object({
        category: joi.string().required(),
    })
    return Schema.validateAsync(category);
}