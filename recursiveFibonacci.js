var fib = function (n){
  if (n === 1){
    return 0;
  } else if (n === 2){
    return 1;
  } else {
    return (fib(n-1) + fib(n-2));
  }
}


console.log(fib(3));
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(9));
console.log(fib(10));
console.log(fib(15));
