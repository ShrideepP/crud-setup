const mongoose = require("mongoose");
const URL = process.env.MONGODB_URL;

const CONNECTION = async () => {
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        mongoose.set('strictQuery', true);
        console.log("Database Connected Successfully");
    } catch (error) {
        console.log(error);
    };
};

module.exports = CONNECTION;