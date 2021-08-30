import data from './data.js';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/products', (req, res) =>{
  res.send(data.products)
})

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

