import model from "./model.js";

export async function createQuestion(question) {
    delete question._id;
    return await model.create(question);
}

export async function getAllQuestions(quizId) {
    return await model.find({ quizId });
}

export async function deleteQuestion(questionId) {
    return await model.deleteOne(({ _id: questionId }));
}

export function updateQuestion(questionId, questionUpdates) {
    return model.updateOne({ _id: questionId }, { $set: questionUpdates });
} 

export const findQuestionById = (questionId) => model.findById(questionId);