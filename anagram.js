//

var word = ['acb', 'abc', 'cab', 'efg', 'hji'];
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
console.log(strToArr(check));

// deep equality comparism
function anagram(check, word){
   var result = [];
   for (var i = 0; i < word.length; i++ ){
      // console.log(word[i]);
      // if(strToArr(check) == strToArr(word[i])){

         result.push(strToArr(word[i]));
      // }
      // console.log(result);
   }
   return result;
}
console.log(anagram(check, word));
