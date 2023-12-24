import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { getApiHealth } from "./controlers/health.js";
import { getApiTransaction, postApiTransaction, deleteApiTransaction} from "./controlers/transaction.js";
import { postApiSignup , getApiSignup , getApiSignupID,postApiLogin } from "./controlers/user.js";
import Transaction from "./models/Transaction.js";


dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGODB_URI);
 try {
  if (conn) {
    console.log("mongodb connected");
  }
 } catch (error) {
   console.log(error.message)
 }
};

connectDB();

app.get("/api/health", getApiHealth);

app.post('/api/transaction',postApiTransaction)

app.get('/api/transaction', getApiTransaction)

app.post('/signup', postApiSignup)

// app.get('/api/signup', getApiSignup)

// app.get('/api/signup/:id', getApiSignupID)

// app.put('/api/signup/:id')
app.post('/login', postApiLogin)

app.delete('/api/transaction/:_id',deleteApiTransaction)


app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});