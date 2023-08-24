
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
             default: 0 // Default vote count to 0
        },
        addVote:{
             
             type:String
        }
      
},{  
    timestamps:true
});

// Virtual property to include voting count
optionSchema.virtual('votingCount').get(function () {
    return this.vote;
});


const Option = mongoose.model('Option',optionSchema);

module.exports = Option;