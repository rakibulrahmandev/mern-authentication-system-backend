// import modules ------------------------------------------------------------------>
const passwordResetSuccessfulTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Verification Code</title>
        <!--[if mso]>
        <style type="text/css">
            body, table, td {font-family: Arial, Helvetica, sans-serif !important;}
        </style>
        <![endif]-->
    </head>
    <body style="margin: 0; padding: 0; background-color: #EAF0F3; font-family: 'Barlow', Arial, sans-serif;">
        
        <!-- MAIN CONTAINER - Simplified structure -->
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #EAF0F3;">
            <tr>
                <td align="center" style="padding: 40px 20px 20px 20px;">
                    <!-- Header -->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                            <td align="center" style="padding-bottom: 40px;">
                                <h1 style="font-size: 32px; color: #000000; font-weight: 500; margin: 0;">Password Reset Successfully!</h1>
                            </td>
                        </tr>
                    </table>
                    
                    <!-- Content Box -->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #ffffff; border-radius: 4px;">
                        <tr>
                            <td align="center" style="padding: 40px 30px;">
                                <!-- Verification Image -->
                                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                    <tr>
                                        <td align="center" style="padding-bottom: 10px;">
                                            <div style="width: 250px; height: 170px; overflow: hidden; display: inline-block;">
                                                <img src="https://i.ibb.co.com/DHxK3Bhb/resetsuccessfully.png" alt="reset successfully" width="100%" height="100%" style="display: block; border: 0; outline: none; text-decoration: none; border-radius: 50%;">
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                                
                                <!-- Message Content -->
                                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 400px;">
                                    <tr>
                                        <td align="center" style="padding-bottom: 20px;">
                                            <h2 style="font-size: 18px; color: #5e5e5e; margin: 0; font-weight: 500;">Hi {username},</h2>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" style="padding-bottom: 20px;">
                                            <p style="font-size: 16px; line-height: 1.5; color: #5E5E5E; margin: 0;">
                                                Your password has been reset successfully. You can now sign in to your account using your new password.
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center" style="padding-bottom: 30px;">
                                            <p style="font-size: 16px; line-height: 1.5; color: #5E5E5E; margin: 0;">
                                                If you did not perform this action, please secure your account immediately by resetting your password again or contacting our support team.
                                            </p>
                                        </td>
                                    </tr>
                                </table>
                                
                                <!-- Footer Note -->
                                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                    <tr>
                                        <td align="center">
                                            <p style="font-size: 16px; line-height: 1.5; color: #3490EC; margin: 0;">
                                                Thanks To <span style="color: #3490EC;">Rahman</span> Team
                                            </p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    
                    <!-- Copyright - FIXED: Added proper padding to prevent trimming -->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                            <td align="center" style="padding: 40px 0 20px 0;">
                                <p style="font-size: 16px; font-weight: 500; margin: 0 0 5px 0;">Copyright © 2025</p>
                                <p style="font-size: 16px; color: #5E5E5E; margin: 0;">
                                    Developed By <span style="color: #3490EC;">Rakibul Rahman</span>
                                </p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>

    </body>
    </html>
`

// export modules ------------------------------------------------------------------>
export default passwordResetSuccessfulTemplate;