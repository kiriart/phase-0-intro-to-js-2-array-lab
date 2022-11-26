const cats = ["Milo", "Otis", "Garfield"];

// Write your solution here!

// This function should append a cat to the end of the array, destructively.
//
// function destructivelyAppendCat() {
//   cats.push("new cat");
//   console.log(cats);
// }
// destructivelyAppendCat();

// // this function should prepend a cat to the beginning of the cats array, destructively.
//
// function destructivelyPrependCat() {
// cats.unshift("old cat");
// }
// destructivelyPrependCat()
// console.log(cats);

// // this function should remove the last cat from the cats array, destructively.
//
// function destructivelyRemoveLastCat() {
//   cats.pop();
// }
// destructivelyRemoveLastCat();
// console.log(cats);

// // this function should remove the first cat from the cats array, destructively.
//
// function destructivelyRemoveFirstCat() {
// cats.shift()
// }
// destructivelyRemoveFirstCat();
// console.log(cats);

// // this function should append a cat to the cats array and return a new array, leaving the cats array unchanged
//
// function appendCat() {
//   const cats2 = [...cats, "New entry"];
//   return(cats2);
// }
// const cats2 = appendCat();
// console.log(cats);
// console.log(cats2);

// // this function should prepend a cat to the cats array and return a new array, leaving the cats array unchanged
//
// function prependCat() {
//   const cats2 = ["New entry", ...cats];
//   return cats2;
// }
// const cats2 = prependCat();
// console.log(cats);
// console.log(cats2);

// // this function should remove the last cat in the cats array and return a new array, leaving the cats array unchanged
//
// function removeLastCat() {
//   return cats.slice(0, cats.length - 1);
// }
// const cats2 = removeLastCat();
// console.log(cats);
// console.log(cats2);

// // this function should remove the first cat from the cats array and return a new array, leaving the cats array unchanged
//
function removeFirstCat() {
  return cats.slice(1);
}
const cats2 = removeFirstCat();
console.log(cats);
console.log(cats2);
