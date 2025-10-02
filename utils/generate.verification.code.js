// generate function --------------------------------------------------------------->
const generateVerificationCode = () => {
    const verification_code = Math.floor(100000 + Math.random() * 900000).toString();
    return verification_code;
};

// export module ------------------------------------------------------------------->
export default generateVerificationCode;