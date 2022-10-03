import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Types.ObjectId,
            ref: "users"
        },
        orderDetails: [
            {
                food: [{
                    details: {
                        type: mongoose.Types.ObjectId,
                        ref: "foods"
                    },
                    quantity: { type: Number, required: true, },

                },
            ],
                paymode: { type: String, required: true, },
                status: { type: String, required: true, },
                paymentDetails:
                {
                    itemTotal: { type: String, required: true, },
                    promo: { type: String, required: true, },
                    tax: { type: String, required: true, },
                    razorpay_payment_id: { type: String, required: true, },
                }
            },
        ],
    },
    {
        timestamps: true,
    }
)

export const OrderModel = mongoose.model("orders", OrderSchema);