const express=require("express")
const { route } = require("./loginroute")
const router=express.Router()

router.use('/register',require('./registerroute'))
router.use('/login',require('./loginroute'))


module.exports=router