export default function cleanSet(set, startString) {
  // Check if the set is empty or startString is empty
  if (set.size === 0 || startString === '') {
    return '';
  }

  // Initialize an array to hold the matched values
  const results = [];

  // Iterate through the set
  for (const value of set) {
    // Check if the value starts with startString
    if (value.startsWith(startString)) {
      // Append the substring after startString to the results array
      results.push(value.slice(startString.length));
    }
  }

  // If there are no results, return an empty string
  if (results.length === 0) {
    return '';
  }

  // Join the results array with '-' and return
  return results.join('-');
}
