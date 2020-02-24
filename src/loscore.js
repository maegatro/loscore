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
    let indexOfTarget = -1;
    _.each(array, function(key, index){
      if(target === key && indexOfTarget === -1){
        indexOfTarget = index;
      }
    })
    return indexOfTarget;
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
    let result = [];
    _.each(collection, function(value, index, list){
      result.push(iteratee(value, index, list))
    });
    return result;
  };

  _.filter = (collection, test) => {
    // YOUR CODE HERE
    let result = [];
    _.each(collection, function(value){
      if(test(value)){
        result.push(value);
      }
    })
    return result;
  };

  _.reject = (collection, test) => {
    // YOUR CODE HERE
    let result = [];
    _.filter(collection, function(value){
      if(!test(value)){
        result.push(value);
      }
    })
    return result;
  };

  _.pluck = (collection, key) => {
    let result = [];
    for(let i of collection){
      result.push(i[key])
    }
    return result;
  };

  _.reduce = (collection, iterator, accumulator)=> {
    let memo = accumulator;
    if(memo === undefined){
      memo = collection[0];
      collection = _.tail(collection);
    }
    _.each(collection, function(item, index, collection){
    memo = iterator(memo, item);
    });
    return memo;
  };

  _.contains = (collection, target) => {
    return  _.reduce(collection, (wasFound, item) => {
      if (wasFound) {
        return true;
      }
      return item === target;
    }, false);
  };

  _.every = function (collection, test) {
    // YOUR CODE HERE
    if(test === undefined){
      return true;
    };
    let boolean = true;
    _.reduce(collection, function(memo, item){
      if(!test(item)){
        boolean = false;
      }
    });
    return boolean;
  }
  /**
  | OBJECTS
  |~~~~~~~~~~
  **/

  _.extend = function (obj) {
    // YOUR CODE HERE
    _.each(obj, function(value, key, collection){
      collection.key = value;
      _.extend(obj);
    });
    return obj
  };

  /**
  | FUNCTIONS
  |~~~~~~~~~~
  **/

  _.once = function (func) {
    // YOUR CODE HERE
    return function called(func){
      return func;
    }
    called = undefined;
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

