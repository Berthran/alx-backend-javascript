// Read a file synchronously with Node JS
const fs = require('fs');

function countStudents (filepath) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(filepath, 'utf8');

    const lines = data.split('\n').filter(line => line.trim() != '');

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    // remove the header line
    const header = lines.shift();

    // Parse student data
    const students = lines.map(line => line.split(','));
    const fields = {};

    students.forEach(student => {
      const [firstname, lastname, age, field] = student;
      if (field) {
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }
    });

    console.log(`Number of students: ${students.length}`);
    // Log the number of students in each field
    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
