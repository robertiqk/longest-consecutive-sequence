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
  // let countLength = 1;
  // let longestLength = 0;
  
  // if(array.length === 0) {return 0;}
  // if(array.length === 1) {return 1;}

  // function mySort(arr) {
  //   let i = 1;
  //   let number = 0;
  //   while (i < arr.length) {
  //       if (i > 0 && arr[i - 1] > arr[i]) {
  //         number = arr[i - 1];
  //         arr[i - 1] = arr[i];
  //         arr[i] = number;
  //         i--;
  //       } else {
  //           i++;
  //       }
  //   }
  //   return arr;
  // }


  // array = mySort(array);
  
  // let lowestNumber = array[0];
  
  // for(let i = 1; i < array.length; i++) {

  //   if (lowestNumber + 1 === array[i] ){
  //     countLength++;
  //     lowestNumber = array[i];
  //     continue;
      
  //   } else if(lowestNumber === array[i]){
  //       continue;
  //     } else {
  //       if(longestLength < countLength ) {longestLength = countLength;}
  //       lowestNumber = array[i];
  //       countLength = 1;
  //       continue;
  //     }
  // }
  // return longestLength; 
}
