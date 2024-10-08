export default function hasValuesFromArray(set, array) {
  const results = array.map((element) => set.has(element));
  const result = results.reduce((accumulator, currentValue) => accumulator && currentValue);
  return (result);
}
