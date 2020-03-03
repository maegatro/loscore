(() => {
  'use strict';
  
  window._ = {};

  _.identity = (val) => {
    // YOUR CODE HERE
    //return first argument it receives
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
    // returns all elements of array except for the first 
    let tailArray = [];

    for (let i = 1; i < array.length; i++) {
      tailArray.push(array[i]);
    }
    // ALSO -> array.slice(1);

    return tailArray;

  };

  _.take = (array, n = 1) => {
    // YOUR CODE HERE
    //create slice of array with n elements from beginning

    return array.slice(0, n);

  };

  _.takeRight = (array, n = 1) => {
    // YOUR CODE HERE
    // create slice of array with n elements from end

   //return array.slice().reverse().slice(0, n).reverse();

   if (n === 0) {
     return [];
   }
  return array.slice(-n);
  };

  _.uniq = (array) => {
    // YOUR CODE HERE
    //take an array and return a duplicate-free version
    // create a set and return array from set
    let set = new Set(array);
    return Array.from(set);
  };

  /**
  | COLLECTIONS
  |~~~~~~~~~~
  **/ 

  _.size = (collection) => {
    // YOUR CODE HERE
    // return the size of collection 
    // return the length for arrays, # of properties in objects
    // and length characters in string
    if (collection.length !== undefined) {
      return collection.length;
    } else if (typeof collection === 'object' && collection !== null) {
      return Object.keys(collection).length;
    } else {
      return undefined;
    }

  };

  _.indexOf = (array, target) => {
    // YOUR CODE HERE
    // get the first index location of target in array using each
    // declare if no result is found 
    let index = -1;

    //test for index locations using each
    _.each(array, (el, i) => {
      if (index === -1 && target === el) {
        index = i;
      }
    });
    return index;
  };

  _.each = (collection, iteratee) => {
    // YOUR CODE HERE
    //call iteratee for each collection to accept objects and arrays
    // receive value, key/index, and collection
    //no return value

    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        iteratee(collection[i], i, collection);
      }
    } else if (typeof collection === 'object' && collection !== null) {
      for (let i in collection) {
        iteratee(collection[i], i, collection);
      }
    }

  };

  _.map = (collection, iteratee) => {
    // YOUR CODE HERE
    // initialize result
    let mapp = [];

    // initialize each and push values to mapp
    _.each(collection, (el, i) => {
      let value = iteratee(el, i, collection);
      mapp.push(value);
    });

    // return result
    return mapp;
  };

  _.filter = (collection, test) => {
    // YOUR CODE HERE
    //return an array of all elements that pass truth test
    //initialize result
    let filterr = [];

    // initialize filter tests
    _.each(collection, (el, i) => {
      if (test(el, i, collection)) {
        filterr.push(el);
      }
    });

    //return result
    return filterr;
  };

  _.reject = (collection, test) => {
    // YOUR CODE HERE
    // reject all elements of array that don't pass truth test
    let filterr = [];

    //use filter
    _.filter(collection, (el, i) => {
      if (!test(el, i, collection)) {
        filterr.push(el);
      }
    });

    return filterr;
  };

  _.pluck = (collection, key) => {
    // take an array of objects, return values of certain properties
    // initialize result
    let plucked = [];

    // use for loop to iterate through object
    for (let obj of collection) {
      plucked.push(obj[key]);
    }

    // return result
    return plucked;
  };

  _.reduce = (collection, iterator, accumulator) => {
    //reduce collection to single value calling iterator(accumulator, item)
    //accumulator should return value of previous iterator call

    if (accumulator === undefined) {
      // set accumulator at first index of collection
      accumulator = collection[0];
      //reduce length and starting index of collection
      collection = collection.slice(1);
    }

    // run each for accumulator
    _.each(collection, (el) => {
      accumulator = iterator(accumulator, el);
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

  _.every = function (array, func) {
    // YOUR CODE HERE
    //determine if all elements pass given truth test
    // basically one giant 'logical and'
    // use reduce
    //return boolean

    return _.reduce(array, (a, b) => {
      if (!a) {
        return false;
      }

      if (typeof func === 'function') {
        return func(b);
      }
      
      return Boolean(b);
    }, true);
  };

  /**
  | OBJECTS
  |~~~~~~~~~~
  **/

  _.extend = function (obj) {
    // YOUR CODE HERE
    // extend a primary object wiht properties from another object
    // first argument = main object
    // following args = obejects added to main object & make shallow copies
    //use each in implementation

    // call _.each
    _.each(arguments, function(item) {
      // nest each within function input
      _.each(item, function(value, prop) {
        // shallow copy value (object) into main object
        obj[prop] = value;
      })
    })
    //return 
    return obj;
  };

  /**
  | FUNCTIONS
  |~~~~~~~~~~
  **/

  _.once = function (func) {
    // YOUR CODE HERE
    // return a function that can be called at most one time
    // every subsequent call return initial returned value
    //initialize result
   let result;

   //return function
   return function() {
     //if function is called, result = the arguments called
    if (func) {
      result = func.apply(this, arguments);
      // return null if called more than once
      func = null;
    }

    //return result
    return result;
   };
    
  };

  _.memoize = function (func) {
    // YOUR CODE HERE
    // stores result from input function and return a function to check 
    // if identical and previously computed result exists.
    // if possible, return stored value, and use JSON.stringify
    let memo = {};

    let slice = Array.prototype.slice;

    return function() {
      let args = slice.call(arguments);
      
      if (args in memo) {
        return memo[args];
      } else {
        return (memo[args] = func.apply(this, args));
      }
    }

  };
  
  _.invoke = function (collection, functionOrKey) {
    // YOUR CODE HERE
    //call functionOrKey on each value in list, if function, apply values onto it
    
    if (typeof functionOrKey === "function") {
      return _.map(collection, (value) => functionOrKey.apply(value));
    } 
    
    if (typeof functionOrKey === "string") {
      
      return _.map(collection, (value) => value[functionOrKey].apply(value));
      
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

