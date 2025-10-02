// import modules ------------------------------------------------------------------>
import express from 'express';

// create route -------------------------------------------------------------------->
const route = express.Router();

// declare route ------------------------------------------------------------------->
route.post('/sign_up', sign_up);

// export module ------------------------------------------------------------------->
export default route;