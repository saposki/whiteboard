/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


var characterFrequency = function(string) {
   var result = [];
   var resultObj = {};
   for(var i in string){
      var char = string.charAt(i)
      if(char in resultObj){
         resultObj[char] = resultObj[char] + 1;
      }else{
         resultObj[char] = 1;
      }
   }

   for(var key in resultObj){
      charArray = [];
      charArray.push(key);
      charArray.push(resultObj[key]);
      result.push(charArray);
   }
   console.log(resultObj);
  return result;
};

// test
console.log(characterFrequency('mmmaaaiiibbb'));
