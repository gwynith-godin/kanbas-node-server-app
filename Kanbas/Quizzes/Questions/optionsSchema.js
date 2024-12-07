import mongoose from "mongoose";

const optionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, 'Option text is required.'],
  },
  isCorrect: {
    type: Boolean,
    required: [true, 'isCorrect flag is required.']
  }
}, { _id: false }); 

export default optionSchema;
