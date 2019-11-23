const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

//Database URL :
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

//Middleware to parse json:
app.use(cors());
app.use(express.json());

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongo DB database connection established succesfully");
});
//Require router:
const postRouter = require("./route/post");
app.use("/post", postRouter);

//Start web server
app.listen(2019);
console.log("server running on port 2019");
