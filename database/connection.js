const mysql = require("mysql");
require('dotenv').config()

// Configure MySQL connection
let connection = mysql.createConnection({
    host : process.env.db,
    user : process.env.user,
    password : process.env.password,
    database : process.env.db_name
});


//Establish MySQL connection
connection.connect((err,result)=>{
    if(err)throw err
    console.log("Database connected!!!")
});


    var sql="create table if not exists BlogAppData (username varchar(50) NOT NULL,email varchar(50) NOT NULL UNIQUE,password varchar(1000) NOT NULL,likes int(11) NULL,dislikes int(11) NULL)";
    connection.query(sql,(err,result)=>{
            if(err) throw err
            console.log("Table has created!!")
        })
    

module.exports=connection