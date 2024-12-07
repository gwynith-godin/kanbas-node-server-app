import * as questionsDao from "./dao.js";
export default function QuestionsRoutes(app) {

    app.post("/api/quizzes/:quizId/question", async (req, res) => {
        const { quizId } = req.params;
        const question = req.body;
        question.quizId = quizId;
        const newQustion = await questionsDao.createQuestion(question);
        res.send(newQustion);
      });

    app.get("/api/quizzes/:quizId/questions", async (req, res) => {
        const { quizId } = req.params;
        const allQuestions = await questionsDao.getAllQuestions(quizId);
        res.send(allQuestions)
    })

    app.delete("/api/quizzes/:quizId/question/:questionId", async (req, res) => {
        const {quizId, questionId} = req.params
        await questionsDao.deleteQuestion(questionId);
        res.status(200)
    });

    app.put("/api/quizzes/:quizId/question/:questionId", async (req, res) => {
        const { questionId } = req.params;
        const questionUpdates = req.body;
        const updatedQuestion = await questionsDao.updateQuestion(questionId, questionUpdates);
        res.send(updatedQuestion);
    });

    app.get("/api/quizzes/:quizId/question/:questionId", async (req, res) => {
        const question = await questionsDao.findQuestionById(req.params.questionId);
        res.json(question);
    });

}
