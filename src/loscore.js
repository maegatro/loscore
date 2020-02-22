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
    let arr = array.slice(1);
    return arr;
  };

  _.take = (array, n) => {
    if (n === 0) {
      let arri = [];
      return arri;
    } else if (n === undefined) {
      let non = array.slice(0, 1);
      return non;
    } else {
      let arr = array.slice(0, n);
      return arr;
    }
  };

  _.takeRight = (array, n) => {
    // YOUR CODE HERE
  };

  _.uniq = (array) => {
    // YOUR CODE HERE
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
