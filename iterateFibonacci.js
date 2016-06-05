var fib = function(n){

  var base = [0,1];
    if ( n === 1 ){
      return base[0];
    } else if( n === 2){
      return base[1];
    } else{
      var counter = n-2;
      var result;
      for (var i = 0; i < counter; i++){
        result = base[base.length-1] + base[base.length-2]
        base.push(result);
      }
      return base[base.length-1];
    }

}


console.log(fib(4));
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(9));
console.log(fib(10));
console.log(fib(12));
