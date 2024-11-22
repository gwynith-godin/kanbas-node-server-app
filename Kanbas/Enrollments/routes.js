import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
    app.get("/api/enrollments", (req, res) => {
        const enrollments = dao.findAllEnrollments();
        res.send(enrollments);
      });
    app.post('api/enrollments/:userId/course', (req, res) => {
        const { userId } = req.params;
        const { courseId } = req.body.courseId;
        const enrollment = dao.enrollUserInCourse(userId, courseId);
        res.json(enrollment);
      });
    app.get('api/enrollments/:userId/course', (req, res) => {
        const { userId } = req.params;
        const enrollments = dao.fetchEnrollmentsForUser(userId);
        res.json(enrollments);
      });
    app.delete('api/enrollments/:enrollmentId', (req, res) => {
        const { enrollmentId } = req.params;
        dao.unEnrollFromCourse(enrollmentId);
        res.sendStatus(204);
      });

}