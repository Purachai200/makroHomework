require('dotenv').config();
const express = require("express");
const cors = require("cors");
const errorHandler = require('./middlewares/error');

const app = express();

app.use(cors());
app.use(express.json());
app.use(errorHandler);

app.get("/",() => {});
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server run on port ` + port);
});