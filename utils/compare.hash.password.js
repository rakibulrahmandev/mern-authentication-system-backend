// import modules ------------------------------------------------------------------>
import bcrypt from 'bcrypt';
import chalk from 'chalk';

// compare function ---------------------------------------------------------------->
const compareHashPassword = async (res, password, hashPass) => {
    try {
        const compare_pass = await bcrypt.compare(password, hashPass);
        return compare_pass;
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error from compare hash password!",
            error
        });
    };
};

// export module ------------------------------------------------------------------->
export default compareHashPassword;