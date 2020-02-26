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
    } else if (!n) {
      newArr.push(array[0])
    } else if (n > array.length){
      for (let i = 0; i < array.length; i++){
        newArr.push(array[i]);
     }
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

  //skipped for now!!!
  _.uniq = (array) => {
    const uniqArray = [];
      for (let i = 0; i < array.length; i++){
        uniqArray.push(array[i])  
        for(let j = 0; j < uniqArray.length; j++){
        // if (array[i] !== uniqArray[j]){
        // }
      }
    }
    return uniqArray;
  };

  /**
  | COLLECTIONS
  |~~~~~~~~~~
  **/ 

  _.size = (collection) => {
    if (Array.isArray(collection)){
      return collection.length;
    } else if (typeof collection === 'object'){
      return Object.keys(collection).length
    } else {
        return collection.length;
    }
  };
  
  _.each = (collection, iteratee) => {
    if (Array.isArray(collection)){
      for (let i = 0; i < collection.length; i++){
        iteratee(collection[i], i, collection); 
      }
    } else {
       for (const key in collection){
         iteratee(collection[key], key, collection)
       }
    }
  };

  //skip for now
  _.indexOf = (array, target) => {
    let result;
    _.each(array, (value, index) =>{
      if (target === value){
        result = index;
        return
      } else {
        result = -1;
      }
    });
    return result;
  };

  _.map = (collection, iteratee) => {
    const newArr =[]
    _.each(collection, (value, index, collection) =>{
      newArr.push(iteratee(value, index, collection))
    });
    return newArr;
  };

  _.filter = (collection, test) => {
    const newArr =[];
    _.each(collection, (value) =>{
      if (test(value)){
        newArr.push(value)
      }
    });
    return newArr;
  };

  _.reject = (collection, test) => {
    const newArr =[];
    _.filter(collection, (value) => {
      if (test(value) === false){
        newArr.push(value);
      }
    })
    return newArr;
  };

  _.pluck = (collection, key) => {
    const newArr = [];
    for (let i = 0; i < collection.length; i++){
      newArr.push(collection[i][key])
    }
    return newArr;
  };

 
  _.reduce = (collection, iterator, accumulator) => {
    let currentCount = accumulator;
    if (accumulator === undefined) {
      currentCount = collection[0];
      collection = _.tail(collection, collection.length -1);
    }
    _.each(collection, (value) => {
      currentCount = iterator(currentCount, value);
    });
    return currentCount;
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
    if (!test){
      return true;
    }
    return _.reduce(collection, (pass, item) =>{
      if (!pass){
        return false;
      } else {
        return test(item);
      }
    }, true );
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

