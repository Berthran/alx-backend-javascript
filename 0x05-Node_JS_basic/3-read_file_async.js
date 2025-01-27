const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      // Parse the data
      const lines = data.split('\n').filter((line) => line.trim() !== ''); // Remove empty lines
      if (lines.length === 0) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const headers = lines.shift().split(','); // First line contains headers
      const fieldIndex = headers.indexOf('field'); // Find "field" column index
      const nameIndex = headers.indexOf('firstname'); // Find "firstname" column index

      if (fieldIndex === -1 || nameIndex === -1) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const students = {}; // To store students grouped by field
      lines.forEach((line) => {
        const values = line.split(',');
        const field = values[fieldIndex];
        const firstname = values[nameIndex];

        if (field && firstname) {
          if (!students[field]) students[field] = [];
          students[field].push(firstname.trim());
        }
      });

      // Prepare the output
      const totalStudents = Object.values(students).reduce(
        (acc, fieldStudents) => acc + fieldStudents.length,
        0
      );
      console.log(`Number of students: ${totalStudents}`);

      for (const [field, studentNames] of Object.entries(students)) {
        console.log(
          `Number of students in ${field}: ${studentNames.length}. List: ${studentNames.join(', ')}`
        );
      }

      resolve();
    });
  });
}

module.exports = countStudents;
