import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path'
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import orderRouter from './routers/orderRouter.js';
import uploadRouter from './routers/uploadRouter.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;

app.use('/api/uploads', uploadRouter)
app.use('/api/users', userRouter);
app.use('api/products', productRouter);
app.use('api/orders', orderRouter)
app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});
app.get('/api/config/google', (req, res) => {
  res.send(process.env.GOOGLE_API_KEY || '');
});


app.use(express.json());

const connection_url =
  "mongodb+srv://hov92:ToE3X7Foigt4LIMY@cluster0.6eeic.mongodb.net/merndb?retryWrites=true&w=majority"

mongoose.connect(process.env.MONGODB_URL || connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.use(express.static(path.join(__dirname, '/client/build')));
app.get('*', (req, res)=> res.sendFile(path.join(__dirname, 'client/build/index.html')))
// app.get("/", (req, res) => res.status(200).send("I'm working"));

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message })
})

app.listen(port, () => {
  console.log('Listening on port %s. Visit http://localhost:%s/ in your browser.',
    port,
    port);
});

