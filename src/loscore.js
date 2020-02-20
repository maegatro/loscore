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
    if (n === undefined) return array.slice(0, 1);
    return array.slice(0, n);
  };

  _.takeRight = (array, n) => {
    // YOUR CODE HERE
    if (n === undefined) return array.slice(array.length-1, array.length);
    if (n >= array.length) return array;
    return array.slice(array.length-n);
  };

  _.uniq = (array) => {
    // YOUR CODE HERE
    const seen = {};
    const ret_arr = [];
    for (var i = 0; i < array.length; i++) {
      console.log(seen[array[i]])
          if (!seen[array[i]]) {
            ret_arr.push(array[i]);
            seen[array[i]] = true;
        }
    }
    return ret_arr;
  };

  /**
  | COLLECTIONS
  |~~~~~~~~~~
  **/ 

  _.size = (collection) => {
    // YOUR CODE HERE
    if(Array.isArray(collection) || typeof collection === "string"){
      return collection.length;
    }
    return Object.keys(collection).length;
  };

  _.indexOf = (array, target) => {
    // YOUR CODE HERE
    let result = -1;
    _.each(array, (val,i)=>{
      if(result != -1) return;
      if(val === target){
        result = i;
      }
      
    });
    return result;
  };

  _.each = (collection, iteratee) => {
    // YOUR CODE HERE
    if (Array.isArray(collection)) {
      for(let i = 0; i < collection.length; i++){
        // iteratee(i);
        iteratee(collection[i], i, collection);
      }
  }
  else if (typeof collection === 'object') {
      for (const key in collection) {
          iteratee(collection[key], key, collection);
      }
  }
  };

  _.map = (collection, iteratee) => {
    // YOUR CODE HERE
    const result = [];
    _.each( collection, val => {
      result.push( iteratee( val ) );}
    )
    return result;
  };

  _.filter = (collection, test) => {
    // YOUR CODE HERE
    // Can you use the _.map that you wrote here?
    const result = [];
    _.each( collection, val => {
      if (test( val ) )
      result.push( val ) ;
    })
    return result;
  };

  _.reject = (collection, test) => {
    // YOUR CODE HERE
    return _.filter(collection, (item) => !test(item));  
  };


  _.pluck = (collection, key) => {
    let result = [];
    for(let item of collection){
      result.push(item[key]);
    }
    return result;
  };

  _.reduce = (collection, iterator, accumulator) => {
    // let result = accumulator;
    _.each(collection, (val) => {
      if (accumulator === undefined) accumulator = iterator(val, 0);
      else accumulator = iterator(accumulator, val);
    })
    return accumulator;
  };


  _.contains = (collection, target) => {
    return _.reduce(collection, (wasFound, item) => {
      if (wasFound) return true;
      return item === target;
    }, false);
  };

  _.every = function (collection, test) {
    // YOUR CODE HERE
    return _.reduce(collection, (wasPassed, item) => {
      if(test === undefined) return wasPassed && item;
      return wasPassed && test(item);
    },
      true);
  }

  /**
  | OBJECTS
  |~~~~~~~~~~
  **/

  _.extend = function (object,...sourceObjArray) {
    // YOUR CODE HERE
    _.each(sourceObjArray, function(sourceObj){
        _.each(sourceObj, function (value, key){
          object[key] = value;
      });
    });
    return object;
  }


  /**
  | FUNCTIONS
  |~~~~~~~~~~
  **/

  _.once = function (func) {
    // YOUR CODE HERE
    let counter = 0;
    let result;
    // console.log(func);
    return function f(args) {
      if (counter == 0) {
        result = func(args);
      }
      counter++;
      return result;
    }

    
  };

  _.memoize = function (func) {
    // YOUR CODE HERE
    const results = {};
    return(...args) => {
      const argsKey = JSON.stringify(args);
      if(!results[argsKey]) {
        results[argsKey] = func(...args);
      }
    return results[argsKey];
    };
  };

  _.invoke = function (collection, functionOrKey) {
    // YOUR CODE HERE
    if(typeof functionOrKey === "function"){
      return _.map(collection, function(value){
        return functionOrKey.apply(value);
      });
    }else{
      return _.map(collection, function (value){
        
        return value[functionOrKey].apply(value);
        // return value[functionOrKey]();
      });
    }
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

