// import modules ------------------------------------------------------------------>
import chalk from "chalk";
import resend from "../config/resend.config.js";
import resetPasswordSuccesstemplate from '../templates/surepd.email.template.js';

// create send email function ------------------------------------------------------>
const sendResetPasswordSuccessEmail = async (res, username, email) => {
    try {
        const { error } = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: [email],
            subject: "Your password has been reset successfully.",
            html: resetPasswordSuccesstemplate.replace('{username}', username)
        });

        if (error) res.status(400).json({
            success: false,
            message: "Internal issues email cannot sent!",
            error
        });
    } catch (error) {
        console.log(chalk.hex('#E50046')(`Error from reset password success email: ${error.message}`));
        throw new Error("Error sending from reset password success email!");
    };
};

// export module ------------------------------------------------------------------->
export default sendResetPasswordSuccessEmail;