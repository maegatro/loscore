(() => {
  'use strict';
  
  window._ = {};

  _.identity = val => val;

  _.add = (x, y) => x + y;

  /**
  | ARRAYS
  |~~~~~~~~~~
  **/ 

  _.head = (array) => {
    return array[0];
  };

  _.tail = (array) => {
    let output = [];
    if (array.length <= 1) {
      return output;
    } 
    for (let i = 1; i < array.length; i++) {
      output.push(array[i]);
    } return output;
  };

  _.take = (array, n = 1) => {
    let output = [];
    if (n === 0) {
      return output;
    } 
    for (let i = 0; i < (n > array.length ? array.length : n); i++) {
      output.push(array[i]);
    } return output;    
  };

  _.takeRight = (array, n = 1) => {
    let output = [];
    if (n === 0) {
      return output;
    } else if (n > array.length) {
      return array;
    }
    for (let i = array.length - 1; n > 0; i--, n--) {
      output.unshift(array[i]);
    } return output;
  };

  _.uniq = (array) => {
    let match = false;
    let output = [];
    for (let i = 0; i < array.length; i++){
        match = false;
        output.length === 0 && output.push(array[0]);
        for (let j = 0; j < output.length; j++){
            if (array[i] === output[j]) match = true;
        } if (!match) output.push(array[i]);
    } return output;
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

