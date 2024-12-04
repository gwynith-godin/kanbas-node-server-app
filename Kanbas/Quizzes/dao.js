import model from "./model.js";

export function createQuiz(quiz) {
  delete quiz._id;
  return model.create(quiz);
  }

export function updateQuiz(quizID, quizUpdates) {
  return model.updateOne({ _id: quizID }, { $set: quizUpdates });
  }  

export function deleteQuiz(quizID) {
  return model.deleteOne({ _id: quizID });
   }   
  
export function findQuizzesForCourse(courseId) {
  return model.find({ course: courseId });
}

export const findQuizById = (quizId) => model.findById(quizId);
