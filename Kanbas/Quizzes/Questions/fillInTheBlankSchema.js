import mongoose from "mongoose";

const fillInTheBlankSchema = new mongoose.Schema({
  answers: {
    type: [String],
    required: [true, 'Answers are required for FillInTheBlank questions.'],
  }
}, { _id: false });

export default fillInTheBlankSchema;