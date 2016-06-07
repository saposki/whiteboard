// have the function LetterCapitalize(str)
// take the str parameter being passed and
// capitalize the first letter of each word.
// Words will be separated by only one space.


function LetterCapitalize(str) {
  // code goes here
  s = '';
  str = str.split(' ');
  for(var i = 0; i < str.length; i++){

      if(str[i][0]){

         s += str[i][0].toUpperCase();

      }
      s += str[i].slice(1, str[i].length);
      s += ' ';
 }
  return s;
}

console.log(LetterCapitalize('hello molly dolly'));
