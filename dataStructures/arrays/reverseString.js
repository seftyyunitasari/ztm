// create a function that revers a string

function reverse(str) {
    const reversedArray = [];
    for (let i = str.length - 1; i > -1; i--) {
        reversedArray.push(str[i]);
    }
    return reversedArray.join('');
}

function reverse2(str) {
    return str.split('').reverse().join('');
}

const reverse3 = str => [...str].reverse().join('');

console.log(reverse3('Hi!'));