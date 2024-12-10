import mongoose from "mongoose";
import trueFalseSchema from "./trueFalseSchema.js";
import fillInTheBlankSchema from "./fillInTheBlankSchema.js";
import optionSchema from "./optionsSchema.js"

const questionSchema = new mongoose.Schema({
  quizId: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz', required: true },
  type: {
    type: String,
    required: true,
    enum: ['MultipleChoice', 'TrueFalse', 'FillInTheBlank']
  },

  title: { type: String, required: true },
  points: { type: Number, default: 0 },
  question: { type: String, default: "" },
  correctAnswers: { type: [String], required: false },
  options: { type: [String], required: false },


}, { collection: "questions", timestamps: true });

export default questionSchema;