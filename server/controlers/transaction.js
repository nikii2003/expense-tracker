import Transaction from "./../models/Transaction.js"
import { responder } from "../util.js"
const postApiTransaction = async(req,res)=>{
    const {ammount,type,description,category}=req.body

    const transaction = new Transaction ({
        ammount,
        type,
        description,
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



export {postApiTransaction , getApiTransaction}