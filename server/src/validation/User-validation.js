import joi from 'joi'

export const validationUser = (user) =>{
    const Schema = joi.object({
        fullname: joi.string().required(),
        email: joi.string().required().email(),
        password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        phone:joi.array().items(joi.number().min(10).max(10)),

    })
    return Schema.validateAsync(user);
}