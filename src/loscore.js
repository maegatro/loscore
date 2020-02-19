(() => {
  'use strict';
  
  window._ = {};

  _.identity = (val) => {

    // Return the first argument received as input
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
    // Return all but the first element of array
  };

  _.take = (array, n) => {
    // Create slice of an array with the n elements taken from the beginning

    //Return the slice
  };

  _.takeRight = (array, n) => {
    // Crate a slice of n elements from the end and return them
  };

  _.uniq = (array) => {
    // Return a duplicate-free version of an array
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

