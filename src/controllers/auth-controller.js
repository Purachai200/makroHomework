exports.register = (req, res, next) => {
    const { email, password } = req.body;

    // Logic

    res.json({ email, password });
};

exports.login = (req, res, next) => {
    res.json({message: "Login"});
};

exports.forgetPassword = (req, res, next) => {
    const { email } = req.body;
    // get token -> สร้าง Link -> ส่ง email
    res.json({message: "Forget Password"});
};

exports.verfyForgetPassword = (req, res, next) => {
    res.json({ message: "Verfy Forget Password"});
};

exports.resetPassword = (req, res, next) => {
    res.json({ message: "Reset Password"});
};