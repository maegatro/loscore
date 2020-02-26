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
    if (n === 0) {
      let arri = [];
      return arri;
    } else if (n === undefined) {
      let non = array.slice(-1);
      return non;
    } else {
      if (n > array.length) {
        return array;
      } else {
        let arr = array.slice(array.length - n);
        return arr;
      }
    }
  };

  _.uniq = (array) => {
    let unsortedArr = new Set(array);
    return [...unsortedArr];
  };

  /**
  | COLLECTIONS
  |~~~~~~~~~~
  **/

  _.size = (collection) => {
    if (typeof collection === "string") {
      return collection.length;
    } else if (Array.isArray(collection)) {
      return collection.length;
    } else if (typeof collection === "object") {
      return Object.keys(collection).length;
    }
  };

  _.each = (collection, iteratee) => {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        let j = collection[i];
        iteratee(j, i, collection);
      }
    } else if (typeof collection === "object") {
      for (let key in collection) {
        iteratee(collection[key], key, collection);
      }
    }
  };

  _.indexOf = (array, target) => {
    let index = -1;

    let iteratee = (value, key, collection) => {
      if (value === target && index === -1) {
        index = key;
      }
    };

    _.each(array, iteratee);

    return index;
  };

  _.map = (collection, iteratee) => {
    let arrAy = [];
    let cowBack = (value, key, collection) => {
      arrAy.push(iteratee(value, key, collection));
    };
    _.each(collection, cowBack);
    return arrAy;
  };

  _.filter = (collection, test) => {
    let filtered = [];
    let moohBack = (value, key, collection) => {
      if (test(value) === true) {
        filtered.push(value);
      }
    };
    _.each(collection, moohBack);
    return filtered;
  };

  _.reject = (collection, test) => {
    let callBack = (value, key, collection) => {
      return !test(value);
    };
    return _.filter(collection, callBack);
  };

  _.pluck = (collection, key) => {
    let arr1 = [];
    for (let i = 0; i < collection.length; i++) {
      arr1.push(collection[i][key]);
    }
    return arr1;
  };

  _.reduce = (collection, iterator, accumulator) => {
    let memo = accumulator;
    if (memo === undefined) {
      memo = collection[0];
      collection = _.tail(collection, collection.length - 1);
    }
    _.each(collection, (item) => {
      memo = iterator(memo, item);
    });
    return memo;
  };

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

  _.every = (collection, test) => {
    if (test === undefined) {
      test = (item) => item;
    }
    return _.reduce(
      collection,
      (accumulator, item) => {
        if (accumulator === false) {
          return false;
        } else {
          return test(item);
        }
      },
      true
    );
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
