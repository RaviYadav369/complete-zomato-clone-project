import joi from 'joi'

export const ValidationSignup = (userData) =>{
    const Schema = joi.object({
        fullname:joi.string().required().min(3),
        email: joi.string().required().email(),
        password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        address:joi.array().items(joi.object({ details: joi.string() , for:joi.string()})),
        phone:joi.array().items(joi.number().min(10).max(10)),

    })
    return Schema.validateAsync(userData);
}

export const ValidationSignin =(userData) =>{
    const Schema = joi.object({
        email: joi.string().required().email(),
        password: joi.string().required(),

    })
    return Schema.validateAsync(userData);
}