import joi from 'joi'

export const validationReview = (reviewData) =>{
    const Schema = joi.object({
        food: joi.valid(),
        restaurant: joi.valid(),
        user: joi.valid(),
        rating: joi.number().min(1).max(5),
        reviewsText: joi.string().required().min(5).max(100),
        isRestaurantReviews: joi.boolean(),
        isFoodReviews:joi.boolean(),
    })
    return Schema.validateAsync(reviewData);
}