// import modules ------------------------------------------------------------------>
import userSchema from '../models/auth.user.model.js';
import generateHashPassword from '../utils/generate.hash.password.js';
import generateVerificationCode from '../utils/generate.verification.code.js';
import generateJwtToken from '../utils/generate.jwt.token.js';
import sendVerificationEmail from '../email/send.verification.email.js';

// create controller --------------------------------------------------------------->
const sign_up = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        if (!name || !email || !password) return res.status(400).json({
            success: false,
            message: "All Fields Is Required!"
        });

        const user = await userSchema.findOne({ email });
        if (user) return res.status(409).json({
            success: false,
            message: "User Already Exists!"
        });

        const hash_password = await generateHashPassword(password);
        const verification_code = generateVerificationCode();

        const new_user = new userSchema({
            name,
            email,
            password: hash_password,
            verifactionCode: verification_code,
            verificationCodeExpiresAt: Date.now() + 5 * 60 * 1000 // Date.now() + hours * minutes * seconds * miliseconds; 
        });

        await new_user.save();
        await sendVerificationEmail(res, new_user.name, new_user.email, verification_code);

        const token = generateJwtToken(new_user._id, new_user.email);
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_DEV === 'production',
            sameSite: 'strict',
            maxAge: Date.now() + 7 * 24 * 60 * 60 * 1000 // Date.nowt() + day * hours * minutes * seconds * miliseconds;
        });

        res.status(201).json({
            success: true,
            message: "User sign up successfully!",
            user: {
                ...new_user._doc,
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
export default sign_up;