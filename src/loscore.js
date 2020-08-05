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
    return Object.keys(collection).length;
  };

  _.indexOf = (array, target) => {
    let result = -1;
    let first = true;
    _.each(array, (e, i) => {
      if (e === target && first) {
        first = false;
        result = i;
      }
    });
    return result;
  };

  _.each = (collection, iteratee) => {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        iteratee(collection[i], i, collection);
      }
    } else {
      for (let el in collection) {
        iteratee(collection[el], el, collection);
      }
    }
  };

  _.map = (collection, iteratee) => {
    let result = [];
    _.each(collection, (val, key, collection) => {
      result.push(iteratee(val, key, collection));
    });
    return result;
  };

  _.filter = (collection, test) => {
    let result = [];
    _.each(collection, (val) => {
      if (test(val)) {
        result.push(val);
      }
    });
    return result;
  };

  _.reject = (collection, test) => {
    return _.filter(collection, (val) => {
      if (!test(val)) {
        return val;
      }
    });
  };

  _.pluck = (collection, key) => {
    let result = [];
    for (let obj of collection) {
      if (key in obj) {
        result.push(obj[key]);
      }
    }
    return result;

    // return _.map(collection, (item) => {
    //   return item[key];
    // });
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
