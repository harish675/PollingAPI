
const express = require('express');

const router = express.Router();

const questionController = require('../controllers/question_controller');

router.post('/create',questionController.createQuestion);

router.delete('/:id/delete',questionController.deleteQuestion);
router.get('/:id/view',questionController.viewQuestion);
 


// router.get('/',function(req,res){
      
//     return res.json(200,{
//         massage:"List of options",
//         data:"well come api for this time",
//      })
// })






module.exports = router;