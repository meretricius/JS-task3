// 1
let arr = ['alex', 'jordan', 'michael', 'amira', 'dilruh', 'alla', 'tangir', 'daler']
let evenNames = arr.filter(arr => arr.length % 2 === 0)
console.log(evenNames);        

// 2
let nums = [1,2,3,4,5,6,7,9]
let evens = nums.filter(nums => nums % 2 === 0)
let odds = nums.filter(nums => nums % 2 !== 0)
console.log('Even number', evens);
console.log('Odd number', odds);
