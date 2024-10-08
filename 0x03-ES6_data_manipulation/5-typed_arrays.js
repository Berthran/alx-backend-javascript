export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const dataview = new DataView(buffer);
  if (position >= dataview.byteLength || position < 0) {
    throw new Error('Position outside range');
  } else {
    dataview.setInt8(position, value);
  }
  return dataview;
}
