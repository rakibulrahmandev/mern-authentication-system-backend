// import modules ------------------------------------------------------------------>
import express from 'express';
import verify_email from '../controllers/auth.verify.controller.js';

// create route -------------------------------------------------------------------->
const route = express.Router();

// declare route ------------------------------------------------------------------->
route.post('/verify_email', verify_email);

// export module ------------------------------------------------------------------->
export default route;