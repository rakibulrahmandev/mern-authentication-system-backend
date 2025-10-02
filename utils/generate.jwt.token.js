// import module ------------------------------------------------------------------->
import jwt from 'jsonwebtoken';

// generate function --------------------------------------------------------------->
const generateJwtToken = (id, email) => {
    const jwt_token = jwt.sign({ id, email }, process.env.JWT_SECRET, { expiresIn: '7d' });
    return jwt_token;
};

// export module ------------------------------------------------------------------->
export default generateJwtToken;