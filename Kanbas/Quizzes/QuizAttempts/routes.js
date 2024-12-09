import * as dao from "./dao.js";

export default function QuizAttemptRoutes(app) {

    app.get('/api/quizzes/attempt/recent', async (req, res) => {
        try {
            const { userId, quizId } = req.query;

            if (!userId || !quizId) {
                return res.status(400).json({ error: "Missing userId or quizId in query parameters" });
            }

            const recentAttempt = await dao.findMostRecentAttempt(userId, quizId);

            if (!recentAttempt) {
                return res.status(404).json({ message: "No attempts found for this user and quiz." });
            }

            res.status(200).json(recentAttempt);
        } catch (error) {
            console.error("Error fetching the most recent attempt:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    });


    app.get('/api/quizzes/attempt/count', async (req, res) => {
        try {
            const { userId, quizId } = req.query;

            if (!userId || !quizId) {
                return res.status(400).json({ error: "Missing userId or quizId in query parameters" });
            }

            const attemptCount = await dao.findNumberAttempts(userId, quizId);
            res.json({ count: attemptCount });
        } catch (error) {
            console.error("Error counting attempts:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    });

    // Create a new attempt
    app.post('/api/quizzes/attempt', async (req, res) => {
        try {
            const attemptData = req.body;
            console.log(attemptData);
            const newAttempt = await dao.createAttempt(attemptData);
            res.status(201).json(newAttempt);
        } catch (error) {
            console.error("Error creating attempt:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    });

    // Find all attempts
    app.get('/api/quizzes/attempt', async (req, res) => {
        try {
            const attempts = await dao.findAllAttempts();
            res.json(attempts);
        } catch (error) {
            console.error("Error fetching attempts:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    });

    app.get('/api/quizzes/attempt/all', async (req, res) => {
       
        try {
            const { userId, quizId } = req.query;
            console.log("looking for attempts for user ", userId, quizId);

            if (!userId || !quizId) {
                return res.status(400).json({ error: "Missing userId or quizId in query parameters" });
            }

            const attempts = await dao.findAttemptsByUserAndQuiz(userId, quizId);
            res.json(attempts);
        } catch (error) {
            console.error("Error fetching attempts:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    });

    // Find attempt by ID
    app.get('/api/quizzes/attempt/:aid', async (req, res) => {
        try {
            const { aid } = req.params;
            const attempt = await dao.findAttemptById(aid);
            if (!attempt) {
                return res.status(404).json({ error: "Attempt not found" });
            }
            res.json(attempt);
        } catch (error) {
            console.error("Error fetching attempt:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    });

    // Update an attempt by ID
    app.put('/api/quizzes/attempt/:aid', async (req, res) => {
        try {
            const { aid } = req.params;
            console.log(aid);
            const updatedData = req.body;
            const updatedAttempt = await dao.updateAttempt(aid, updatedData);
            if (!updatedAttempt) {
                return res.status(404).json({ error: "Attempt not found" });
            }
            res.json(updatedAttempt);
        } catch (error) {
            console.error("Error updating attempt:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    });

    // Delete an attempt by ID
    app.delete('/api/quizzes/attempt/:aid', async (req, res) => {
        try {
            const { aid } = req.params;
            const result = await dao.deleteAttempt(aid);
            if (!result) {
                return res.status(404).json({ error: "Attempt not found" });
            }
            res.json({ message: "Attempt deleted successfully" });
        } catch (error) {
            console.error("Error deleting attempt:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    });


    

    

    
}


