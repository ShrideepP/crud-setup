const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();

const router = require("./routes/router.js");
const CONNECTION = require("./database/db.js");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(cors());
CONNECTION();

app.use("/", router);

app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`);
});