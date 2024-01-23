exports.register = (req, res, next) => {
    const { email, password } = req.body;

    // Logic

    res.json({ email, password });
};

exports.login = (req, res, next) => {
    const { email, password } = req.body;
    res.json({ email, password });
};

exports.forgetPassword = (req, res, next) => {
    const { email } = req.body;
    // get token -> สร้าง Link -> ส่ง email
    res.json({ email });
};

// http://api.codecamp.com/auth/forget-password/asdfgjirj
exports.verfyForgetPassword = (req, res, next) => {
    const { token } = req.params;
    // Logic check token
    // redirect reset password -> ติด token

    res.json({ token });
};

exports.resetPassword = (req, res, next) => {
    const { token } = req.params;
    const { password } = req.body;

    // check token
    // เปลี่ยน password
    // เก็บ password ใหม่ ลง db
    res.json({ token, password });
};