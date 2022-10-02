import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema(
    {
        fullname: { type: String, required: true, },
        email: { type: String, required: true },
        password: { type: String, },
        address: [{ details: { type: String, }, for: { type: String, } }],
        phone: [{ type: Number, }],
    },
    {
        timestamps: true,
    },
)

// Attachments
UserSchema.methods.generateJwtToken = function () {
    return jwt.sign({ user: this._id.toString() }, "ZOMATOAPP");
};

//helper function
UserSchema.statics.findByEmailAndPhone = async ({ email, phoneNumber }) => {
    const checkUserByEmail = await UserModel.findOne({ email });
    const checkUserByPhone = await UserModel.findOne({ phoneNumber });
    console.log(checkUserByEmail);
    if (checkUserByEmail || checkUserByPhone) {
        throw new Error("User Already Exists......!");
    }
    return false;
};

UserSchema.statics.findByEmailAndPassword = async ({ email, password }) => {
    const user = await UserModel.findOne({ email });
    if (!user) {
        throw new Error("User Does Not Exist !!!")
    }
    ///Compare password
    const doesPasswordMatch = await bcrypt.compare(password, user.password);
    if (!doesPasswordMatch) {
        throw new Error("Incorrect Credentials ")
    }
    return user;
};

UserSchema.pre('save', function (next) {
    const user = this;

    //pasword is modified 
    if (!user.isDirectModified('password')) return next();

    // generate bycryt salting
    bcrypt.genSalt(8, (error, salt) => {
        // hashing the password
        bcrypt.hash(user.password, salt, (error, hash) => {
            if (error) return next(error)

            //assigning hashed password
            user.password = hash;
            return next();
        });
    });
});

export const UserModel = mongoose.model("users", UserSchema);