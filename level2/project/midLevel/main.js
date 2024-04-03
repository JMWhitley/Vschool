//challange 1: sorting an array 

function sortNumbers(numbers) {
    return numbers.sort()
    }
    console.log(sortNumbers([9, 8, 6, 3, 1, 5, 7, 4, 2]))

//challange 2: mapping an array 

function convertToUpperCase(strings) {
    return strings.map(string => string.toUpperCase())

    }
console.log(convertToUpperCase(['hello', 'world', 'javascript']))

// Write a function that takes an array of numbers and returns a new array containing only the even numbers.
const numbers = [1, 2, 3, 4, 5, 6];

function filterEvenNumbers(numbers) {
    return numbers.filter(numbers => numbers % 2 === 0)
}

console.log(filterEvenNumbers(numbers));  // Output: [2, 4, 6]