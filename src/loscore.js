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

 
  _.uniq = (array) => {
    const uniqArray = [];
    let count = 0;
    let found = false;
      for (let i = 0; i < array.length; i++){  
        for(let j = 0; j < uniqArray.length; j++){
          if (array[i] === uniqArray[j]){
            found = true;
          }        
      }
      count++
      if (count === 1 && found === false){
        uniqArray.push(array[i])
      }
      count = 0;
      found = false;
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

  _.indexOf = (array, target) => {
    let result = -1
    _.each(array, (value, index) =>{
      if (value === target && result === -1){
        result = index;   
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
//skip for now 
  _.extend = function (obj) {
    let newObj = {}
    _.each(obj, (value) =>{
        newObj[value] = obj[value]
      //  newObj[value] += obj[value];
    });
    return newObj;
  };

  /**
  | FUNCTIONS
  |~~~~~~~~~~
  **/

  _.once = function (func) {
    let ran = false;
    let output;
    return (...args) => {
      if (ran === false){
        ran = true
      output = func(...args);
      } 
      return output;
    }    
  };


  _.memoize = function (func) {
    const memory = [];
    let result;
    return (...args) =>{
      let i = args[0];
      i in memory ? memory.push(i) : result = func(i); memory[i] = result;
      return result;
    }
  };

  
  _.invoke = function (collection, functionOrKey) {
    const results =[];
    if (typeof functionOrKey === "string"){
      for (let j = 0; j < collection.length; j++){
        results.push(collection[j][functionOrKey].apply(collection[j]));
      }
    } else {
      for (let i = 0; i < collection.length; i++){
        results.push(functionOrKey.apply(collection[i]))
      }
    }
    return results;
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

