(() => {
  'use strict';
  
  window._ = {};

  // identity should return the first argument it receives. This may seem useless because of how simple it is, but later it will be used by functions that require a transformation function. If a transformation function is not supplied as an argument, _.identity will be used in its place.
  
  _.identity = (val) => {
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

  //tail should return all but the first element of array.
  _.tail = (array) => {
    let result = [];
    for (const e of array) {
      result.push(e);
    }
    result.shift();
    return result;
  };

  //take should create a slice of an array with n elements taken from the beginning
  _.take = (array, n) => {

    let result = [];
    let i = 0;

    if (n === 0) {
      return result;
    } else {
    do {
      result.push(array[i]);
      i++;
    } while (i < n && i < array.length);
  }

    return result;
  };


  // takeRight should create a slice of an array with n elements taken from the end
  _.takeRight = (array, n) => {
    let result = [];
    let i = array.length-(n);

    if (n === 0) {
      return result;
    } 
    if (i < 0) {
      i = 0;
    }
    
    do {
      result.push(array[i]);
      i++;
      } while (i < array.length);
  
    return result;
  };

 
//uniq should take an array and return a duplicate-free version
  _.uniq = (array) => {
  let result = [];
  result.push(array[0]);

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < result.length; j++) { 
      if (array[i] === result[j]) {
        break;
      } else if (j === result.length-1) {
        result.push(array[i]);
      }
    }
  }

  return result;
  };

  /**
  | COLLECTIONS
  |~~~~~~~~~~
  **/ 

  //size should return the size of collection by returning its length for array-like values, number of characters in a string, or number of elements in an object.
  _.size = (collection) => {
    if (Array.isArray(collection) || typeof collection === "string") {
      return collection.length;
    } else if (typeof collection === "object") {
      let objectLength = Object.keys(collection);
      return objectLength.length;
    }
  };

  // indexOf should get the first index at which the target is found in the array.
  _.indexOf = (array, target) => {
    let i = 0;
    let result;
    _.each(array, element => {
      if (element === target && !result) {
        result = i;
      } else {
        i++;
      }
    })

    return (result !== undefined) ? result : -1;
  };

  //size should call an 'iteratee' for each element of the collection. It can accept both objects AND arrays. The iteratee should receive the value, key (or index), and collection. It has no return value and simply runs the given function over each element of the array.
  _.each = (collection, iteratee) => {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        iteratee(collection[i], i, collection);
      } 
    } else {
      for (const key in collection) {
        iteratee(collection[key], key, collection)
      }
    }
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

