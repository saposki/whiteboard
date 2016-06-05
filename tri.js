// var arr = [1,1];
arr = []
var tri = function(n){

   if(n == 1){
      arr[n-n] = n;
   }else if(n == 2){
      arr[n-n] = 1
      arr[n-(n-1)] = arr[n-n];
   }else{
      arr[n-n] = n-(n-1);
      for(var i = 1; i < n-1; i++)
      {
         arr[i] = tri(i)[i-i] + tri(i)[i];
      }
      arr[n-1] = n-(n-1);
   }
   return arr;
}

// tri(1)
var m = tri(4);
console.log(m)
