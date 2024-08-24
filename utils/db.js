const mongoose = require("mongoose");
require("dotenv").config();
// const URL="mongodb://127.0.0.1:27017/mern-app"

const uri =process.env.MONGODB_URI
const connectDb = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected Successfully");
  } catch (error) {
    console.log("Cannot connected to Database", error);
  }
};

module.exports = connectDb;
