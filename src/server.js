const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "../config/.env" });

const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));
app.use(express.json());
const connectDB = require("../config/db");
connectDB();

//cors
const corsOptions = {
  origin: process.env.ALLOWED_CLIENTS.split(","),
};

app.use(cors(corsOptions));

//Template engine
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

//Routes
app.use("/api/files", require("../routes/files"));
app.use("/files", require("../routes/show"));
app.use("/files/download", require("../routes/download"));

//
app.listen(PORT, () => {
  console.log(`Server is up and ready on port ${PORT}`);
});
