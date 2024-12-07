import mongoose from "mongoose";
const trueFalseSchema = new mongoose.Schema({
  answer: {
    type: Boolean,
    required: [true, 'Answer is required for TrueFalse questions.']
  }
}, { _id: false }); 

export default trueFalseSchema;