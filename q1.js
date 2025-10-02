function lowerCaseWords(arr) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(arr)) {
      reject("Input must be an array");
    } else {
      const result = arr
        .filter(item => typeof item === "string")
        .map(word => word.toLowerCase());
      resolve(result);
    }
  });
}

// Example usage:
const mixedArr = ["PIZZA", 10, true, "HELLO", "World", 99];
lowerCaseWords(mixedArr)
  .then(res => console.log(res))  // ["pizza", "hello", "world"]
  .catch(err => console.error(err));
