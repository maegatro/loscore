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
    let wantedIndex = [];
    _.each(array, (value, key) => {
      if (target === value) {
        wantedIndex.push(key);
      }
    });
    if (!wantedIndex.length) return -1;
    else return wantedIndex[0];
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
    let results = [];
    _.each(collection, (value) => {
      results.push(iteratee(value));
    });
    return results;
  };

  _.filter = (collection, test) => {
    let result = [];
    _.each(collection, (value) => {
      if (test(value)) result.push(value);
    });
    return result;
  };

  _.reject = (collection, test) => {
    let result = [];
    _.filter(collection, (value) => {
      if (!test(value)) result.push(value);
    });
    return result;
  };

  _.pluck = (collection, key) => {
    let result = [];
    for (let i = 0; i < collection.length; i++) {
      result.push(collection[i][key]);
    }
    return result;
  };

  _.reduce = (collection, iterator, accumulator) => {
    let result;

    if (accumulator === undefined) {
      result = collection[0];
      _.each(collection, (value, index, collection) => {
        if (index + 1 < collection.length) {
          result = iterator(result, collection[index + 1]);
        }
      });
    } else {
      result = accumulator;
      _.each(collection, (value) => {
        result = iterator(result, value);
      });
    }

    return result;
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

  _.every = function(collection, test) {
    return _.reduce(
      collection,
      (result, item) => {
        if (!result) {
          return false;
        } else if (!test) {
          return Boolean(item);
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

  _.extend = function(obj, otherObj) {
    if (arguments.length > 2) {
      _.each(arguments[arguments.length - 1], (value, key) => {
        obj[key] = value;
      });
    } else {
      _.each(otherObj, (value, key) => {
        obj[key] = value;
      });
    }
    return obj;
  };

  /**
  | FUNCTIONS
  |~~~~~~~~~~
  **/

  _.once = function(func) {
    let count = 0;
    let result;
    return function(value) {
      if (count > 0) {
        return result;
      } else {
        result = func(value);
        count++;
        return result;
      }
    };
  };

  _.memoize = function(func) {
    let result = {};
    return function(value) {
      if (value in result) {
        return result[value];
      } else {
        result[value] = func(value);
        return result[value];
      }
    };
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
