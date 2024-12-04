import model from "./model.js";

export function createAssignment(assignment) {
  delete assignment._id;
  return model.create(assignment);
    // const newAssignment = { ...assignment, _id: Date.now().toString() };
    // Database.assignments = [...Database.assignments, newAssignment];
    // return newAssignment;
  }

export function updateAssignment(assignmentID, assignmentUpdates) {
  return model.updateOne({ _id: assignmentID }, { $set: assignmentUpdates });
    // const { assignments } = Database;
    // const assignment = assignments.find((assignment) => assignment._id === assignmentID);
    // Object.assign(assignment, assignmentUpdates);
    // return assignment;
  }  

export function deleteAssignment(assignmentID) {
  return model.deleteOne({ _id: assignmentID });
  //   const { assignments } = Database;
  //   Database.assignments = assignments.filter((assignment) => assignment._id !== assignmentID);
   }   
  
export function findAssignmentsForCourse(courseId) {
  return model.find({ course: courseId });
  // const { assignments } = Database;
  // return assignments.filter((assignment) => assignment.course === courseId);
}
