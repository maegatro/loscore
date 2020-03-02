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
    let result = (n === 0 ? []
                : n > 0 ? array.slice(0, n)
                : array.slice(0,1));
    return result;

  };

  _.takeRight = (array, n) => {
    // YOUR CODE HERE
    let result = (n === 0 ? []
                : n > 0 ? array.slice(-n)
                : array.slice(-1));
    return result; 
  };

  _.uniq = (array) => {
  //   // YOUR CODE HERE
    let result = [];
    let firstElement = true;
      for (let value of array){
        for (let i = 0; i < result.length; i++){
          if (value === result[i]){
            firstElement = false;
          }
        }
        if (firstElement === true){
          result.push(value);
        }
        firstElement = true;
      }
    return result;
  };

  /**
  | COLLECTIONS
  |~~~~~~~~~~
  **/ 

  _.size = (collection) => {
    // YOUR CODE HERE
    let length = 0; 
    for (let key in collection){
      if (collection[key]){
        length++
      }
    }
    return length;
  };

  _.indexOf = (array, target) => {
    // YOUR CODE HERE
    let result = -1;
    _.each(array, (val, index)=> {
      // console.log(array, "target", target, "index", index);
      for (; index < array.length; index++){
        if (val === target && result === -1){
          result = index;
          break;
        }
      }
    });
    return result;
  };

  _.each = (collection, iteratee) => {
    // YOUR CODE HERE
    if (Array.isArray(collection)){
      // console.log(collection, iteratee);
      for (let index = 0; index < collection.length; index++){
        iteratee(collection[index], index, collection);
      }
    } else {
      for (let key in collection){
        iteratee(collection[key], key, collection);
      }
    }
  };

  _.map = (collection, iteratee) => {
    // YOUR CODE HERE
    let result = [];
    _.each(collection, (val) => {
      // console.log("collection", collection, "iteratee", iteratee);
      result.push(iteratee(val));
    });
  
    return result;
  };

  _.filter = (collection, test) => {
    // YOUR CODE HERE
    let result = [];
    _.each(collection, (val) =>{
      // console.log("collection", collection, "test", test, "val", val);
      if (!!test(val)){
        result.push(val);
      }
    });

    if (result.length === 0){
      result = collection;
    }

    return result;
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

