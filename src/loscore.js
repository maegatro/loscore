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
    let result = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] != array[0]) result.push(array[i]);
    }
    return result;
  };

  _.take = (array, n = 1) => {
    if (n > array.length) return array;
    let result = [];
    for (let i = 0; i < n; i++) {
      result.push(array[i]);
    }
    return result;
  };

  _.takeRight = (array, n = 1) => {
    if (n > array.length) return array;
    let result = [];
    for (let i = array.length - n; i < array.length ; i++) {
      result.push(array[i]);
    }
    return result;
  };

  _.uniq = (array) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      if (!alreadyExists(result, array[i])) result.push(array[i]);
    }
    return result;
    
    function alreadyExists(array, element) {
      for (let i = 0; i < array.length; i++) {
        if (array[i] === element) return true;
      }
    }
  };

  /**
  | COLLECTIONS
  |~~~~~~~~~~
  **/ 

  _.size = (collection) => {
    if (typeof collection === "object") {
      let count = 0;
      for (const property in collection) {
        count++;
      }
      return count;
    }
    return collection.length;
  };

  _.indexOf = (array, target) => {
    let index = [];
    _.each(array, (l, i) => {
      if (l === target) index[index.length] = i;
    });
    return index.length === 0 ? -1 : index[0];
  };

  _.each = (collection, iteratee) => {
    if (collection.constructor === Array) {
      for (let i = 0; i < collection.length; i++) {
        iteratee(collection[i], i, collection);
      }
    } else {
      for (const property in collection) {
        iteratee(collection[property], property, collection);
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

