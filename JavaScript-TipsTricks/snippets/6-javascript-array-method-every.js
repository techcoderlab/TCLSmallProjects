const arr = [];
/* WRONG: always returns true for an empty arr */
let result = arr.every((x) => x == 5);

/* CORRECT: make sure that arr should be > 0 */
if (arr.length > 0) {
  result = arr.every((x) => x == 5);
}
console.log(result);
