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
  };

  _.pluck = (collection, key) => {

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

