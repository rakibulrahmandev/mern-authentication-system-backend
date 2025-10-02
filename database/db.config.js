// import modules ------------------------------------------------------------------>
import mongoose from 'mongoose';
import chalk from 'chalk';

// import modules ------------------------------------------------------------------>
const db_connection = async () => {
    try {
      const db_connect = await mongoose.connect(process.env.DB_URI.replace('<db_password>', process.env.DB_PASS));
      console.log(chalk.hex('#F0BB78')(`MongoDB Connected: ${mongoose.connection.host}`));  
    } catch (error) {
        console.log(chalk.hex('#FA1E0E')(`Error Message: ${error.message}`));
    };
};

// export module ------------------------------------------------------------------->
export default db_connection