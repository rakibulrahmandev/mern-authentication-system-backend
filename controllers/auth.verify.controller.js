// import modules ------------------------------------------------------------------>
import userSchema from "../models/auth.user.model.js";
import sendWelcomeEmail from "../email/send.welcome.email.js";

// create controller --------------------------------------------------------------->
const user_verify = async (req, res) => {
    const { code } = req.body;
    try {
        if (!code) return res.status(400).json({
            success: false,
            message: "Code is required!"
        });

        const user = await userSchema.findOne({
            verifactionCode: code,
            verificationCodeExpiresAt: { $gt: Date.now() }
        });

        if (!user) return res.status(404).json({
            success: false,
            message: "Invalid verification code or expired!"
        });

        user.isVerified = true;
        user.verifactionCode = undefined;
        user.verificationCodeExpiresAt = undefined;

        await user.save();
        await sendWelcomeEmail(res, user.name, user.email);

        res.status(200).json({
            success: true,
            message: "Email verify successfully!",
            user: {
                ...user._doc,
                password: undefined
            }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });        
    };
};

// export module ------------------------------------------------------------------->
export default user_verify;