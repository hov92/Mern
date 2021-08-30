const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

const connection_url =
  "mongodb+srv://hov92:ToE3X7Foigt4LIMY@cluster0.6eeic.mongodb.net/merndb?retryWrites=true&w=majority"

mongoose.connect(connection_url)
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
app.get("/",(req, res)=> res.status(200).send("I'm working"));

app.listen(port, () => {
  console.log( 'Listening on port %s. Visit http://localhost:%s/ in your browser.',
  port,
  port);
});

