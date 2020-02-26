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
    _.each(array, function(value, index){
      for (let i = 0; i < array.length; i++){
        if (value === target){
          if (result === -1){
            result = index;
          }
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
    let memo = accumulator;
    if (accumulator === undefined){
      memo = collection[0];
      collection = collection.slice(1, collection.length);
    }
    _.each(collection, function (value){
      memo = iterator(memo, value);
    });
    return memo;
  };

  _.contains = (collection, target) => {
    return _.reduce(collection, (wasFound, item) => {
      if (wasFound) {
        return true;
      }
      return item === target;
    }, false);
  };

  _.every = function (collection, truthTest) {
    if (truthTest === undefined){
      return true;
    }
    return _.reduce(collection, function (accumulator, value){
      return truthTest(value) && accumulator;
    }, true);
  };

  /**
  | OBJECTS
  |~~~~~~~~~~
  **/

  _.extend = function (mainObj, ...otherObjs) {
    let newObj = mainObj;
    _.each(otherObjs, function (value){
      for (const i in value){
        newObj[i] = value[i];
      }
    });
    return newObj;
  };

  /**
  | FUNCTIONS
  |~~~~~~~~~~
  **/

  _.once = function (func) {
    let wasExecuted = false;
    let firstResult = undefined;
    return function (n){
      if (!wasExecuted){
        wasExecuted = true;
        firstResult = func(n);
      }
      return firstResult;
    }
  };

  _.memoize = function (func) {
    let newObj = {};
    
    return function (val){
      if (!newObj[val]){
        newObj[val] = func(val);
      }
      return newObj[val];
    };
  };
  
  _.invoke = function (collection, functionOrKey) {
    let result = [];
    if (typeof functionOrKey === 'string'){
      for (let i = 0; i < collection.length; i++){
        result.push(collection[i][functionOrKey].apply(collection[i]));
      }
    } else {
      for (const e of collection){
        result.push(functionOrKey.apply(e));
      }
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

