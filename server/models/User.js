import { model, Schema } from "mongoose";

const userSchema = new Schema ({
  name :{
    type : String,
    required : true
  },
  email:{
    type : String,
    unique: true,
    required : true
  },
  password:{
    type : String,
    unique :true,
    required : true
  },
  mobile : {
    type : Number,
    required:true,
    unique:true
  },
  gender : {
    type : String,
    default : "prefer not to say.."
  }
},{
    timestamps : true
}
)

const User = model ('User',userSchema)

export default User