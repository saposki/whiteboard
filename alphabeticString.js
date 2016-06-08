function alphabetic(str){
   var x = /[a-zA-Z]/;


      // if(charAt(i) is alpahbet)
      for(var i = 0; i < str.length; i++){

         if(x.test(str.charAt(i))){
            console.log('alphabetic');
         }
      }
      // check charAt(i-1) = '+'
      // check charAt(i+1) = '+'

      // tool kit
      //    regular expressions ?

};

alphabetic('a+a+a+');
