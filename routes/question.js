
const express = require('express');

const router = express.Router();


router.get('/',function(req,res){
      
    return res.json(200,{
        massage:"List of options",
        data:"well come api for this time",
     })
})





module.exports = router;