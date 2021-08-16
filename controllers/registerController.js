const connection=require('../database/connection')
const bcrypt=require('bcrypt')


module.exports.register=async(req,res)=>{
    const  salt=10;

    const hashPassword= await bcrypt.hash(req.body.password,salt)

    let userData={
        username:req.body.username,
        password:hashPassword,
        email:req.body.email
    }
    connection.query("SELECT email FROM BlogAppData WHERE email = '"+ req.body.email +"'", function(err, result, field){
        if(result.length ==0){
            var sql = "INSERT INTO BlogAppData SET ?";
            let query=connection.query(sql,userData,(err,result)=>{
            if(err) throw err;
            console.log("Signed up successfully!!!")
            res.send("Signed up successfully!!!!!!")
            
        })
        }else{  
            console.log("User Already Exists!!")
            res.send("User is already exists!!!")
        }
           
    
            
        })
    
           
}

