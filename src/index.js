require('dotenv').config();
const express = require("express");
const cors = require("cors");
const errorHandler = require('./middlewares/error');
const notFoundHandler = require('./middlewares/notFound');

const authRoute = require("./routes/auth-route");
const productRoute = require("./routes/product-route");
const authenticate = require('./middlewares/authenticate');
const admin = require('./middlewares/admin');
const adminRoute = require("./routes/admin-route")

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoute);
app.use("/product", productRoute);
// multer อ่านไฟล์ formData
// เขียน file ลงบนโปรเจ็ค
// upload ขึ้น cloud
// cloud => url
// เก็บ url เข้า db
// ลบรูปบน server
app.use("/admin", authenticate, admin, adminRoute);

app.use(errorHandler);
app.use("*", notFoundHandler);

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server run on port ` + port);
});