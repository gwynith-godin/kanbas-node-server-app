import mongoose from "mongoose";
import trueFalseSchema from "./trueFalseSchema.js";
import fillInTheBlankSchema from "./fillInTheBlankSchema.js";
import optionSchema from "./optionsSchema.js"

const questionSchema = new mongoose.Schema({
  quizId: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz', required: true },
  type: {
    type: String,
    required: true,
    enum: ['MultipleChoice', 'TrueFalse', 'OpenResponse']
  },

  title: { type: String, required: true },
  points: { type: Number, default: 0 },
  question: { type: String, default: "" },

  // MULTIPLE CHOICE SPECIFIC - uses the subschema: optionSchema
  options: {
    type: [optionSchema],
    required: function() {
      return this.type === 'MultipleChoice';
    },
  },

  // TRUE/FALSE SPECIFIC
  trueFalse: {
    type: trueFalseSchema,
    required: function() {
      return this.type === 'TrueFalse';
    }
  },

  // FILL IN THE BLANK SPECIFIC
  fillInTheBlank: {
    type: fillInTheBlankSchema,
    required: function() {
      return this.type === 'FillInTheBlank';
    },
  },

}, { collection: "questions", timestamps: true });

export default questionSchema;