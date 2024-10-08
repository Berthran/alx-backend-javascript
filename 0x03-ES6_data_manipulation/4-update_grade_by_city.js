/* eslint-disable no-param-reassign */
function setGrades(student, newGrades) {
  for (const record of newGrades) {
    if (record.studentId === student.id) {
      student.grade = record.grade;
      break;
    } else {
      student.grade = 'N/A';
    }
  }
}

export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsAtCity = students.filter((eachStudent) => eachStudent.location === city);
  studentsAtCity.map((student) => setGrades(student, newGrades));
  return (studentsAtCity);
}
