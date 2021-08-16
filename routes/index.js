const express=require("express")
const router=express.Router()

router.use('/register',require('./registerroute'))
// router.use('/updatedata/',require('./updateroute')) 
// router.use('/deletedata/',require('./deleteroute'))
// router.use('/getsingledata/',require('./getsingleroute'))

module.exports=router