// import modules ------------------------------------------------------------------>
import bcrypt from 'bcrypt';
import chalk from 'chalk';

// salt rounds --------------------------------------------------------------------->
const salt_rounds = 10;

// generate function --------------------------------------------------------------->
const generateHashPassword = async (password) => {
    try {
        const hash_password = await bcrypt.hash(password, salt_rounds);
        return hash_password;
    } catch (error) {
        console.log(chalk.hex('#521C0D')(`Error from generate hash password: ${error.message}`));
        throw new Error(`Error from generate hash password: ${error.message}`);  
    };
};

// export module ------------------------------------------------------------------->
export default generateHashPassword;