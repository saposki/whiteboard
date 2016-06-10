/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balance(str){
   var char = str.split(''), left = 0, right = 0;

   for(var i = 0; i < char.length; i++){
      if(char[i]=== '{'){
         left += 1;
      }
      if(char[i]=== '}'){
         right += 1;
      }
      if(left == right){
         return true;
      }

   }
   return false;
}

console.log(balance('{'));
