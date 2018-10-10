module.exports = function longestConsecutiveLength(array) {
  // your solution here
  const numbers = {}
  let countLength = 1;
  let longestConsLen = 0;
  let previousKey;
 
  for (let i = 0; i < array.length; i++) {
    numbers[array[i]] = true;
  }

  for(let key in numbers) {

    if(previousKey == key) continue;

    if(numbers[parseInt(key) + 1]){
      countLength++;
      previousKey = key;
      continue;
    } else {

      if(countLength > longestConsLen) {
        longestConsLen = countLength;
      }
      countLength = 1;
    }
  }
  return longestConsLen;
}
