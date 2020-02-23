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
    _.each(collection, (val) => {
      if (accumulator === undefined) {
        collection = collection[0];
        accumulator = iterator(val, 0);
      } else {
        accumulator = iterator(accumulator, val);
      }
      })
    return accumulator;
  };

  _.contains = (collection, target) => {
    return _.reduce(collection, (found, item) => {
      if (found) {
        return true;
      }
      return item === target;
    }, false);
  };

  _.every = function (collection,test) {
    if (test === undefined){
      return true;
    }
    return _.reduce(collection, (wasPassed, item) => {
      if(!wasPassed) {
        return false;
      }
      return test(item);
    }, true);
};

  /**
  | OBJECTS
  |~~~~~~~~~~
  **/
_.extend = function (...object) {
for(let i = 0; i < object.length-1; i++){
  _.each(object[i+1],(value,key)=>{
    object[0][key] = value;
  });
}
return object[0];
};

  /**
  | FUNCTIONS
  |~~~~~~~~~~
  **/
  _.once = function (func) {
    // YOUR CODE HERE
    //https://stackoverflow.com/questions/21166101/what-is-it-used-for-once-in-underscore
    let alreadyCalled = false;
    let result;
    return function() {
        if (!alreadyCalled) {
            result = func.apply(this, arguments);
            alreadyCalled = true;
        }
        return result;
    };
  };

  _.memoize = function (func) {
    // YOUR CODE HERE
    //https://codeburst.io/understanding-memoization-in-3-minutes-2e58daf33a19
    let cache = {};
    return function(){
      let key = JSON.stringify(arguments);
      if (cache[key]){
        console.log(cache)
        return cache[key];
      }
      else{
        let val = func.apply(null, arguments);
        cache[key] = val;
        return val; 
      }
  }
  };

  _.invoke = function (collection, functionOrKey) {
    // YOUR CODE HERE
    let resultArr =[];
    if (typeof functionOrKey !== "function"){
      resultArr = _.map(collection, (i)=> {
        return i[functionOrKey].apply(i)
    })
  } else if (typeof functionOrKey === "function") {
      resultArr = _.map(collection, (i)=> {
      return functionOrKey.apply(i)
    })}
    return resultArr;

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

