// import modules ------------------------------------------------------------------>
import mongoose from "mongoose";

// user schema --------------------------------------------------------------------->
const user_model = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    verifactionCode: String,
    verificationCodeExpiresAt: Date,
    resetPasswordToken: String,
    resetPasswordTokenExpiresAt: Date
}, { timestamps: true });

// create model -------------------------------------------------------------------->
const userSchema = mongoose.model('User', user_model);

// export module ------------------------------------------------------------------->
export default userSchema;