// This challenge requires you to convert an integer, which represents the number of minutes,
// So if the input was 63, then your program should output the string '1:3' because 63 minutes converts to 1 hour and 3 minutes.


function timeConvert(hour){
   var minutes = hour, convertion = 60;
   hour /= convertion;
   hour = Math.round(hour);

   minutes %= convertion;
   console.log(hour + ":" + minutes);
   // console.log(hour + " hour" + " and " + minutes + " minutes");
}

timeConvert(67);
