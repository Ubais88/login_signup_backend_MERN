const SignupModel = require('../models/Signup.model');

exports.Login = async(req , res) => {
    try{
        const {email , password} = req.body;
        const user = await SignupModel.findOne({email: email})
        if(!user){
            return res.status(404).json({
                success:false,
                message:"User not found"
            }) 
        }
        else{
            if(user.password === password){
                res.status(200).json({
                    success:true,
                    message:"Login successful"
                })
            }
            else{
                return res.status(401).json({
                    success:false,
                    message:"User Password not match"
                })
            }
        }

    }
    catch(error){
        console.log(error);
         return res.status(404).json({
            success:false,
            error:error.message,
            message:"Something went wrong"
        })
    }
}