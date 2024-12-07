import model from "./model.js";
import QuestionModel from "../Questions/model.js"

export async function createAttempt (attemptData) {
  const attempt = await model.create(attemptData);
  return attempt;
};

export async function findAllAttempts() {
  const attempts = await model.find();
  return attempts;
};

export async function findAttemptById() {
  const attempt = await model.findById(id);
  return attempt;
};

export async function updateAttempt(id, attemptData) {
    if (!attemptData.answers || !Array.isArray(attemptData.answers)) {
      const attempt = await model.findByIdAndUpdate(id, attemptData, { new: true });
      return attempt;
    }
  
    for (let i = 0; i < attemptData.answers.length; i++) {
      const answer = attemptData.answers[i];
      const question = await QuestionModel.findById(answer.questionId);
  
      if (!question) {
        answer.correct = false;
        continue;
      }
        answer.correct = (answer.selectedOption === question.correctAnswer);
    }
      const attempt = await model.findByIdAndUpdate(id, attemptData, { new: true });
    return attempt;
  };

export async function deleteAttempt() {
  const result = await model.findByIdAndDelete(id);
  return result;
};


