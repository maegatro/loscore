(() => {
  'use strict';
  
  window._ = {};

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

  _.tail = (array) => {
    return array.slice(1);
  };

  _.take = (array, n) => {
    if (typeof n === "undefined") {
      return array.slice(0,1);
    }
    return array.slice(0, n);
  };

  _.takeRight = (array, n) => {
    if (n === 0) {
      return [];
    }if (typeof n === "undefined") {
      return array.slice(-1);
    }
    return array.slice(-n)
  };

  _.uniq = (array) => {
    let unique = true;
    let result = [];
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < result.length; j++) {
        if (array[i] === result[j]) {
          unique = false;
        }
      }
      if (unique === true) {
        result.push(array[i]);
      }
      unique = true;  
    }return result;
  }

  /**
  | COLLECTIONS
  |~~~~~~~~~~
  **/ 

  _.size = (collection) => {
    let counter = 0;
    for (let item in collection) {
      counter ++;
    }return counter;    
  };

  _.indexOf = (array, target) => {
     let resultArray = []
    _.each(array, function(value, key, array) {
      if (value === target) {
        resultArray.push(key)
      }  
    });
    if (resultArray.length >= 1) {
      return resultArray[0]
    }else {
      return -1;
    }
  };

  _.each = (collection, iteratee) => {
    if (Array.isArray(collection) === true) {
      for (let i = 0; i < collection.length; i++) {
        iteratee(collection[i], i, collection)
      }
    }else {
      for (let item in collection) {
        iteratee(collection[item], item, collection)
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

