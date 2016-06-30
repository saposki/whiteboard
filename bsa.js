/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */

var binarySearch = function (array, target) {
  // your code here!
  //
  // 1.split array into left half and right half
  //  (array is sorted in ascending order)
  // 2.compare target to last element of left array
  //    target === lastelement
  // 				log [index of last element]
  // 		if last target is greater that last element
  // 			then element is not in left array --> exit array
  //				repeat(1 & 2) on right array till target is found
  // 		else
  // 			repeat(1 & 2) on left array till target is found

     var left = [], right = [], copy = [];
     // check left

     for(var i =0; i < Math.floor(array.length/2); i++){
        left.push(array[i]);
     }
     //console.log(left);

     // check right
     for(var i = Math.floor(array.length/2); i < array.length; i++){
        right.push(array[i]);
     }
     //console.log(right);

     var found = false;

     if(target === left[left.length-1]){
        console.log('found');
        found = true;
        if(found){
           console.log(left[left.length-1]);
        }
        return;
     }else if(target < left[left.length-1]){
        console.log('at bottom');
        console.log('searching bottom......');
        binarySearch(left, target)
     }else if(target > left[left.length-1]){
        console.log('on top');
        console.log('searching top....');
      //   check top
      binarySearch(right, target)
   }else{
      console.log('target is not in set');
   }

};

binarySearch([1,2,3,4,5,6,7,8,9,10,11,12], 2);
