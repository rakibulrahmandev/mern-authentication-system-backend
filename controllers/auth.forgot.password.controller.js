// import modules ------------------------------------------------------------------>
import userSchema from "../models/auth.user.model.js";
import generateResetPasswordToken from "../utils/generate.respd.token.js";
import sendResetPasswordLink from "../email/send.respd.email.js";

// create controller --------------------------------------------------------------->
const forgot_password = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await userSchema.findOne({ email });
        if (!user) return res.status(404).json({
            success: false,
            message: 'User not found!'
        });

        const resetPasswordToken = generateResetPasswordToken();
        const resetPasswordTokenExpiresAt = Date.now() + 1 * 60 * 60 * 1000; // token expired in 1 hours;

        await user.save();
        await sendResetPasswordLink(res, user.name, user.email, `${process.env.CLIENT_URL}/reset_password/${resetPasswordToken}`);

        res.status(200).json({
            success: true,
            message: "Password reset email sent."
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
            error
        });
    };
};

// export module ------------------------------------------------------------------->
export default forgot_password;