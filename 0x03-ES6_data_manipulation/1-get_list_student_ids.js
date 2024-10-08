export default function getListStudentIds(array) {
  let ids = [];
  if (Array.isArray(array) === true) {
    ids = array.map((obj) => obj.id);
    return (ids);
  }
  return (ids);
}
