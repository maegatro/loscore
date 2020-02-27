(() => {
  'use strict';
  
  window._ = {};

  _.identity = val => val;

  _.add = (x, y) => x + y;

  /**
  | ARRAYS
  |~~~~~~~~~~
  **/ 

  _.head = (array) => {
    return array[0];
  };

  _.tail = (array) => {
    let output = [];
    if (array.length <= 1) {
      return output;
    } 
    for (let i = 1; i < array.length; i++) {
      output.push(array[i]);
    } return output;
  };

  _.take = (array, n = 1) => {
    let output = [];
    if (n === 0) {
      return output;
    } 
    for (let i = 0; i < (n > array.length ? array.length : n); i++) {
      output.push(array[i]);
    } return output;    
  };

  _.takeRight = (array, n = 1) => {
    let output = [];
    if (n === 0) {
      return output;
    } else if (n > array.length) {
      return array;
    }
    for (let i = array.length - 1; n > 0; i--, n--) {
      output.unshift(array[i]);
    } return output;
  };

  _.uniq = (array) => {
    let match = false;
    let output = [];
    for (let i = 0; i < array.length; i++){
        match = false;
        output.length === 0 && output.push(array[0]);
        for (let j = 0; j < output.length; j++){
            if (array[i] === output[j]) match = true;
        } if (!match) output.push(array[i]);
    } return output;
  }; 

  /**
  | COLLECTIONS
  |~~~~~~~~~~
  **/ 

  _.size = (collection) => {
    let length = 0;
    if (collection instanceof Array)
      length = collection.length;
    else for (let key in collection){
        collection.hasOwnProperty(key) && length++;
      }
    return length;
  };

  _.indexOf = (array, target) => {
    let foundIndex = -1;
    _.each(array, (value, index) => {
      if (foundIndex === -1 && target === value)
        foundIndex = index;
    });
    return foundIndex;
  };

  _.each = (collection, iteratee) => {
    if (collection instanceof Array){
      for (let i = 0; i < collection.length; i++){
        iteratee(collection[i], i, collection);
      }
    } else {
      for (let key in collection){
        iteratee(collection[key], key, collection);
      }
    }
  };

  _.map = (collection, iteratee) => {
    let newArray = [];
    _.each(collection, function(value, i, collection){
      newArray.push(iteratee(value, i, collection));
    });
    return newArray;
  };

  _.filter = (collection, test) => {
    let newArray = [];
    _.each(collection, (value) => test(value) && newArray.push(value));
    return newArray;
  };

  _.reject = (collection, test) => {
    let newArray = [];
    _.filter(collection, (value) => !test(value) && newArray.push(value));
    return newArray;
  };

  _.pluck = (collection, key) => {
    let newArray = []
    for (let obj in collection){
      collection[obj].hasOwnProperty([key]) &&
        newArray.push(collection[obj][key]);
    }
    return newArray;
  };

  _.reduce = (collection, iterator, accumulator) => {
    if (accumulator === undefined){
      accumulator = collection[0];
      collection = _.tail(collection);
    } 
    _.each(collection, function(value, i, collection){
      accumulator = iterator(accumulator, value);
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
    if (collection.length === 0 || test === undefined){
      return true;
    } else {return _.reduce(collection, function(passed, item){
      if (!passed) {
        return false;
      }
      return test(item);
    }, true)};
  };

  /**
  | OBJECTS
  |~~~~~~~~~~
  **/

  _.extend = function (...obj) {
    for (let i = 1; i < obj.length; i++) {
      _.each(obj[i], (value, key, collection)=>{
        if(obj[i].hasOwnProperty(key)){
          obj[0][key] = obj[i][key];
          }
        });
    }
    return obj[0];
  };

  /**
  | FUNCTIONS
  |~~~~~~~~~~
  **/

  _.once = function (func) {
    let wasCalled = false;
    let prevResults;
    return function(...args){
      if (wasCalled)
        return prevResults;
      wasCalled = true;
      return prevResults = func(...args);
    } 
  };

  _.memoize = function (func) {
    let cache = {};
    return function(args){
      return JSON.stringify(args) in cache
      ? cache[(JSON.stringify(args))]
      : cache[(JSON.stringify(args))] = func(args);  
    }
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

