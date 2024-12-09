import mongoose from "mongoose";

const attemptSchema = new mongoose.Schema({
  quizId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'QuizzesModel', 
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserModel',  
    required: true
  },
  startTime: {
    type: Date,
    default: Date.now
  },
  endTime: {
    type: Date
  },
  score: String,
  answers: [
    {
      questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'QuestionsModel',
        required: true
      },
      selectedOption: {
        type: String,
        required: false
      },
      correct: {
        type: Boolean,
        default: false
      }
    }
  ]
}, { collection: "attempts", timestamps: true });

export default attemptSchema;
