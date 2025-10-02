// import modules ------------------------------------------------------------------>
import { Resend } from "resend";
import dotenv from 'dotenv';

// dotenv config ------------------------------------------------------------------->
dotenv.config();

// resend config ------------------------------------------------------------------->
const resend = new Resend(process.env.RESEND_API_KEY);

// export modules ------------------------------------------------------------------>
export default resend;