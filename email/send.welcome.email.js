// import modules ------------------------------------------------------------------>
import chalk from 'chalk';
import resend from '../config/resend.config.js';
import welcomeEmailTemplate from '../templates/welcome.email.template.js';

// create send email function ------------------------------------------------------>
const sendWelcomeEmail = async (res, username, email) => {
    try {
        const { error } = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: [email],
            subject: "Congratulations!",
            html: welcomeEmailTemplate.replace('{username}', username)
        });

        if (error) return res.status(500).json({
            success: false,
            message: "Failed to send email. Please try again later.",
            error
        });
    } catch (error) {
        console.log(chalk.hex('#E50046')(`Error from welcome email: ${error.message}`));
        throw new Error(`Error from welcome email: ${error.message}`);
    };
};

// export modules ------------------------------------------------------------------>
export default sendWelcomeEmail;