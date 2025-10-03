// import modules ------------------------------------------------------------------>
import express from 'express';
import sign_out from '../controllers/auth.signout.controller.js';

// create route -------------------------------------------------------------------->
const route = express.Router();

// declare route ------------------------------------------------------------------->
route.post('/sign_out', sign_out);

// export module ------------------------------------------------------------------->
export default route;