// import modules ------------------------------------------------------------------>
import chalk from "chalk";
import resend from "../config/resend.config.js"
import verificationEmailTemplate from "../templates/verification.email.template.js";

// create send email function ------------------------------------------------------>
const sendVerificationEmail = async (res, username, email, verifactionCode) => {
    try {
        const { error } = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: [email],
            subject: "Verify you email address.",
            html: verificationEmailTemplate.replace('{verification code}', verifactionCode).replace('{username}', username)
        });

        if (error) res.status(400).json({
            success: false,
            message: "Internal issues email cannot send!",
            error: error
        });
    } catch (error) {
        console.log(chalk.hex('#E50046')(`Error from email verification: ${error.message}`));
        throw new Error('Error from email verification!');  
    };
};

// export modules ------------------------------------------------------------------>
export default sendVerificationEmail;