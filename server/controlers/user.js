import User from "./../models/User.js"

const postApiSignup = async (req,res)=>{
    const {name,email,password,mobile,gender} =req.body
    
    const signUp = new User ({
      name,
      email,
      password,
      mobile,
      gender
    })
    
    try {
      const savedSignDetail =await signUp.save()
     return res.json({
      success : true,
      data : savedSignDetail,
      message : "signUp successfully ! "
    })
    } catch (error) {
       res.json({
        message : error.message
       })
    }
    }

const getApiSignup =  async (req,res)=>{
  const getSignup = await User.find();

  res.json({
    success : true,
    data : getSignup,
    message : "All signup user fetch...."
  })
}  

const getApiSignupID = async (req,res)=>{
  const {id}=req.params

  const specificUser =await User.findById({_id : id})

  res.json({
    success : true,
    data:specificUser,
    message:"specific user are find !"
  })


}

const postApiLogin =  async (req,res)=>{
  const {email,password} = req.body
  if(!email || !password){
   return res.json({
     success : false,
     message : "please provide email and password !"
   })
  }
 
  const user =await User.findOne({
   email : email,
   password : password
  })
 
  if (user) {
   return res.json({
     success: true,
     data: user,
     message: "login successful",
   });
 } else {
   return res.json({
     success: false,
     message: "invalid creadentials",
   });
 }
}


export {postApiSignup , getApiSignup , getApiSignupID, postApiLogin}
