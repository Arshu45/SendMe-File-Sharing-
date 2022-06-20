const mongoose = require("mongoose");
// require("dotenv").config();
const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/.env" });

function connectDB() {
  //Database Connection
  mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: true,
  });
  const connection = mongoose.connection;

  connection
    .once("open", () => {
      console.log("Database Connected");
    })
    .on("error", function (err) {
      console.log(err);
    });
}

module.exports = connectDB;
