
//creating model for storing the question title

const mongoose = require('mongoose');


//create a schema

const questionSchema = new mongoose.Schema({
      
      title:{
          type:String,
          require:true,
      },

      option:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Option'
        }    
      ]
     
},{
   
    timestamps:true,
     
});

const Question = mongoose.model('Question',questionSchema);
module.exports = Question;

