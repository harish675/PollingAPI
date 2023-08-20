
const mongoose = require('mongoose');


const optionSchema = mongoose.Schema({
      
        
        question:{
              type:mongoose.Schema.Types.ObjectId,
              ref:'Question'
        },
        optionTitle:{    
            type:String,
            require:true,
        },
        vote:{
             
             type:Number,
        }
      
},{  
    timestamps:true
});

const Option = mongoose.model('Option',optionSchema);

module.exports = Option;