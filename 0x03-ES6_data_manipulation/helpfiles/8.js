export default function cleanSet(set, startString) {
  const array = Array.from(set);
  const newArray = array.map(
    (ele) => {
      if (startString !== '') {
        return (ele.startsWith(startString) ? ele.slice(startString.length) : undefined);
      }
      return (undefined);
    },
  );

  const match = newArray.filter((ele) => ele !== undefined);
  if (match.length === 0) {
    return ('');
  }
  const cleanString = match.reduce(
    (acc, cval) => acc.concat('-', cval),
  );
  return (cleanString);
}
