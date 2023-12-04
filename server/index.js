import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Transaction from "./models/Transaction.js";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGODB_URI);
  if (conn) {
    console.log("mongodb connected");
  }
};
connectDB();

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "server is running !",
  });
});

app.post('/api/transaction',async(req,res)=>{
    const {ammount,type,description,category}=req.body

    const transaction = new Transaction ({
        ammount,
        type,
        description,
        category
    })
try {
    
    const savedTransaction = await transaction.save()

   return res.json({
        success : true,
        data:savedTransaction,
        message : " transaction added successfully !"
    })
} catch (error) {
    res.json({
        success:false,
        message:error.message
    })
}
})

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
