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
    return array.slice(1, array.length);
  };

  _.take = (array, n = 1) => {
    return array.slice(0, n);
  };

  _.takeRight = (array, n = 1) => {
    if (n <= array.length){
      return array.slice(array.length - n, array.length);
    }else{
      return array;
    }
  };

  _.uniq = (array) => {
    var result = [];
    for(var originalIndex = 0; originalIndex < array.length; originalIndex++){
      var counter = 0;
      for(var resultIndex = 0; resultIndex < result.length; resultIndex++){
        if(result[resultIndex] == array[originalIndex]){
          counter++;
        }
      }
      if(counter == 0){
        result.push(array[originalIndex]);
      }
    }
    return result;
  };

  /**
  | COLLECTIONS
  |~~~~~~~~~~
  **/ 

  _.size = (collection) => {
    if(Array.isArray(collection) || typeof collection == "string"){
      return collection.length;
    }else if(typeof collection == "object"){
      return Object.keys(collection).length;
    }
  };

  _.each = (collection, iteratee) => {
    if(Array.isArray(collection)){
      for(let index = 0; index < collection.length; index++){
        iteratee(collection[index], index, collection);
      }
    }else{
      for (let index in collection){
        iteratee(collection[index], index, collection);
      }
    }
  };

  _.indexOf = (array, target) => {
    var index = -1;

    _.each(array, function(value, i){
    if(value == target && index == -1){
      index = i;
    }
    })
    return index
  };

  _.map = (collection, iteratee) => {
    var result = [];
    _.each(collection, function(value, index){
      result.push(iteratee(value, index));
    });
    return result;
  };

  _.filter = (collection, test) => {
    var result = [];

    _.each(collection, function(value, index){
      if(test(value, index)){
        result.push(value);
      }
    })
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

