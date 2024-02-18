const router = require("express").Router();
const adminModel = require("../models/Admin");

//login
router.put("/login", async(req,res)=> {
  try{
    const admin =  await adminModel.find({});  
    if(admin[0].password === req.body.password) {
        res.status(200).json({success: true});
    }
    
    res.status(200).json({success: false});
  }
  catch(err) {
    return res.status(500).json(err);
  }
});


module.exports = router;