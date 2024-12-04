import * as quizzesDao from "./dao.js";
export default function QuizRoutes(app) {

    app.put("/api/quizzes/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const quizUpdates = req.body;
        const updatedQuiz = await quizzesDao.updateQuiz(quizId, quizUpdates);
        res.send(updatedQuiz);
      });
    
    app.delete("/api/quizzes/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const status = await quizzesDao.deleteQuiz(quizId);
        res.send(status);
    });
}