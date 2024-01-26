const createError = require("../utils/createError");
const prisma = require("../config/prisma");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userService = require("../services/user-service");

exports.register = async (req, res, next) => {
  // รับ email password
  // check ว่ามี email password ไหม
  // check ว่ามี email เดียวกันในระบบหรือยัง
  // hash password ด้วย bcryptjs
  // เก็บ hashed ลง db
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return createError(400, "Email and password are require");
    }

    if (typeof email !== "string" || typeof password !== "string") {
      return createError(400, "Email or password is invalid");
    }

    const isUserExist = await userService.getUserByEmail(email);

    if (isUserExist) {
      return createError(400, "User already exist");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await userService.createUser(email, hashedPassword);

    res.json({ message: "Register Success." });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return createError(400, "Email And Password Require.");
    }
    if (typeof email !== "string" || typeof password !== "string") {
      return createError(400, "Email Or Password Is Invalid.");
    }

    const isUserExist = await userService.getUserByEmail(email);

    if (!isUserExist) {
      return createError(400, "Email Or Password Is Invalid.");
    }

    const isPasswordMatch = bcrypt.compare(password, isUserExist.password);

    if (!isPasswordMatch) {
      return createError(400, "Email Or Password Is Invalid.");
    }

    const token = jwt.sign({ id: isUserExist.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    res.json({ token });
  } catch (error) {
    next(error);
  }
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
