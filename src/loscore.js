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
      let count = [];
      for (const property in collection) {
        count.push(property);
      }
      return count.length;
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
    let result = [];
    _.each(collection, (l) => {
      result.push(iteratee(l));
    });
    return result;
  };

  _.filter = (collection, test) => {
    let result = [];
    _.each(collection, (l) => {
      if (test(l)) result.push(l);
    });
    return result;
  };

  _.reject = (collection, test) => {
    const rejectArray =  _.filter(collection, test);
    const notTruth = (val) => {
      let count = 0;
      for (let i = 0; i < rejectArray.length; i++) {
        if (val != rejectArray[i]) count++;
      }
      if (count === rejectArray.length) return true;
    }

    return _.filter(collection, notTruth);
  };

  _.pluck = (collection, key) => {
    let result = [];
    for (let i = 0; i < collection.length; i++) {
      result.push(collection[i][key]);
    }
    return result;
  };

  _.reduce = (collection, iterator, accumulator) => {
    let acc = "";
    if (accumulator || accumulator === 0 || accumulator === false) {
      acc = accumulator;
      _.each(collection, (l) => {
        acc = iterator(acc, l);
      });
    } else {
      acc = collection[0];
      _.each(collection, (l, i) => {
        if (i !== 0) acc = iterator(acc, l);
      });
    }
    
    return acc;
  };

  _.contains = (collection, target) => {
    return _.reduce(collection, (wasFound, item) => {
      if (wasFound) {
        return true;
      }
      return item === target;
    }, false);
  };

  _.every = function (collection, test) {
    return _.reduce(collection, (truthy, item) => {
      if (truthy === false) {
        return false;
      } else if (test) {
        return test(item);
      } else {
        return item
      }
    }, true);  
  };

  /**
  | OBJECTS
  |~~~~~~~~~~
  **/

  _.extend = function (obj) {
    let shallowCopy = obj;
    _.each(arguments, (object) => {
      for (const prop in object) {
        shallowCopy[prop] = object[prop];
      }
    });
    return shallowCopy;
  };

  /**
  | FUNCTIONS
  |~~~~~~~~~~
  **/

  _.once = function (func) {
    let wasCalled = false;
    let result = "";
    return function(arg) {
      if (!wasCalled) {
        wasCalled = true;
        result = func(arg);
        return result;
      } else {
        return result;
      }
    } 
  };

  _.memoize = function (func) {
    let cache = {};
    return function(arg) {
      if (cache[arg]) return cache[arg];
      let result = func(arg);
      cache[arg] = result;
      return result;
    }
  };
  
  _.invoke = function (collection, functionOrKey) {
    let result = [];
    for (const el of collection) {
      if (typeof functionOrKey === 'string') {
        result.push(el[functionOrKey].apply(el))
      } else {
        result.push(functionOrKey.apply(el));
      }
    }
    return result;
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

