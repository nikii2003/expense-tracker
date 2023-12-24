import { Schema, model } from "mongoose";

const TransactionSchema = new Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      enum: ["debit", "credit"],
      required: true,
    },
    description: {
      type: String,
    },
    date :{
      type : Date,
    },
    category: {
      type: String,
      enum: [
        "food",
        "entertainment",
        "rent",
        "shooping",
        "travel",
        "education",
        "salary",
        "freelancing",
        "side-hussel",
        "other"
      ],
      default: "other",
    },
  },
  {
    timestamps: true,
  }
);

const Transaction = model (  'Transaction' , TransactionSchema,)

export default Transaction
