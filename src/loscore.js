(() => {
  'use strict';
  
  window._ = {};

  // identity should return the first argument it receives. This may seem useless because of how simple it is, but later it will be used by functions that require a transformation function. If a transformation function is not supplied as an argument, _.identity will be used in its place.
  
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

  //tail should return all but the first element of array.
  _.tail = (array) => {
    let result = [];
    for (const e of array) {
      result.push(e);
    }
    result.shift();
    return result;
  };

  //take should create a slice of an array with n elements taken from the beginning
  _.take = (array, n) => {

    let result = [];
    let i = 0;

    if (n === 0) {
      return result;
    } else {
    do {
      result.push(array[i]);
      i++;
    } while (i < n && i < array.length);
  }

    return result;
  };


  // takeRight should create a slice of an array with n elements taken from the end
  _.takeRight = (array, n = 1) => {
    let result = [];
    let i = array.length-(n);

    if (n === 0) {
      return result;
    }
    if (i < 0) {
      i = 0;
    }
    
    do {
      result.push(array[i]);
      i++;
      } while (i < array.length);
  
    return result;
  };

 
//uniq should take an array and return a duplicate-free version
  _.uniq = (array) => {
  let result = [];
  result.push(array[0]);

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < result.length; j++) { 
      if (array[i] === result[j]) {
        break;
      } else if (j === result.length-1) {
        result.push(array[i]);
      }
    }
  }

  return result;
  };

  /**
  | COLLECTIONS
  |~~~~~~~~~~
  **/ 

  //size should return the size of collection by returning its length for array-like values, number of characters in a string, or number of elements in an object.
  _.size = (collection) => {
    if (Array.isArray(collection) || typeof collection === "string") {
      return collection.length;
    } else if (typeof collection === "object") {
      let objectLength = Object.keys(collection);
      return objectLength.length;
    }
  };

  // indexOf should get the first index at which the target is found in the array.
  _.indexOf = (array, target) => {
    let i = 0;
    let result;
    _.each(array, element => {
      if (element === target && !result) {
        result = i;
      } else {
        i++;
      }
    })

    return (result !== undefined) ? result : -1;
  };

  //size should call an 'iteratee' for each element of the collection. It can accept both objects AND arrays. The iteratee should receive the value, key (or index), and collection. It has no return value and simply runs the given function over each element of the array.
  _.each = (collection, iteratee) => {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        iteratee(collection[i], i, collection);
      } 
    } else {
      for (const key in collection) {
        iteratee(collection[key], key, collection)
      }
    }
  };

  //map should return a new array containing all results returned by calling the iteratee with the value, key (or index), and collection. In other words, the iteratee should return the resulting value that is to be stored in the array eventually returned by map.
  _.map = (collection, iteratee) => {
    const result = [];
    _.each(collection, element => {
      let value = iteratee(element);
      result.push(value);
    });
    return result;
  };

  // filter should return an array of all elements of an array that pass a given truth test. Return all elements if no truth test is given. Use _.each. Think about why you should not use _.map to write _.filter. BIG HINT: The callback here should return a boolean.
  _.filter = (collection, test) => {
    const result = [];
    if (!test) {
      const result = [];
      _.each(collection, element => {
        result.push(element);
      });
    } else {
      _.each(collection, element => {
        if (test(element)) {
          result.push(element);
        }
      });
      return result;
    }
  };

  //reject should return all elements of an array that DON'T pass a truth test. Use _.filter.
  _.reject = (collection, test) => {
    const result = [];
    _.filter(collection, element => {
      if (!test(element)) {
        result.push(element);
      }
    })
    return result;
  };

  // Rewrite _.pluck so that it uses for loops and does not use any built-in methods.
  _.pluck = (collection, key) => {
    const result = [];
    for (const item of collection) {
      result.push(item[key]);
    }
    return result;
  };


  //reduce should "reduce" a collection to a single value by repetitively calling the iterator(accumulator, item) for each item. The accumulator should be the return value of the previous iterator call.
  //If no starting value is passed, the first element in the collection should be used as the accumulator.
  _.reduce = (collection, iterator, accumulator) => {
    if (accumulator === undefined) {
      accumulator = collection[0];
      let testArray = _.takeRight(collection, collection.length-1)
      
      _.each(testArray, element => {
        accumulator = iterator(accumulator, element, collection);
      });
    } else {
      _.each(collection, element => {
        accumulator = iterator(accumulator, element, collection);
      });
    }

    return accumulator;
  }

  //_.contains determines if the array or object contains a target value. It uses '==='. We have done this one for you, using reduce. Once you write a correct reduce, the tests for this one should also pass. Please do not proceed until you understand what is going on.
  _.contains = (collection, target) => {
    return _.reduce(collection, (wasFound, item) => {
      if (wasFound) {
        return true;
      }
      return item === target;
    }, false);
  };

  //every should determine if all the elements pass the given truth test. It stakes in a callback (the test), and should return a boolean.
  _.every = function (collection, test) {
    if (collection.length === 0) {
      return true;
    }    

    return _.reduce(collection, (testResult, item) => {
      if (test === undefined) {
        if (!testResult) {
          return false;
        }
        return item;
      } else {
        if (!testResult) {
          return false;
        }
        return test(item);
      }
    }, true);
  };

  /**
  | OBJECTS
  |~~~~~~~~~~
  **/

  //extend should "extend" a main object with the properties of another object. The first argument should be the main object and subsequent arguments should be objects to add to the main object. It makes shallow copies only. Use _.each.
  _.extend = function (destObj, ...sourceObj) {
     _.each(sourceObj, element => {
      for (const key in element) {
        destObj[key] = element[key];
      }
    })
    return destObj;
  };

  /**
  | FUNCTIONS
  |~~~~~~~~~~
  **/

  //once should return a function that can be called at most one time. Any subsequent calls should return the previously returned value. Use closures.
  _.once = function (func) {
    return checker(2, func);
  };

  const checker = (i, func) => {
    let result;
    return function() {
      if (--i > 0) {
        result = func.apply(this, arguments);
      }
      return result;
    };
  }

  //memoize should take a function as an input. It takes the results from the input function and stores them (a cache). It should return a function that, when called, will check if it has already computed a result for the given argument. It should return the cached value if possible. Assume the input function only takes primitives as arguments. Possibly use json stringify?
  _.memoize = function (func) {
    let memo = {};

    return function(){
      let key = JSON.stringify(arguments);
      if (memo[key]){
        return memo[key];
      } else {
        let val = func.apply(null, arguments);
        memo[key] = val;
        return val;
      }
    }
  }
  
  //should call the method named by functionOrKey on each value in the list. Assume there are no extra arguments.
  // Besides being a string, functionOrKey can also be a function passed in. If it is a function, then we can apply the values directly onto it. Possibly use .apply?
  _.invoke = function (collection, functionOrKey) {
    if (typeof functionOrKey === "string") {
      return _.map(collection, element => {
        return element[functionOrKey]();
      });
    } else if (typeof functionOrKey === "function") {
      return _.map(collection, (element) => {
        return functionOrKey.apply(element);
      });
    }
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

