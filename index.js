require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
//const { resolve } = require('path');

const app = express();
const port = 3010;

//app.use(express.static('static'));
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB database"))
  .catch((error) =>
    console.log("Error connecting to database: " + error.message)
  );
app.get("/", (req, res) => {
  // res.sendFile(resolve(__dirname, 'pages/index.html'));
  res.send("Customer Management System Backend is Running!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
