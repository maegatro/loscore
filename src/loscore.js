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
    let newArray = [];
    for(let i = 1; i < array.length; i++){
      newArray.push(array[i]);
    }
    return newArray;
  };

  _.take = (array, n) => {
    // YOUR CODE HERE
    let newArray = [];
    if(n === undefined){
      n = 1;
    } else if(n === 0){
      return newArray;
    } else if(n > array.length){
      n = array.length;
    }
    for(let i = 0; i < n; i++){
      newArray.push(array[i]);
    }
    return newArray;
  };

  _.takeRight = (array, n) => {
    // YOUR CODE HERE
    let newArray = [];
    if(n === undefined){
      n = 1;
    } else if(n === 0){
      return newArray;
    } else if(n > array.length){
      n = array.length;
    }
    for(let i = 0; i < n; i++){
      newArray.push(array[i + (array.length - n)]);
    }
    return newArray;
  };

  _.uniq = (array) => {
    // YOUR CODE HERE
    let newArray = Array.from(new Set(array));
    return newArray;
  };

  /**
  | COLLECTIONS
  |~~~~~~~~~~
  **/ 

  _.size = (collection) => {
    // YOUR CODE HERE
    return Object.keys(collection).length;
  };

  _.indexOf = (array, target) => {
    // YOUR CODE HERE
  };

  _.each = (collection, iteratee) => {
    // YOUR CODE HERE
    if(Array.isArray(collection)){
      for(let [index, key] of collection.entries()){
        iteratee(key, index, collection)
      }
    } else{
      for(let key in collection){
        iteratee(collection[key], key, collection);
      }
    }
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

