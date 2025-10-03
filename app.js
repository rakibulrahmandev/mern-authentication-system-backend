// import modules ------------------------------------------------------------------>
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import chalk from 'chalk';
import db_connection from './database/db.config.js';

// import routes ------------------------------------------------------------------->
import sign_up_route from './routes/auth.signup.route.js';
import sign_out_route from './routes/auth.signout.route.js';
import verify_email_route from './routes/auth.verify.route.js';

// dotenv config ------------------------------------------------------------------->
dotenv.config();

// create app ---------------------------------------------------------------------->
const app = express();

// declare middlewares ------------------------------------------------------------->
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true }));
app.use(cookieParser());

// declare routes ------------------------------------------------------------------>
app.get('/', (req, res) => {
    res.send('Mern Stact Authentication System.');
});

app.use('/api/v1/auth', sign_up_route);
app.use('/api/v1/auth', verify_email_route);
app.use('/api/v1/auth', sign_out_route);

// port declare -------------------------------------------------------------------->
const port = process.env.PORT || 8000;

// start server -------------------------------------------------------------------->
app.listen(port, () => {
    console.log(chalk.hex('#5800FF')(`server running on http://localhost:${port}`));
    db_connection();
});