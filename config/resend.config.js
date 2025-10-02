// import modules ------------------------------------------------------------------>
import { Resend } from "resend";

// resend config ------------------------------------------------------------------->
const resend = new Resend(process.env.RESEND_API_KEY);

// export modules ------------------------------------------------------------------>
export default resend;