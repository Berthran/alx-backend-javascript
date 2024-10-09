export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeRecord = newGrades.find((record) => record.studentId === student.id);
      // eslint-disable-next-line no-param-reassign
      student.grade = gradeRecord ? gradeRecord.grade : 'N/A';
      return (student);
    });
}
