/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

var bubbleSort = function(array) {
   // compare i & i+1;
   //    if i > i+1
   //       swap
   // compare i+1 & i+2;
   //    if i+2
   //       swap
   // last element becomes larget
   // reduce array
   //    repeat comapare and swap ignoring last element
   var result = [];
   var n = 0;
   var track = array.length-1;

   while(track){
      for(var i = 0; i < array.length; i++){
         if(array[i] > array[i+1]){
            // swap
            tmp = array[i+1];
            array[i+1] = array[i];
            array[i] = tmp;
         }
      }
      track--;
   }

  return array
};

// test
var array = [4,2,5,3,7,9,8,1,3];
console.log(bubbleSort(array));
