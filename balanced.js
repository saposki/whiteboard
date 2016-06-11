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
   var char = str.split(''), leftBrk = 0, rightBrk = 0, leftParen = 0, rightParen = 0, leftSqr = 0; rightSqr = 0, flag = 1;

   for(var i = 0; i < char.length; i++){
      if(char[i] === '{'){
         leftBrk += 1;
         // flag = 1;
      }
      if(char[i] === '}'){
         rightBrk += 1;
         flag = 0;
      }
      if(char[i] === '('){
         leftParen += 1;
         flag = 1;
      }
      if(char[i] === ')'){
         rightParen += 1;
         flag = 0;
      }
      if(char[i] === '['){
         leftSqr += 1;
         flag = 1;
      }
      if(char[i] === ']'){
         rightSqr += 1;
         flag = 0;
      }

      if(leftBrk == rightBrk && leftParen == rightParen && leftSqr == rightSqr && flag == 0){
         return true;
      }

   }
   return false;
}

console.log(balance('[]()'));
