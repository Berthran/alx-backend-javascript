export default function createIteratorObject(report) {
  const employees = Object.values(report.allEmployees);
  const allEmployees = [].concat(...employees);
  return allEmployees[Symbol.iterator]();
}
