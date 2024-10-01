export default function iterateThroughObject(reportWithIterator) {
  const employees = [];
  for (const employee of reportWithIterator) {
    employee.push(employee);
  }
  return employees.join(' | ');
}
