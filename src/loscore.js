(() => {
  'use strict';
  
  window._ = {};

  _.identity = (val) => {
    // YOUR CODE HERE
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
    // YOUR CODE HERE
    return array.slice(1);
  };

  _.take = (array, n) => {
    // YOUR CODE HERE
    if (n === undefined) {
      return [array[0]];
    } else if (n === 0) {
      return [];
    } else {
      return array.slice(0, n);
    }
  };

  _.takeRight = (array, n) => {
    // YOUR CODE HERE
    if (n === undefined) {
      return [array[array.length -1]];
    } else if (n === 0) {
      return [];
    } else if (n > array.length) {
      return array;
    } else {
      return array.slice(n-1);
    }
  };

  _.uniq = (array) => {
    // YOUR CODE HERE
    let set = [...new Set(array)];
    return set;

  };

  /**
  | COLLECTIONS
  |~~~~~~~~~~
  **/ 

  _.size = (collection) => {
    // YOUR CODE HERE
    if (Array.isArray(collection)) {
      return collection.length;
    } else if (typeof collection === "string") {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    } 
  };

  _.indexOf = (array, target) => {
    // YOUR CODE HERE

    let result = -1;

    _.each(array, (value, index) => {
      if (result != -1) return;
      if (value === target) {
        result = index;
      }
    });
    return result;
  };

  _.each = (collection, iteratee) => {
    // YOUR CODE HERE
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
    // YOUR CODE HERE

    let newArray = [];

    _.each(collection, (value) => {
      newArray.push(iteratee(value));
    })

    return newArray;
  };

  _.filter = (collection, test) => {
    // YOUR CODE HERE

    let newArray = [];

    _.each(collection, (value) => {
      if(test(value) === true) {
        newArray.push(value);
      }
    })

    return newArray;
  };

  _.reject = (collection, test) => {
    // YOUR CODE HERE
    let newArray = [];
    
    _.filter(collection, (value) => {
      if (test(value) === false) {
        newArray.push(value);
      }
    })

    return newArray;
  };

  _.pluck = (collection, key) => {
    let newArray = [];

    for (let i = 0; i < collection.length; i++){
      newArray.push(collection[i][key]);
    }

    return newArray;
  }

  //   return _.map(collection, (item) => {
  //     return item[key];
  //   });
  // };

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

