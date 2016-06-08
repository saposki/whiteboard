// This challenge requires you to determine if every alphabetic character in a string
// has a plus (+) symbol on the left and right side of itself.
// For example: the string "+a+b+c+" is good but the string "===+3+f=+b+"
// is not because the "f" does not have a plus symbol to its right.
// it checks to see if it is surrounded by + symbols.

// tool kit -- regular expressions


function alphabetic(str){
   var x = /[a-zA-Z]/, checker = 0;


      // if(charAt(i) is alpahbet)
      for(var i = 0; i < str.length; i++){

         // console.log('alphabetic');
         if(x.test(str.charAt(i))){
            // check charAt(i-1) is  '+' and charAt(i+1) is '+'
            if(str.charAt(i-1) === '+' && str.charAt(i+1) === '+'){
               checker += 1;
               // console.log('good string');
            }
         }
      }
      if(counter(str) === checker){
         console.log('good string');
      }else{
         console.log('bad string');
      }
      return checker;


};

function counter(str){
var x = /[a-zA-Z]/, count = 0;
   for(var i = 0; i < str.length; i++){
      if(x.test(str.charAt(i))){
         count +=1;
      }
   }
   return count;
}


alphabetic('===+a+a+a+a+');
alphabetic('===+3+f=+b+');
