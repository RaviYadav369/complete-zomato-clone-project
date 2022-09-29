import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        fullname: { type: String, required: true, },
        email: { type: String, required: true },
        password: { type: String, },
        address: [{ detaails: { type: String, }, for: { type: String, } }],
        phone: [{ type: Number, }],
    },
    {
        timestamps: true,
    },
)

// Attachments
UserSchema.methods.generateJwtToken = function () { };

//helper function
UserSchema.statics.findByEmailAndPhone = async () => { };

UserSchema.statics.findByEmailAndPassword = async () => { };

export const UserModel = mongoose.model("users", UserSchema);