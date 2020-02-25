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
    const newArr = [];
    for (let i = 1; i < array.length; i++){
      newArr.push(array[i]);
    }
    return newArr;
  };

  _.take = (array, n) => {
    const newArr = [];
    if (n === 0){
      //return newArr;
    } else if (!n) {
      newArr.push(array[0])
    } else if (n > array.length){
      for (let i = 0; i < array.length; i++){
        newArr.push(array[i]);
     }
    // return newArr;
    } else {
      for (let i = 0; i < n; i++){
        newArr.push(array[i]);
      }
    }
      return newArr;
  };

  _.takeRight = (array, n) => {
    const newArr = [];
    const length = array.length;
    if (n === 0 ){

    } else if (!n){
      newArr.push(array[length -1]);
    } else if (n > length){
      for (let i = 0; i < length; i++){
        newArr.push(array[i]);
      }
    } else {
      for (let i = 0; i < n; i++){
        newArr.unshift(array[length - i - 1])        
      }
    }
    return newArr;
  };

  _.uniq = (array) => {
    // YOUR CODE HERE
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

