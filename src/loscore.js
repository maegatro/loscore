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
    let returnArray = [];
    for(let i=1; i<=array.length-1;i++){
      returnArray.push(array[i]);
    }
    return returnArray;
    
  };

  _.take = (array, n) => {
    // YOUR CODE HERE
    let returnArray = [];

    if (n === 0){
        return returnArray;
    }

    if (!n){
        returnArray.push(array[0]);
        return returnArray;
    }

    for(let i = 0; i <= n-1; i++){
        if (typeof array[i] !== "undefined"){
            returnArray.push(array[i])
        }
    }
    return returnArray;
  };

  _.takeRight = (array, n) => {
    // YOUR CODE HERE
    let returnArray = [];

    if (n === 0){
        return returnArray;
    }

    if (!n){
        returnArray.push(array[array.length-1]);
        return returnArray;
    }

    for(let i = (array.length - n); i <= n; i++){
        if (typeof array[i] !== "undefined"){
            returnArray.push(array[i])
        }
    }
    return returnArray; 
  };

  _.uniq = (array) => {
    // YOUR CODE HERE

    let returnArray = [];
    let tempValue = undefined;
    let alreadyExists = false;

    for(let i = 0; i < array.length; i++){
        tempValue = array[i];
        for(let j = 0; j<= returnArray.length; j++){
            if(returnArray[j] === tempValue){
                alreadyExists = true;
            }
        }
        if (alreadyExists === false){
            returnArray.push(tempValue);
        }
        alreadyExists = false;
        tempValue = undefined;
    }
    return returnArray;

    //The code below works but doesn't pass the test because it produces a SORTED array which the test doesn't validate.
    // let returnArray = [];
    // let tempObj = {};

    // for(let i = 0; i < array.length; i++){

    //     if(tempObj[array[i]]){
    //         tempObj[array[i]]++; 
    //     } else {
    //         tempObj[array[i]] = 1
    //     }
    // }
    // //console.table(tempObj)
    // for(let key in tempObj){
    //     returnArray.push(key)
    // }
    // //console.log(returnArray)
    // return returnArray;
  };

  /**
  | COLLECTIONS
  |~~~~~~~~~~
  **/ 

  _.size = (collection) => {
    // YOUR CODE HERE
    if (Array.isArray(collection)){
      return collection.length
    } else if (typeof collection === 'object' && collection.constructor === Object) {
      return Object.keys(collection).length;
    } else if (typeof collection === "string"){
      return collection.length;
    }
  };

  _.indexOf = (array, target) => {
    // YOUR CODE HERE
  };

  _.each = (collection, iteratee) => {
    // YOUR CODE HERE
  };

  _.map = (collection, iteratee) => {
    // YOUR CODE HERE
  };

  _.filter = (collection, test) => {
    // YOUR CODE HERE
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

