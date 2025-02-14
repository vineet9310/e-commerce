const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//create a database connection -> u can also
//create a separate file for this and then import/use that file here

mongoose
  .connect(
    "mongodb+srv://vineetbeniwal9310:beniwal1000@e-commerce.e2975.mongodb.net/"
  )
  .then(() => console.log("MongoDB is connected"))
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173/",
    mehods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true
  })
)

app.use(express.json());
app.use(cookieParser());    //to parse the cookies

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});