const strings = ['a', 'b', 'c', 'd'];
// in 32 bits computer => 4*4 = 16 bytes of storage

// accessing => access an item on the array [O(1)]
// computer already knows where things are stored
strings[2];

// push => add an item at the end of the list [O(1)/ O(n)]
strings.push('e');

// pop => delete the last item on the list [O(1)]
strings.pop();

// unshift => add an item at the begining of the array [O(n)]
strings.unshift('x');

// splice => detele a number of items in the array and add something [O(n)]
strings.splice(2, 0, 'alien');

console.log(strings);