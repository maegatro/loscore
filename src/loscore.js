(() => {
  "use strict";

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
    return array.slice(1, array.length);
  };

  _.take = (array, n = 1) => {
    return array.slice(0, n);
  };

  _.takeRight = (array, n = 1) => {
    let startingPoint = array.length - n;
    if (startingPoint < 0) {
      return array;
    }
    return array.slice(startingPoint, array.length);
  };

  _.uniq = (array) => {
    let uniqueCheck = true;
    let uniqArray = [];

    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < uniqArray.length; j++) {
        if (array[i] === uniqArray[j]) {
          uniqueCheck = false;
        }
      }
      if (uniqueCheck) {
        uniqArray.push(array[i]);
      }
      uniqueCheck = true;
    }

    return uniqArray;
  };

  /**
  | COLLECTIONS
  |~~~~~~~~~~
  **/

  _.size = (collection) => {
    let count = 0;
    for (let prop in collection) {
      count++;
    }
    return count;
  };

  _.indexOf = (array, target) => {
    // YOUR CODE HERE
  };

  _.each = (collection, iteratee) => {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        iteratee(collection[i], i, collection);
      }
    } else {
      for (let value in collection) {
        iteratee(collection[value], value, collection);
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

  _.reduce = (collection, iterator, accumulator) => {};

  _.contains = (collection, target) => {
    return _.reduce(
      collection,
      (wasFound, item) => {
        if (wasFound) {
          return true;
        }
        return item === target;
      },
      false
    );
  };

  _.every = function(/* Your Arguments Here*/) {
    // YOUR CODE HERE
  };

  /**
  | OBJECTS
  |~~~~~~~~~~
  **/

  _.extend = function(obj) {
    // YOUR CODE HERE
  };

  /**
  | FUNCTIONS
  |~~~~~~~~~~
  **/

  _.once = function(func) {
    // YOUR CODE HERE
  };

  _.memoize = function(func) {
    // YOUR CODE HERE
  };

  _.invoke = function(collection, functionOrKey) {
    // YOUR CODE HERE
  };

  /**
  | ADVANCED REQUIREMENTS
  |~~~~~~~~~~~~~
  **/

  _.sortBy = function(/* Your Arguments Here */) {
    // YOUR CODE HERE
  };

  _.zip = function(/* Your Arguments Here */) {
    // YOUR CODE HERE
  };

  _.delay = function(/* Your Arguments Here */) {
    // YOUR CODE HERE
  };

  _.defaults = function(/* Your Arguments Here */) {
    // YOUR CODE HERE
  };

  _.throttle = function(/* Your Arguments Here */) {
    // YOUR CODE HERE
  };
})();
