require('dotenv').config();
const express = require("express");
const cors = require("cors");
const errorHandler = require('./middlewares/error');
const notFoundHandler = require('./middlewares/notFound');
const createError = require('./utils/createError');

const app = express();

app.use(cors());
app.use(express.json());

app.use(errorHandler);
app.use("*", notFoundHandler);

app.get("/",(req, res, next) => {
    try {
        const { username, password } = req.body;
    
        if(!username || !password) {
            return createError(400, "User and and Password must be Provided")
        }
    } catch (err) {
        next(err)
    };
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server run on port ` + port);
});