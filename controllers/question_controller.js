
const Question = require('../model/question');

const Option = require('../model/options');

module.exports.viewQuestion = async function(req, res) {
        try {
            // Find the question using its ID
            const que = await Question.findById(req.params.id)
                .populate({
                    path: 'option',
                    select: '_id optionTitle vote addVote', // Include option ID, title, and vote count
                })
                .select('_id title'); // Select question ID and title
        
            if (!que) {
                return res.status(404).json({
                    message: "Question not found",
                });
            }
            
            return res.status(200).json({
                message: "Question successfully viewed",
                data: que,
            });
        } catch (err) {
            console.error(err);
            return res.status(500).json({
                message: 'Internal server error',
            });
        }
};
  




module.exports.createQuestion = async function(req,res){
       

         try{
                const que = await Question.create({
                        title:req.body.title,
                });
                return res.json(200,{
                        massage:"Question created successfully",
                        data:que,
                });
                 
         }catch(err){ 

                  return res.json(500,{
                        message:"Question does not created",
                    });
          
                }

        }

module.exports.deleteQuestion = async function(req,res){
        try{
                  //find the question with help of the question  id
                  const que = await Question.findByIdAndDelete(req.params.id);   
                  if(!que){   
                        console.log('question not found');
                        return;
                  }
                  //find all associated  options and delete it
                  await Option.deleteMany({question:req.params.id});

                  return res.json(200,{
                         
                         message:"Questions are deleted successfully",
                         data:que,
                  });
                 
        }
       catch(err){
          
             console.log("error in deleting the question,",err);
             return res.json(500,{
                  message:"Question not deleted"
             })
       }
         
          
         
           
        
}