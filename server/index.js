const express = require("express");
const mongoose = require("mongoose");
const studentroute = require("./routes/studentRoute");
const app = express();
require("dotenv").config();
const cors = require("cors");


app.use((req,res, next) => {
  console.log("path " + req.path + " method " + req.method);
  next();
});
app.use(express.json());
app.use(cors());


mongoose.connect(process.env.DB).then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Server is Running PORT is = " + process.env.PORT);
  });
}).catch((error) => console.log(error));

app.use("/api/student", studentroute)





