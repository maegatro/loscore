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
    // let newArr = array.slice(1);
    // return newArr;
    let newArr = [];
    for (let i = 1; i < array.length; i++) {
      newArr.push(array[i]);
    }
    return newArr;
  };

  _.take = (array, n) => {
    let newArr = [];
    if (n == undefined) {
      newArr.push(array[0]);
    } else if (n > array.length) {
      newArr = array.slice();
    } else if (n !== 0) {
      for (let i = 0; i < n; i++) {
        newArr.push(array[i]);
      }
    }
    return newArr;
  };

  _.takeRight = (array, n) => {
    let newArr = [];
    if (n === undefined) {
      newArr.push(array[array.length - 1]);
    } else if (n > array.length) {
      n = array.length;
    }
    for (let i = array.length - n; i < array.length; i++) {
      newArr.push(array[i]);
    }

    return newArr;
  };

  _.uniq = (array) => {
    let hash = new Map();
    for (let e of array) {
      if (!hash.has(e)) {
        hash.set(e, true);
      }
    }
    return Array.from(hash.keys());
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
