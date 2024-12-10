import mongoose from "mongoose";
const quizzesSchema = new mongoose.Schema(
 {
    title: String,
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    quizType: {
        type: String,
        enum: ["Graded Quiz", "Practice Quiz", "Ungraded Survey"],
        default: "Graded Quiz",
      },
    points: Number,
    assignmentGroup: {
        type: String,
        enum: ["Quizzes", "Exams", "Assignments", "Project"],
        default: "Quizzes",
      },
    shuffleAnswers: {type: Boolean, default: true},
    timeLimit : {type: Number, default: 20},
    multipleAttempts: {type: Boolean, default: false},
    howManyAttempts: {type: Number, default: 1, max: 5}, // doesnt need to be 5, change if needed
    showCorrectAnswers: {
      type: String,
      enum: ["Immediately", "After Last Attempt"],
      default: "Immediately",
    },
    accessCode: {type: String, default: ""},
    oneQuestionAtATime: {type: Boolean, default: true},
    webCamRequired: {type: Boolean, default: false},
    lockQuestionsAfterAnswering: {type: Boolean, default: false},
    viewResponses: {
      type: String,
      enum: ["Always", "Never"],
      default: "Always",
    },
    published: Boolean,
    requireLockdownBrowser: {type: Boolean, default: false},
    requiredToViewResults: {type: Boolean, default: false},
    dueDate: Date,
    for: {
      type: String, 
      enum: ["Everyone", "Students", "Groups"], 
      default: "Everyone"},

    availableDate: { type: Date, default: Date.now }, // In case of no input
    untilDate: { type: Date, default: null }, // In case of no input
    numQuestions: Number
 },
 {collection: "quizzes"}
);
export default quizzesSchema;