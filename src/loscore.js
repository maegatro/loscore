(() => {
  'use strict';
  
  window._ = {};

  _.identity = (val) => {
    // YOUR CODE HERE
    //return first argument it receives
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
    // YOUR CODE HERE
    // returns all elements of array except for the first 
    let tailArray = [];

    for (let i = 1; i < array.length; i++) {
      tailArray.push(array[i]);
    }
    // ALSO -> array.slice(1);

    return tailArray;

  };

  _.take = (array, n = 1) => {
    // YOUR CODE HERE
    //create slice of array with n elements from beginning

    return array.slice(0, n);

  };

  _.takeRight = (array, n = 1) => {
    // YOUR CODE HERE
    // create slice of array with n elements from end

   //return array.slice().reverse().slice(0, n).reverse();

   if (n === 0) {
     return [];
   }
  return array.slice(-n);
  };

  _.uniq = (array) => {
    // YOUR CODE HERE
    //take an array and return a duplicate-free version
    // create a set and return array from set
    let set = new Set(array);
    return Array.from(set);
  };

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

