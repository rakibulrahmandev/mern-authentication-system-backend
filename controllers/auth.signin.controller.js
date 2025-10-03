// import modules ------------------------------------------------------------------>
import userSchema from "../models/auth.user.model.js";
import compareHashPassword from "../utils/compare.hash.password.js";
import generateJwtToken from "../utils/generate.jwt.token.js";

// create controller --------------------------------------------------------------->
const sign_in = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) return res.status(400).json({
            success: false,
            message: "All fields is required!"
        });

        const user = await userSchema.findOne({ email });
        if (!user) return res.status(404).json({
            success: false,
            message: "Invalid credentials!"
        });

        const isPasswordMatch = await compareHashPassword(res, password, user.password);
        if (!isPasswordMatch) return res.status(401).json({
            success: false,
            message: "Invalid credentials!"
        });

        const isVerified = user.isVerified;
        if (!isVerified) return res.status(403).json({
            success: false,
            message: "Email not verified! Please verify your account."
        });

        const token = generateJwtToken(user._id, user.email);
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_DEV === 'production',
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000 // token expires 7 days;         
        });

        res.status(200).json({
            success: false,
            message: "User sign in successfully!"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};

// export module ------------------------------------------------------------------->
export default sign_in;