//

var word = ['abc', 'cab', 'efg', 'hji'];
var check = 'acb';

// string to object function

var strToArr = function(s){
   var strToObj = {};
   var arr = s.split('');
   for(var i = 0; i < arr.length; i++){
      var ch = arr[i];
      if(ch in strToObj){
         strToObj[ch] = strToObj[ch]+1;
      }else{
         strToObj[ch] = 1;
      }
   }
   return strToObj;
}
