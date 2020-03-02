(() => {
  'use strict';
  
  window._ = {};

  _.identity = (val) => {
    // YOUR CODE HERE
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
    return array.slice(1);
  };

  _.take = (array, n) => {
    // YOUR CODE HERE
    let result = (n === 0 ? []
                : n > 0 ? array.slice(0, n)
                : array.slice(0,1));
    return result;

  };

  _.takeRight = (array, n) => {
    // YOUR CODE HERE
    let result = (n === 0 ? []
                : n > 0 ? array.slice(-n)
                : array.slice(-1));
    return result; 
  };

  _.uniq = (array) => {
  //   // YOUR CODE HERE
    let result = [];
    let firstElement = true;
      for (let value of array){
        for (let i = 0; i < result.length; i++){
          if (value === result[i]){
            firstElement = false;
          }
        }
        if (firstElement === true){
          result.push(value);
        }
        firstElement = true;
      }
    return result;
  };

  /**
  | COLLECTIONS
  |~~~~~~~~~~
  **/ 

  _.size = (collection) => {
    // YOUR CODE HERE
    let length = 0; 
    for (let key in collection){
      if (collection[key]){
        length++
      }
    }
    return length;
  };

  _.indexOf = (array, target) => {
    // YOUR CODE HERE
    // let result = 0;
    for (let i = 0; i < array.length; i++){
      if (array[i] === target){
        return i; 
      } else {
        return -1;
      };
    }
    
  };

  _.each = (collection, iteratee) => {
    // YOUR CODE HERE
    console.log(collection, iteratee);
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

