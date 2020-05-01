// Create function to sort odd numbers in array
// You have an array of numbers. Your task is to sort ascending odd numbers but even numbers must be on their places.
// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

const arr = [2, 3, 7, 4, 6, 1, 5, 8, 9];
const sorted = sortOdd(arr);
console.log(sorted); // [2, 1, 3, 4, 6, 5, 7, 8, 9] ¯\_(ツ)_/¯

function sortOdd(arr) {
    // creating array with odd sorted numbers
    const oddNum = arr
        .filter(arr => arr % 2)
        .sort((a,b) => a-b);
    //replacing items in the original array using odd numbers array
    return arr.map(arr =>
        (arr%2) ? oddNum.shift() : arr);

}

sorted;