import mongoose from "mongoose";
import schema from "./schema.js";
// import CourseModel from "../Courses/model.js";
const model = mongoose.model("ModuleModel", schema);
export default model;