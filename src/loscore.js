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
    let result = [];
    for (let i = 1; i < array.length; i++) {
      result.push(array[i]);
    }
    return result;
  };

  _.take = (array, n) => {
    let result = [];
    if (n == undefined) {
      result.push(array[0]);
    } else {
      for (let i = 0; i < n; i++) {
        if (array[i] != undefined) {
          result.push(array[i]);
        }
      }
    }
    return result;
  };

  _.takeRight = (array, n) => {
    let result = [];
    if (n == undefined) {
      result.push(array[array.length - 1]);
    } else {
      for (let i = array.length - n; i < array.length; i++) {
        if (array[i] != undefined) {
          result.push(array[i]);
        }
      }
    }
    return result;
  };

  _.uniq = (array) => {
    let copy = [];
    let result = [];
    for (const i of array) {
      copy.push(i);
    }
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < copy.length; j++) {
        if (array[i] == copy[j]) {
          copy[j] = "Duplicate";
        }
      }
    }
    for (const ele of copy) {
      if (ele != "Duplicate") {
        result.push(ele);
      }
    }
    return result;
  };

  /**
  | COLLECTIONS
  |~~~~~~~~~~
  **/

  _.size = (collection) => {
    if (typeof collection == "string") {
      return collection.length;
    } else if (typeof collection == "object") {
      if (Array.isArray(collection)) {
        return collection.length;
      } else {
        return Object.keys(collection).length;
      }
    }
  };

  _.indexOf = (array, target) => {
    _.each(array, function(target, index, array) {
      return index;
    });
  };

  _.each = (collection, iteratee) => {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        iteratee(collection[i], i, collection);
      }
    } else {
      for (let key in collection) {
        iteratee(collection[key], key, collection);
      }
    }
  };

  _.map = (collection, iteratee) => {
    let result = [];
    _.each(collection, function(ele, index, collection) {
      result.push(iteratee(ele, index, collection));
    });
    return result;
  };

  _.filter = (collection, test) => {
    let result = [];
    _.each(collection, function(ele, index, collection) {
      if (test(ele)) {
        result.push(ele);
      }
    });
    return result;
  };

  _.reject = (collection, test) => {
    let result = [];
    _.filter(collection, function(ele, index, collection) {
      if (!test(ele)) {
        result.push(ele);
      }
    });
    return result;
  };

  _.pluck = (collection, key) => {
    // return _.map(collection, (item) => {
    //   return item[key];
    // });
    let result = [];
    for (let i = 0; i < collection.length; i++) {
      result.push(collection[i][key]);
    }
    return result;
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
