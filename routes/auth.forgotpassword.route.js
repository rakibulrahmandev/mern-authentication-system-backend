// import modules ------------------------------------------------------------------>
import express from 'express';
import forgot_password from '../controllers/auth.forgot.password.controller.js';

// create route -------------------------------------------------------------------->
const route = express.Router();

// declare route ------------------------------------------------------------------->
route.post('/forgot_password', forgot_password);

// export module ------------------------------------------------------------------->
export default route;