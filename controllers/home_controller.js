const Question = require('../model/question');
const Option = require('../model/options');

module.exports.home = async function (req, res) {
    try {
        const questions = await Question.find({}).populate({
            path: 'option',
            select: 'optionTitle vote addVote', // Include only the necessary fields
            populate: {
                path: 'question',
                select: 'title',
            }
        });

        const formattedQuestions = questions.map(question => {
            const options = question.option.map(option => {
                return {
                    _id: option._id,
                    optionTitle: option.optionTitle,
                    votingCount: option.votingCount,
                    add_vote:option.addVote,
                };
            });

            return {
                _id: question._id,
                title: question.title,
                options: options
            };
        });
          
         
        //   return res.render('home',{
             
        //        title:'home',
        //        que_list:formattedQuestions
        //   })
        return res.json(200, {
            message: "List of Questions",
            questions: formattedQuestions
        });
    } catch (err) {
        console.log(err);
        return res.json(500, {
            message: "Error fetching questions",
        });
    }
}
