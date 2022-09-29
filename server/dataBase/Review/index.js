import mongoose from "mongoose";

const ReviewsSchema = new mongoose.Schema(
    {
        food: { type: String, required: true, },
        restaurant: { type: String, required: true, },
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