var L = [4,2,5,3,7,9,8,1,3];
//
function mergeSort(L){

   if(L.length < 2){
      return L;
   }

   var length = L.length, middle = Math.floor(length/2);
   var left = L.slice(0, middle), right = L.slice(middle, length);

   return merge(mergeSort(left), mergeSort(right));
}

// merge function
function merge(K, M){
   result = [];
   while(K.length && M.length){
      if(K[0] <= M[0]){
         result.push(K.shift());
      }else {
         result.push(M.shift());
      }
   }

   while(K.length){
      result.push(K.shift());
   }
   while(M.length){
      result.push(M.shift());
   }

   return result;
};

// console.log(L);
console.log(mergeSort(L));
