import { Schema, model } from "mongoose";

const TransactionSchema = new Schema(
  {
    ammount: {
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
    category: {
      type: String,
      enum: [
        "food",
        "entertainment",
        "rent",
        "shopping",
        "travel",
        "education",
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
