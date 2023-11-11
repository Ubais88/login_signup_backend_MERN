const Signup = require("../models/Signup.model")


exports.Signup = async(req , res) => {
    // console.log('signup controller')
    try{
        const {name , email , password} = req.body;
        const dataSaved = await Signup.create({name, email, password})
        console.log(dataSaved)
        res.json({
            success: true,
            post: dataSaved,
            data:"SignUp successfully"
        })
    }
    catch(error){
        console.log(error);
        return res.status(404).json({
            success:false,
            error: error.message,
            message: "error while signup"
        })
    }
}