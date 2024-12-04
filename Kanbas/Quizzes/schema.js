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
    showCorrectAnswers: {type: Boolean, default: true},
    accessCode: {type: String, default: ""},
    oneQuestionAtATime: {type: Boolean, default: true},
    webCamRequired: {type: Boolean, default: false},
    lockQuestionsAfterAnswering: {type: Boolean, default: false},
    dueDate: Date,
    availableDate: Date,
    untilDate: Date,
    numQuestions: Number,
    score: Number
 },
 {collection: "quizzes"}
);
export default quizzesSchema;