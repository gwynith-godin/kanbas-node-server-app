import mongoose from "mongoose";
const assignmentsSchema = new mongoose.Schema(
 {
    title: String,
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    availableFrom: Date,
    dueDate: Date,
    availableUntil: Date,
    points: Number,
    description: String
    
 },
 { collection: "assignments" }
);
export default assignmentsSchema;