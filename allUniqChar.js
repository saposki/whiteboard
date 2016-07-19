// Implement an algorithm to determine if a string has all unique characters

var unique = function(string){
      var obj = {};
      var count = 0;
      for(var i = 0; i < string.length; i++){
         if(string.charAt(i) in  obj){
            obj[string.charAt(i)] = obj[string.charAt(i)] + 1;
            count++;
         }else{
            obj[string.charAt(i)] = 1;
         }
      }
      return count;
}


console.log(unique('acbc'));
