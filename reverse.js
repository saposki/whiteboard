function FirstReverse(str) {
  // code goes here
  var strCpy = str;
  str = '';

  for(var i = strCpy.length-1; i >= 0; i--){
     console.log(i)
      str += strCpy[i];
   }
  return str;
}
console.log(FirstReverse('hello'));
