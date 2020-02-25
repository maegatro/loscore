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

  _.take = (array, n) => {
    if (typeof n === "undefined") {
      return array.slice(0,1);
    }
    return array.slice(0, n);
  };

  _.takeRight = (array, n) => {
    if (n === 0) {
      return [];
    }if (typeof n === "undefined") {
      return array.slice(-1);
    }
    return array.slice(-n)
  };

  _.uniq = (array) => {
    let unique = true;
    let result = [];
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < result.length; j++) {
        if (array[i] === result[j]) {
          unique = false;
        }
      }
      if (unique === true) {
        result.push(array[i]);
      }
      unique = true;  
    }return result;
  }

  /**
  | COLLECTIONS
  |~~~~~~~~~~
  **/ 

  _.size = (collection) => {
    let counter = 0;
    for (let item in collection) {
      counter ++;
    }return counter;    
  };

  _.indexOf = (array, target) => {
     let resultArray = []
    _.each(array, function(value, key) {
      if (value === target) {
        resultArray.push(key)
      }  
    });
    if (resultArray.length >= 1) {
      return resultArray[0]
    }else {
      return -1;
    }
  };

  _.each = (collection, iteratee) => {
    if (Array.isArray(collection) === true) {
      for (let i = 0; i < collection.length; i++) {
        iteratee(collection[i], i, collection)
      }
    }else {
      for (let item in collection) {
        iteratee(collection[item], item, collection)
      }  
    }  
  };

  _.map = (collection, iteratee) => {
    let resultArray = [];
    _.each(collection, function (value){
        let newValue = iteratee(value)
        resultArray.push(newValue)
    }); return resultArray;
  };

  _.filter = (collection, test) => {
    let result = [];
    _.each(collection, function(value){
      if(test(value)) {
        result.push(value);
      }
    });
    return result;
  };

  _.reject = (collection, test) => {
    let result = []
    _.filter(collection, function(value) {
      if (!test(value)) {
        result.push(value)
      }
      
    });
    return result;
  };

  // _.pluck = (collection, key) => {
  //   return _.map(collection, (item) => {
  //     return item[key];


  _.pluck = (collection, key) => {
    let result = [];
      for (let object of collection) {
        result.push(object[key])
      }
    return result;  
  };

  _.reduce = (collection, iterator, accumulator) => {
      let result = accumulator;
      if (typeof accumulator === "undefined") {
        result = collection[0];
        collection = _.tail(collection)
      }
      _.each(collection, function(item) {
        result = iterator(result, item);
      });return result;
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
    if (typeof test === "undefined") {
      return true;
    }
    return _.reduce(collection, function(wasPassed, item) {
      if (!wasPassed) {
        return false;
      }
      else return test(item);     
     }, true);
  };

  /**
  | OBJECTS
  |~~~~~~~~~~
  **/

  _.extend = function (objA, ...objB) {
    for (let item of objB) {
      _.each(item, function(value, key){
        objA[key] = value;
      })
    }return objA;
  };

  /**
  | FUNCTIONS
  |~~~~~~~~~~
  **/
 
  _.once = function (func) {
    let counter = 0;
    let result;
    return function(...args) {
      if (counter <= 0) {
        counter ++
        let value = func(args)
        result = value;
        return result;
      }
      else {
        return result;
      }

    }
  };

  _.memoize = function (func) {
    let cache = {};
      return function(args) {
        if (cache[args]) {
          return cache[args]
        }else {
          let value = func(args)
          cache[args] = value;
          return value;
        }
      }  
  };
  
  _.invoke = function (collection, functionOrKey) {
    let result = [];
    if (typeof functionOrKey !== "function") {
      _.each(collection, function (item){
        result.push(item[functionOrKey].apply(item)) 
      })
    }else {
       _.each(collection, function(item){
        result.push(functionOrKey.apply(item));
      })
    }return result;
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

