// import modules ------------------------------------------------------------------>
import chalk from "chalk";
import resend from "../config/resend.config.js";
import resetPasswordTemplate from "../templates/respd.email.template.js";

// create send email function ------------------------------------------------------>
const sendResetPasswordLink = async (res, username, email, resetLink) => {
    try {
        const { error } = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: [email],
            subject: 'Reset your password.',
            html: resetPasswordTemplate.replace('{username}', username).replace('{link}', resetLink)
        });

        if (error) res.status(400).json({
            success: false,
            message: "Internal issues email cannot send!",
            error: error
        });
    } catch (error) {
        console.log(chalk.hex('')(`Error from reset password email: ${error.message}`));
        throw new Error('Error from reset password email!');
    };
};

// export module ------------------------------------------------------------------->
export default sendResetPasswordLink;