function changeEven(numbers, value) {
  // Change code below this line
  const newNumbers = [...numbers];
  for (let i = 0; i < newNumbers.length; i += 1) {
    if (newNumbers[i] % 2 === 0) {
      newNumbers.push(newNumbers[i] + value);
    }
  }
  return newNumbers;
  // Change code above this line
}

console.log(changeEven([1, 2, 3, 4, 5], 10)); //повертає новий масив `[1, 12, 3, 14, 5]`
console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); // повертає новий масив `[12, 18, 3, 7, 14, 16]`
console.log(changeEven([17, 24, 68, 31, 42], 100)); // повертає новий масив `[17, 124, 168, 31, 142]`
console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); //` повертає новий масив `[144, 13, 81, 192, 136, 154]`
console.log(changeEven([24, 5, 15, 23, 5], 5)); // буде [29,5,15,23,5]
