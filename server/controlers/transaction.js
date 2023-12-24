import Transaction from "./../models/Transaction.js"
import { responder } from "../util.js"
const postApiTransaction = async(req,res)=>{
    const {amount,type,description,category,date}=req.body

    const transaction = new Transaction ({
        amount,
        type,
        description,
        date,
        category
    })
try {
    
    const savedTransaction = await transaction.save()

    return responder ({ 
        res,
        success: true, 
        data:savedTransaction,
        message:"saved Transaction"})
   
} catch (error) {

    return responder({
        res,
        success:false,
        message:error.message
    })
   
}
}

const getApiTransaction = async (req,res)=>{

    const allTransaction = await Transaction.find();
  
    return responder ({
        res,
        success:true,
        message:"succesfully fetch all the data",
        data:allTransaction
    })
    
  }

const deleteApiTransaction = async (req,res)=>{
   
    const {_id}=req.params;

    await Transaction.deleteOne({_id : _id})

    res.json({
        success : false,
        message : "Transaction Deleted Successfully !"

    })

}  



export {postApiTransaction , getApiTransaction ,deleteApiTransaction}