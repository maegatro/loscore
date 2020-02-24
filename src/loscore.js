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

    _.each(array, (value, i) => {
    if(value == target && index == -1){
      index = i;
    }
    })
    return index
  };

  _.map = (collection, iteratee) => {
    var result = [];
    _.each(collection, (value, index) => {
      result.push(iteratee(value, index));
    });
    return result;
  };

  _.filter = (collection, test) => {
    var result = [];

    _.each(collection, (value, index) => {
      if(test(value, index)){
        result.push(value);
      }
    });
    return result;
  };

  _.reject = (collection, test) => {
    var original = [...collection];
    var array = _.filter(collection, test);
    var result = [];

    for(var i = 0; i < original.length; i++){
      if((_.indexOf(array, original[i])) == -1){
        result.push(original[i]);
      }
    }
    return result;
  };

  _.pluck = (collection, key) => {
    var result = [];
    for(var a in collection){
      result.push(collection[a][key]);
    }
    return result;
  };

  _.reduce = (collection, iterator, accumulator) => {
    _.each(collection, (value, index) => {
      if(index == 0 && accumulator == undefined){
          accumulator = value;
      }else{
        accumulator = iterator(accumulator, value, index);
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

  _.every = function (array, test) {
    var result = 0;
    if(test == undefined){
      return array;
    }

    _.reduce(array, function(accumulator, value){
      if(!test(value)){
        result++;
      }
    });

    if(result > 0){
      return false;
    }else{
      return true;
    }
  };

  /**
  | OBJECTS
  |~~~~~~~~~~
  **/

  _.extend = function (objA, objB, objC) {
    _.each(objB, function(value, key){
      objA[key] = value;
    });
    _.each(objC, function(value, key){
      objA[key] = value;
    });
    return objA;
  };

  /**
  | FUNCTIONS
  |~~~~~~~~~~
  **/

  _.once = function (func) {
    var result;
    return function () {
      if (func) {
        result = func.apply(this, arguments);
        func = undefined;
      }
      return result;
    }
  }

  _.memoize = function (func) {
    var cache = {};
    return function(){
      var key = JSON.stringify(arguments);
      if(!cache[key]){
        cache[key] = func.apply(this, arguments);
      }
      return cache[key];
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

