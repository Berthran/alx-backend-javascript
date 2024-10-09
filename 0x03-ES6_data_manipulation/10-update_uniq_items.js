export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  if (!(map.size === 0)) {
    const entries = map.entries();
    let done = false;

    while (!done) {
      const entry = entries.next();
      if (entry.value) {
        if (entry.value[1] === 1) {
          map.set(entry.value[0], 100);
        }
      }
      done = entry.done;
    }
  }
  return (map);
}
