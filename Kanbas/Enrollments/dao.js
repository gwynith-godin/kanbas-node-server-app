import Database from "../Database/index.js";

export function findAllEnrollments() {
  return Database.enrollments;
}

export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  enrollments.push({ _id: Date.now(), user: userId, course: courseId });
}

export function fetchEnrollmentsForUser(userId) {
  const { enrollments } = Database;
  return enrollments.filter((enrollment) => enrollment.user === userId);
}

export function unEnrollFromCourse(enrollmentId) {
  // console.log(enrollmentId);
  const { enrollments } = Database;
  Database.enrollments = enrollments.filter((enrollment) => enrollment._id !== enrollmentId);
}