/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */


var guesser = function(max, min){
   return Math.floor((max-min)/2)
}

var guess = 0, min, max;
var binarySearch = function (array, target) {

 var min = 0;
 var max = array.length -1;
 var result = [];

 guess = guesser(max, min);

 while(min <= max){
     if(target === array[guess]){
        result.push(array.indexOf(array[guess]));
        console.log(result);
       return;

     }else if(array[guess] < target){
       guess += 1;
       if(target === array[guess]){
          result.push(array.indexOf(array[guess]));
          console.log(result);
          return;
       }
     }else if(array[guess] > target){
       guess -= 1;
       if(target === array[guess]){
          result.push(array.indexOf(array[guess]));
          console.log(result);
          return;
       }
     }
 }


};

binarySearch([1,2,3,4,5,6,7,8,9,10,11,12], 1);
