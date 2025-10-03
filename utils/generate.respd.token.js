// import modules ------------------------------------------------------------------>
import crypto from 'crypto';

// generate function --------------------------------------------------------------->
const generateResetPasswordToken = () => {
    const reset_pass_token = crypto.randomBytes(32).toString('hex');
    return reset_pass_token;
};

// export module ------------------------------------------------------------------->
export default generateResetPasswordToken;