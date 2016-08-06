
// Problem: given a sequence of nonnegative integers A and an integer T,
// return whether there is a *continuos sequence*  of a A that sums up to exactly T
//
//
// Example
// [23, 5, 4, 7, 2, 11], 20 Returns True because 7 + 2+ 11 = 20
// [1, 3, 5, 23, 2], 8 Returns True because 3 + 5 = 8
// [1, 3, 5, 23, 2], 7 Returns False because no sequence in this array adds up
// to 7
//
// Note: We are looking for an O(N) solution. There is an obvious O(N^2)
// solution which is a good starting point but is not the final solution we
// are looking for.


function sequenceSum(A, T){
   var accum = 0, current = 0;
   for (var i = 0; i < A.length; i++){
      accum += A[i];
      while(accum > T){
         accum -= A[current];
         current++;
      }

      if(accum == T){
         return true;
      }
   }if(accum != T){
      return false;
   }
}


console.log(sequenceSum([23, 5, 4, 7, 2, 11], 20));
console.log(sequenceSum([1, 3, 5, 23, 2], 8));
console.log(sequenceSum([1, 3, 5, 23, 2], 7));
