function resolvedPromise() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Resolved after 500ms"), 500);
  });
}

function rejectedPromise() {
  return new Promise((_, reject) => {
    setTimeout(() => reject("Rejected after 500ms"), 500);
  });
}

// Example usage
resolvedPromise()
  .then(res => console.log(res))
  .catch(err => console.error(err));

rejectedPromise()
  .then(res => console.log(res))
  .catch(err => console.error(err));
