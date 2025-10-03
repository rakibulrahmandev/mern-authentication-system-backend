// import modules ------------------------------------------------------------------>
import express from 'express';
import sign_in from "../controllers/auth.signin.controller.js";

// create route -------------------------------------------------------------------->
const route = express.Router();

// declare route ------------------------------------------------------------------->
route.post('/sign_in', sign_in);

// export module ------------------------------------------------------------------->
export default route;