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

  _.each = (collection, iteratee) => {
    // YOUR CODE HERE
    let type = typeof collection;
    if (collection instanceof Array){
      for (let i = 0; i < collection.length; i++){
        iteratee(collection[i], i, collection);
      } 
      } else if (type === "object") {
        for (let item in collection) {
          iteratee(collection[item], item, collection);
        }
      }
 
  };

  _.indexOf = (array, target) => {
    // YOUR CODE HERE

    let exists = [];
    _.each(array,function(value,i){
      console.log("array",array)
      console.log("value",value)
      console.log("i",i)
      console.log("target",target)
      if (value === target){
        console.log("Found!", i)
        exists.push(i)
      }
    })
    
    if(exists.length === 0){
      return -1;
    } else {
    return exists[0];
    }

  };


  _.map = (collection, iteratee) => {
    // YOUR CODE HERE
    let resultArray = [];

    _.each(collection,function(value){
      resultArray.push(iteratee(value))
    })
    return resultArray;

  };



  _.filter = (collection, test) => {
    // YOUR CODE HERE

    let resultArray = [];
    _.each(collection,function(value){
      if(test(value)){
        resultArray.push(value)
      }
    })
    return resultArray;

  };

  _.reject = (collection, test) => {
    // YOUR CODE HERE

    let resultArray = [];
    _.filter(collection,function(value){
      if(!test(value)){
        resultArray.push(value)
      }
    })

    return resultArray

  };

  _.pluck = (collection, key) => {

    let resultArray = [];
 
    for(let object of collection){
      for(let id in object){
        if(id === key){
          resultArray.push(object[id])
        }
      }
    }
    console.log("resultArray is", resultArray)
    return resultArray;    

  };

  _.reduce = (collection, iterator, accumulator) => {
  };

  _.contains = (collection, target) => {

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

