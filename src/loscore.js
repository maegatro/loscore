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

  _.take = (array, n=1) => {
    // YOUR CODE HERE
    if (n == 0) {
      return [];
    }
    return array.slice(0,n); 
  };

  _.takeRight = (array, n=1) => {
    // YOUR CODE HERE
    if (n == 0) {
      return [];
    }
    return array.slice(-n); 
  };

  _.uniq = (array) => {
    // YOUR CODE HERE
    let uniq_array = [array[0]];
    for (let e = 0; e < array.length; e++) {
      for (let i = 0; i < uniq_array.length; i++) {
        if (uniq_array[i] == array[e]) {
          break;
        } else if (i == uniq_array.length - 1) {
          uniq_array.push(array[e]);
        }
      }
    }
    return uniq_array;
  };

  /**
  | COLLECTIONS
  |~~~~~~~~~~
  **/ 

  _.size = (collection) => {
    // YOUR CODE HERE
    let count = 0;
    for (let i in collection) {
      count = count + 1;
    }
    return count;
  };

  _.each = (collection, iteratee) => {
    // YOUR CODE HERE
    if (Array.isArray(collection)) {
      for (let k = 0; k < collection.length; k++) {
        iteratee(collection[k], k, collection);
      }
    } else {
      for (let k in collection) {
        iteratee(collection[k], k, collection);
      }
    }
  };

  _.indexOf = (array, target) => {
    // YOUR CODE HERE
    let index = -1;
    _.each(array, function(k,i) {
      if (k == target && index == -1)  {
        index = i;
      }
    });
    return index;
  };

  _.map = (collection, iteratee) => {
    // YOUR CODE HERE
    let mapped_array = [];
    _.each(collection, function(k,i){
      mapped_array.push(iteratee(k,i));
    });
    return mapped_array;
  };

  _.filter = (collection, test) => {
    // YOUR CODE HERE
    let filtered_array = [];
    _.each(collection, function(k,i){
      if (test(k,i)) {
        filtered_array.push(k);
      }
    });
    return filtered_array;
  };

  _.reject = (collection, test) => {
    // YOUR CODE HERE
    let rejected_array = [];
    let filtered_array = _.filter(collection, test);
    for (let i=0; i < collection.length; i++) {
      if (_.indexOf(filtered_array, collection[i]) == -1){
        rejected_array.push(Number(collection[i]));
      }
    };
    return rejected_array;
  };

  _.pluck = (collection, key) => {
    let plucked = []
    for (let k in collection) {
      plucked.push(collection[k][key]);
    };
    return plucked;
  };

  _.reduce = (collection, iterator, accumulator) => {
    _.each(collection, (k, index) => {
      if(index == 0 && accumulator == undefined){
          accumulator = k;
      }else{
        accumulator = iterator(accumulator, k, index);
      }
    });
    return accumulator; 
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
    // YOUR CODE HERE
    let isTrue = 0;
    if (test == undefined) {
      return collection;
    };
    _.reduce(collection, (accumulator, item) => {
      if (!test(item)) {
        isTrue++;
      }
    });
    return !isTrue;
  };

  /**
  | OBJECTS
  |~~~~~~~~~~
  **/

  _.extend = function (obj) {
    // YOUR CODE HERE
    let extendedObj = obj;
    _.each(arguments, (obj) => {
      for (const prop in obj) {
        extendedObj[prop] = obj[prop];
      }
    });
    return extendedObj;
  };

  /**
  | FUNCTIONS
  |~~~~~~~~~~
  **/

  _.once = function (func) {
    // YOUR CODE HERE
    let wasExecuted = false;
    let firstResult = undefined;
    return function (args){
      if (!wasExecuted){
        wasExecuted = true;
        if (args != undefined) {
          firstResult = func(args);
        } else {
          firstResult = func(); 
        }
        return firstResult;
      }
      return firstResult;
    }
  };

  _.memoize = function (func) {
    // YOUR CODE HERE
    let memory = {};
    return (arg) => {
      if (!memory[arg]) {
        memory[arg] = func(arg);
        return memory[arg];
      } else {
        return memory[arg];
      }
    }
  };
  
  _.invoke = function (collection, functionOrKey) {
    // YOUR CODE HERE
    let result = [];
    console.log(collection[0])
    if (typeof functionOrKey === "string"){
      _.map(collection, (value) => {
        result.push(collection[0][functionOrKey].apply(value));
      });
    } else if (typeof functionOrKey === "function"){
      _.map(collection, (value) => {
        result.push(functionOrKey.apply(value));
      });
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

