
const Option = require('../model/options');
const Question = require('../model/question');

module.exports.createOption = async function(req,res){
    
        try{
              console.log("option are the",req.body.option);
            //find the question first
            const question = await Question.findById(req.params.id);
            const op = await Option.create({   
               optionTitle:req.body.option,
               vote:0,
            }); 
               op.addVote =`http://localhost:8000/options/${op._id}/vote`,
               op.save();
               question.option.push(op._id);
               question.save();    
               // in this we Populate the option details before sending the response
               await op.populate('question', 'title');
               
                 console.log(op);

               return res.json(200,{
               massage:" Option  created successfully",
                  data:{
                     _id:op._id,
                     optionTitle:op.optionTitle,
                     votingCount:op.votingCount,
                     addVote:op.addVote,
                  },
               });
               
        }
        catch (err) {
         console.log(err);
         return res.json(500, {
             message: "Option could not be created",
         });
      };
}


//delete option

module.exports.deleteOption = async function(req,res){
    
       try{
               
              
                  const op = await Option.findByIdAndDelete(req.params.id);
                   
                   
                  return res.status(200).json({
                     data:{
                        id: req.params.id
                     },
                     message:"Option Deleted Successfully"
               });    
       }
       catch(err){

               console.log(err);
               return res.json(500,{
                     message:'Option could not be found',
               });
               
       }   

} ;

//give the vote for option 
module.exports.voting = async function(req,res){
      try{ 
          
           //find option and option id

           const op = await Option.findByIdAndUpdate(req.params.id);

           if(!op){
               console.log('Error in finding the option');
               return res.json(500,{
                    message:"option Not found"
               });
           }
           op.vote =op.vote +1;
           op.save();
           return res.json(op);  
      }catch(err){
          
           console.log(err);
           return res.json(500,{
              message:'Option not found'
           });
      }    
}