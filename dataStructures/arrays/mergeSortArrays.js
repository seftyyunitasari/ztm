// merge two arrays into one and sort it from small to big value
// example:
// arr1 = [2, 0, 4];
// arr2 = [3, 1, 5];
// mergeSortArrays(arr1, arr2);
// [0, 1, 2, 3, 4, 5]

function mergeSortArrays(arr1, arr2) {
    return arr1.concat(arr2).sort();
}

const mergeSortArrays2 = (arr1, arr2) => arr1.concat(arr2).sort();

arr1 = [2, 0, 4];
arr2 = [3, 1, 5];
console.log(mergeSortArrays2(arr1, arr2));

