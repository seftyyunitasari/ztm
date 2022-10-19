// map
// process each item inside the array based on the function written and return the result
const list = [1, 2, 3, 4];
list.map((item) => item * 2); // [2, 4, 6]

// filter
// return the items on the array that satisfies the function
const list = [1, 2, 3, 4];
list.filter((item) => item % 2 == 0); // [2, 4]

// fill
// return the filled array with static value
list.fill(0) // [0, 0, 0, 0]

// find
// only return the first item that satisfies the function
const list = [1, 3, 2, 4, 3, 5]
list.find((item) => item === 3) // 3

// indexOf
// return the index of the first item that matched
const list = [1, 2, 3, 4, 5];
list.indexOf(3); // 2

// lastIndexOf
// return the index of the last item that matched
const list = [1, 2, 3, 4, 5, 2];
list.lastIndexOf(2) // 2

// findIndex
// only return the index of the first item that satisfies the function
const array = [5, 12, 8, 130, 44];
array.findIndex((element) => element > 13); // 3

// includes
// return true if the item are included in the array and otherwise
const list = [1, 2, 3, 4, 5];
list.includes(3); // true
list.includes(6); // false

// pop
// remove the last item of an array and return the removed value
const list = [1, 2, 3, 4, 5];
list.pop(); // 5
list; // [1, 2, 3, 4]

// shift
// remove the first item of the array and return the removed value
const list = [1, 2, 3, 4, 5];
list.shift(); // 1
list; // [2, 3, 4, 5]

// push
// add an item at the end of the array
const list = [1, 2, 3, 4, 5];
list.push(6); // 6
list; // [1, 2, 3, 4, 5, 6]

// unshift
// add an item at the begining of an array
const list = [1, 2, 3, 4, 5];
list.unshift(0); // 6
list; // [0, 1, 2, 3, 4, 5]

// splice
const list = [1, 2, 3, 4, 5]
list.splice(1, 0, "la", "li");
list;  // [1, 'la', 'li', 2, 3, 4, 5]

// slice
// return sliced items of the array
const list = [1, 2, 3, 4, 5];
list.slice(1, 3); // [2, 3]

// join
// joins all elements of an array into a string.
const list = ["hey", "you", "there"];
list.join(" "); //'hey you there'

// reverse
// reverse the array
const list = [1, 2, 3, 4, 5];
list.reverse(); // [5, 4, 3, 2, 1]

// sort
// the default sort order is according to string Unicode code points.
const array = ['D', 'B', 'A', 'C'];
array.sort(); // ['A', 'B', 'C', 'D']

const array = [4, 1, 3, 2, 10];
array.sort(); // [1, 10, 2, 3, 4]
array.sort((a, b) => a - b); // [1, 2, 3, 4, 10]

// some
// returns true if at least one element in the array satisfies the function
const list = [1, 2, 3, 4, 5];
list.some((el) => el === 3); // true
list.some((el) => el === 6); // false

// every
// return true if every element satisfies the function
const list = [1, 2, 3, 4, 5];
list.every((el) => el === 3); // false

const list = [2, 4, 6, 8, 10];
list.every((el) => el%2 === 0); // true

// array of
// create a new array with items defined
const list = Array.of(1, 2, 3, 4, 5);
list; // [1, 2, 3, 4, 5]

// array
// create a new array with empty items and defined size
const emptyArray = Array(5)
emptyArray; // [ <5 empty items> ]

// is array
// return true if the value is array and otherwise
Array.isArray([1, 2, 3, 4, 5]); // true
Array.isArray(5); // false

// array at
// return the values at specific index
const list = [1, 2, 3, 4, 5];
list.at(1); // 2
list.at(-1); // 5
list.at(-2); // 4

// copyWithin
// select a target to place the copy, start index of the copied item, and end index
const list = [1, 2, 3, 4, 5];
list.copyWithin(1, 2, 4) // [1, 3, 4, 4, 5]

// flat
// return a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const list = [1, 2, [3, 4, [5, 6]]];
list.flat(Infinity); // [1, 2, 3, 4, 5, 6]
list.flat(1); // [1, 2, 3, 4, [5, 6]]
list.flat(2); // [1, 2, 3, 4, 5, 6]

// reference
// https://dev.to/devsmitra/28-javascript-array-hacks-a-cheat-sheet-for-developer-5769