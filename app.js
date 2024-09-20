const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const ItemRoute = require("./routes/route");

dotenv.config();

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("connected to db");
    app.listen(3000, "localhost", () => {
      console.log("server running");
    });
  })
  .catch((err) => {
    console.error("DB connection error:", err.message);
  });

//adding routes
app.use('/items',ItemRoute)

