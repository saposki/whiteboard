// Write a method to replae all spaces in a string with "%20".
// Input: "Mr John Smith ", 13
// Output: "Mr%20John%20Smith"

var constString  = "%20";

var rep = function(string){
   var returnString = "";
   for(var i = 0; i < string.length; i++){
      if(string.charAt(i)=== ' ')
      {
         returnString += constString;
         i++;
      }
      returnString += string.charAt(i);
   }
   return returnString;
}

console.log(rep('Mr John Smith '));
