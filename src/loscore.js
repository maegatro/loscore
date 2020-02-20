(() => {
  'use strict';
  
  window._ = {};

  _.identity = (val) => {
    // Return the first argument received as input
    return val;
  };

  _.add = (x, y) => {
    return x + y;
  };

  /**
  | ARRAYS
  |~~~~~~~~~~
  **/

  _.head = (array) => {
    return array[0];
  };

  _.tail = (array) => {
    //Iterate through array
    let newArr = [];
    for(let i = 0; i < array.length; i++){
      // IF first element, skip
      if(i === 0){
        continue;
      // ELSE Append to new array
      }else{
        newArr.push(array[i]);
      }
    // console.log(`Original Array : ${array}`);
    // console.log(newArr);
    }
    // Return all but the first element of array
    return newArr;
  };

  _.take = (array, n) => {
    // Create slice of an array with the n elements taken from the beginning
    // console.log(`Original Array: ${array} and Second input: ${n}`);
    // console.log(array.slice(0, n));
    let newArr;

    if(n === undefined){
      newArr = array.slice(0, 1);
    }else {
      newArr = array.slice(0, n);
    }

    //Return the slice
    return newArr;
  };

  _.takeRight = (array, n) => {
    // Create a slice of n elements from the end and return them
    let newArr;

    if(n === undefined){
      newArr = array.slice(-1);
    }else if(n === 0){
      newArr = [];
    }else{
      newArr = array.slice(-n);
    }

    //Return the slice
    return newArr;
  };

  _.uniq = (array) => {
    console.log(`Original Array: ${array}`);
    // Declare newArr variable with an empty array
    let newArr = [];
      //Iterate through array
      for(let el of array){
        //IF (Check if the element is already included inside newArr)
        if(isIncluded(el, newArr)){
          //Skip without adding
          continue;
        }else {
          //ELSE
            // Add the element to newArr
            newArr.push(el);
        }
      }
      console.log(`Returned value: ${newArr}`);
  };

  // Made this function as an alternative of the built-in function(includes)
  // Separate logics by placing the checking logic outside of the uniq method
  let isIncluded = (currentElement, newArr) => {
    // console.log(`currentElement inside isIncluded: ${currentElement}`);
    // console.log(`newArr inside isIncluded: ${newArr}`);
    for(let el of newArr){
      // console.log(`currentElement in Iteration: ${currentElement}`);
      // console.log(`el in Iteration: ${el}`);
      // console.log(`Is it included????: ${currentElement === el}`);

      if(currentElement === el){
        return true;
      }
    }

    return false;
  }

  /**
  | COLLECTIONS
  |~~~~~~~~~~
  **/

  _.size = (collection) => {
    // YOUR CODE HERE
  };

  _.indexOf = (array, target) => {
    // YOUR CODE HERE
  };

  _.each = (collection, iteratee) => {
    // YOUR CODE HERE
  };

  _.map = (collection, iteratee) => {
    // YOUR CODE HERE
  };

  _.filter = (collection, test) => {
    // YOUR CODE HERE
  };

  _.reject = (collection, test) => {
    // YOUR CODE HERE
  };

  _.pluck = (collection, key) => {
    return _.map(collection, (item) => {
      return item[key];
    });
  };

  _.reduce = (collection, iterator, accumulator) => {
  };

  _.contains = (collection, target) => {
    return _.reduce(collection, (wasFound, item) => {
      if (wasFound) {
        return true;
      }
      return item === target;
    }, false);
  };

  _.every = function (/* Your Arguments Here*/) {
    // YOUR CODE HERE
  };

  /**
  | OBJECTS
  |~~~~~~~~~~
  **/

  _.extend = function (obj) {
    // YOUR CODE HERE
  };

  /**
  | FUNCTIONS
  |~~~~~~~~~~
  **/

  _.once = function (func) {
    // YOUR CODE HERE
  };

  _.memoize = function (func) {
    // YOUR CODE HERE
  };
  
  _.invoke = function (collection, functionOrKey) {
    // YOUR CODE HERE
  };

  /**
  | ADVANCED REQUIREMENTS
  |~~~~~~~~~~~~~
  **/

  _.sortBy = function (/* Your Arguments Here */) {
    // YOUR CODE HERE
  };

  _.zip = function (/* Your Arguments Here */) {
    // YOUR CODE HERE
  };

  _.delay = function (/* Your Arguments Here */) {
    // YOUR CODE HERE
  };

  _.defaults = function (/* Your Arguments Here */) {
    // YOUR CODE HERE
  };

  _.throttle = function (/* Your Arguments Here */) {
    // YOUR CODE HERE
  };
})();

