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
    return array.slice(1);
  };

  _.take = (array, n) => {
    // YOUR CODE HERE
    let result = (n === 0 ? []
                : n > 0 ? array.slice(0, n)
                : array.slice(0,1));
    return result;

  };

  _.takeRight = (array, n) => {
    // YOUR CODE HERE
    let result = (n === 0 ? []
                : n > 0 ? array.slice(-n)
                : array.slice(-1));
    return result; 
  };

  _.uniq = (array) => {
  //   // YOUR CODE HERE
    let result = [];
    let firstElement = true;
      for (let value of array){
        for (let i = 0; i < result.length; i++){
          if (value === result[i]){
            firstElement = false;
          }
        }
        if (firstElement === true){
          result.push(value);
        }
        firstElement = true;
      }
    return result;
  };

  /**
  | COLLECTIONS
  |~~~~~~~~~~
  **/ 

  _.size = (collection) => {
    // YOUR CODE HERE
    let length = 0; 
    for (let key in collection){
      if (collection[key]){
        length++
      }
    }
    return length;
  };

  _.indexOf = (array, target) => {
    // YOUR CODE HERE
    let result = -1;
    _.each(array, (val, index)=> {
      // console.log(array, "target", target, "index", index);
      for (; index < array.length; index++){
        if (val === target && result === -1){
          result = index;
          break;
        }
      }
    });
    return result;
  };

  _.each = (collection, iteratee) => {
    // YOUR CODE HERE
    if (Array.isArray(collection)){
      // console.log(collection, iteratee);
      for (let index = 0; index < collection.length; index++){
        iteratee(collection[index], index, collection);
      }
    } else {
      for (let key in collection){
        iteratee(collection[key], key, collection);
      }
    }
  };

  _.map = (collection, iteratee) => {
    // YOUR CODE HERE
    let result = [];
    _.each(collection, (val) => {
      // console.log("collection", collection, "iteratee", iteratee);
      result.push(iteratee(val));
    });
  
    return result;
  };

  _.filter = (collection, test) => {
    // YOUR CODE HERE
    let result = [];
    _.each(collection, (val, index, collection) =>{
      // console.log("collection", collection, "test", test, "val", val);
      if (!!test(val)){
        result.push(val);
      }
    });

    if (result.length === 0){
      result = collection;
    }

    return result;
  };

  _.reject = (collection, test) => {
    // YOUR CODE HERE
    let result = [];
    // console.log("collection", collection, "test", test);
    _.filter(collection, (val)=> {
      if (!test(val)){
        result.push(val);
      }
    });
    return result;
  };

  _.pluck = (collection, key) => {
    let result = [];
    for (const obj of collection){
      if (obj[key]){
        result.push(obj[key]);
      }
    }
    return result;

    /* this is original code
    return _.map(collection, (item) => {
      console.log(collection, key);
      return item[key];
    });
    */
  };

  _.reduce = (collection, iterator, accumulator) => {

    /* Collection: The is an array or an object that you want to reduce

    Iterator: This a function that does something to the items in the collection

    Accumulator: This is the value that your accumulation can start with if something is passed in for this value. Sometimes nothing will be passed in here. Then start form collection[0].
    */


    //console.log("collection", collection, "iterator", iterator, "accumulator", accumulator);
    
    let result = accumulator;

    if (accumulator === undefined){
      result = collection[0];
      collection = collection.slice(1, collection.length); // get rid of 1st value of collection and update collection
    }

    _.each(collection, (value) => {
      //console.log(collection);
      // console.log("value", value);
      result = iterator(result, value);
      
    });
    // console.log("result", result);
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

  _.every = function (collection, test) {
    // YOUR CODE HERE
    // console.log("collection", collection, "test", test);
    return _.reduce(collection, (acc, val) => {
      //  console.log("val", val);
       if (test === undefined){
          acc = _.contains(collection, false);
          return !acc;
      }
      
      if (acc === true && !!test(val)){
        acc = true;
      } else {
        acc = false;
      }
      // console.log("acc", acc);
      return acc;
     }, true);
  };

  /**
  | OBJECTS
  |~~~~~~~~~~
  **/

  _.extend = function (obj) {
    // YOUR CODE HERE
    let extend = obj; 
    // console.log(arguments); //the values of the arguments passed to that function
    for (let arg of arguments){
      // console.log(arg);
      _.each(arg, (value, key)=>{
        // console.log("value", value, "key", key);
        extend[key] = value;
      });
    }
    return extend;
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

