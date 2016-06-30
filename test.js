var array = [1,2,3,4,5,6,7,8,9,10]

var left = [], right = [];

// check left
for(var i =0; i < array.length/2; i++){
   left.push(array[i]);
}
console.log(left);


// check right
for(var i = array.length/2; i < array.length; i++){
   right.push(array[i]);
}
console.log(right);
