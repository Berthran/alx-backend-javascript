export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || set.size === 0) {
    return ('');
  }
  if (startString === '' || startString === undefined) {
    return ('');
  }

  let result = '';

  for (const ele of set) {
    if (ele !== undefined) {
      if (ele.startsWith(startString)) {
        const cleanEle = ele.slice(startString.length);
        result += result ? `-${cleanEle}` : cleanEle;
      }
    }
  }

  return result;
}
