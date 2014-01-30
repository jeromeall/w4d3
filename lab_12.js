var Iterators = (function() {
  return {
    each: function (arr, action) {
      for(var i=0; i< arr.length; i++){
        action(arr[i]);
      }
      return arr;
      // implment the each iterator
      // such that action is applied
      // to each element on the array
      // to which this function was applied
      // this function should also return the 
      // original array untouched
    },
    map: function(arr, action) {
    var new_arr = []; 
    //  for (var j=0; j< arr.length; j++){  
    //  new_arr.push(action(Iterators.each(arr, action)[j]));
    // }
    // return new_arr;
    Iterators.each(arr,function(x){
      new_arr.push(action(x));
    });
    return new_arr
      // implement map iterator
      // such that action is applied
      // to each element on the array
      // returning a new array containing
      // the results of the applications
    },
    reduce: function(arr, base, action) {
      // as a BONUS, implement reduce
      // btw, reduce is an alias for inject :)
      // for(var k=0; k < arr.length; k++){
      //  base = action(base, Iterators.each(arr,action)[k]);
      // }
      // return base
      Iterators.each(arr,function(x){
        base = action(base, x);
      });
      return base
      // this function should take an array, a 
      // base value, and a combination action
      // function -- for example add and perform
      // the action on each successive element
    }
  };
})();

var arr = [1,2,3];

// should output
// 1
// 2
// 3
console.log("results of applying Iterators.each to arr:");
Iterators.each(arr, function (number) {
  console.log(number);
});

// should output
// => [1,2,3]
console.log("applying Iterators.each to arr should return the array:");
Iterators.each(arr, function (number) {
});

// should output
// [2, 4, 6]
console.log("results of applying Iterators.map to arr:");
console.log(
  Iterators.map(arr, function (number) {
    return number * 2;
  })
);

// should output
// false to indicate that the array returned
// by map is a different object than the array
// that had been passed in
console.log("arr and the array returned by map are identical:");
console.log(
  arr === Iterators.map(arr, function (number) {
    return number * 2;
  })
);

// should output arr's contents to indicate that map did not 
// modify the original array's contents
console.log("arr's contents:");
console.log(arr);

// BONUS: should output the sum
console.log("result of applying Iterators.reduce to arr with a sum function:");
console.log(
  Iterators.reduce(arr, 0, function (a, b) {
    return a + b;
  })
);