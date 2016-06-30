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
};
