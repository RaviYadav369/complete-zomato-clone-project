import mongoose from "mongoose";

const ReviewsSchema = new mongoose.Schema(
    {
        food: {type: mongoose.Types.ObjectId, ref: 'foods' },
        restaurant: { type: mongoose.Types.ObjectId, ref: 'restaurants'},
        user: { type: mongoose.Types.ObjectId, ref: 'users' },
        rating: { type: Number, required: true, },
        reviewsText: { type: String, required: true, },
        isRestaurantReviews: Boolean,
        isFoodReviews: Boolean,
        photos: {
            type: mongoose.Types.ObjectId,
            ref: "images",
        },
    },
    {
        timestamps: true,
    }
)

export const ReviewsModel = mongoose.model('reviews', ReviewsSchema);