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
    return array.slice(1);
  };

  _.take = (array, n = 1) => {
    return array.slice(0, n);
  };

  _.takeRight = (array, n = 1) => {
    return array.slice(Math.max(array.length-n, 0));
  };
  

  _.uniq = (array) => {
    let newArray = [];
    for (const i of array){
      let count = 0;
      for (const k of newArray){
        if (k === i){
          count += 1;
        }
      }
      if (count === 0){
        newArray.push(i);
      }
    }
    return newArray;
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
    let newArray = [];
    _.each(array, function(k, l){
      for (let i = 0; i < array.length; i++){
        if (k === target){
          result = l;
        }
      }
    });
    return result;
  };

  _.each = (collection, iteratee) => {
    if (Array.isArray(collection)){
      for (let i = 0; i < collection.length; i++){
        iteratee(collection[i], i, collection);
      }
    } else {
      for (const k in collection){
        iteratee(collection[k], k, collection);
      }
    }
    //if an array loop through it and do shit
    //if object, do something else bc objects
  };

  _.map = (collection, iteratee) => {
    let result = [];
    _.each(collection, function (val, i, collection){
      result.push(iteratee(val, i, collection));
    })
    return result;
  };

  _.filter = (collection, test) => {
    let result = [];
    _.each(collection, function (values){
      if (test(values) === true){
        result.push(values);
      }
    });
    return result;
  };

  _.reject = (collection, test) => {
    let result = [];
    _.filter(collection, function (value){
      if (!test(value)){
        result.push(value);
      }
    })
    return result;
  };

  _.pluck = (collection, key) => {
    let result = [];
    for (const i of collection){
      for (const k in i){
        if (k === key){
          result.push(i[k]);
        }
      }
    }
    return result;
  };

  _.reduce = (collection, iterator, accumulator) => {
    let result = [];
    _.each(collection, function (value, index, collection){
      
    })
    return result;
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

