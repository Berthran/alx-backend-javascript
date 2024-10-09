export default function cleanSet(set, startString) {
  if (startString === '') {
    return ('');
  }

  let result = '';

  for (const ele of set) {
    if (ele.startsWith(startString)) {
      const cleanEle = ele.slice(startString.length);
      result += result ? `-${cleanEle}` : cleanEle;
    }
  }

  return result;
}
