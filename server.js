const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const sageroute = require("./Routes/SageRoute");
const userroute = require("./Routes/UserRouter");

//express app
const app = express();

const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

//middlewear
app.use(express.json());

//route
app.use("/sagetraininginstiute", sageroute);

app.use("/sagetraininginstiute", userroute);

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for request
    app.listen(process.env.PORT, () => {
      console.log("connected to DB & listning on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
