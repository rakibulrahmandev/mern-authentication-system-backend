// create controller --------------------------------------------------------------->
const sign_out = async (req, res) => {
    try {
        res.clearCookie('token');
        res.status(200).json({
            success: true,
            message: "User sign out successfully!"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong while signing out.",
            error
        });
    };
};

// export modules ------------------------------------------------------------------>
export default sign_out;