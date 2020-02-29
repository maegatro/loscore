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

    let arrayTail = [];

    for(let i = 1; i < array.length; i++) {
      arrayTail.push(array[i]);
    }

    return arrayTail;
  };

  _.take = (array, n) => {
    let arrayTake = [];

    if (n == undefined) {
      n = 1;
    }

    if (n > array.length) {
      n = array.length;
    }

    for(let i = 0; i < n; i++) {
      arrayTake.push(array[i]);
    }
    
    return arrayTake;    
  };

  _.takeRight = (array, n) => {
    let arrayTakeRight = [];

    if (n > array.length) {
      n = array.length;
    }

    if(n == undefined) {
      arrayTakeRight.push(array[array.length-1]);
    } else {
        for (let i = array.length - n; i < array.length; i++) {
          arrayTakeRight.push(array[i]);
        }
      }

    return arrayTakeRight;
  };

  _.uniq = (array) => {
    let arrayUniq = [];

    function checkValue(arrayUnique, num) { 
      
      for(let i = 0; i < arrayUnique.length; i++) {
        if(arrayUnique[i] == num)
          return false;
      }
      
      return true;
    }

    for(let i = 0; i < array.length; i++) {
      if(checkValue(arrayUniq, array[i])) {
        arrayUniq.push(array[i]);
      }
    }

    return arrayUniq;
  };

  /**
  | COLLECTIONS
  |~~~~~~~~~~
  **/ 

  _.size = (collection) => {
    let collectionLength = 0;
    
    if((typeof(collection) == 'string')) {
      for(let i = 0; i < collection.length; i++) {
        collectionLength++;
      }
      return collectionLength;
    }

    if((Array.isArray(collection))) {
      return collection.length;
    } else {
      for(let key in collection) {
          collectionLength++;
        }
      return collectionLength;
    }
  };

  _.indexOf = (array, target) => {
    
    let indexOf = [];

    _.each(array, function (test, index) {
      if(target == test) {
        indexOf.push(index);
      }
    });

    if (indexOf.length != 0) {
      return indexOf[0];
    } else {
        return -1;
      }
  };

  _.each = (collection, iteratee) => {
    
    if(Array.isArray(collection)) {
      for(let i = 0; i < collection.length; i++) {
        iteratee(collection[i], i, collection);
      }
    } else {
        for(let key in collection) {
          iteratee(collection[key], key, collection);
        }
      }

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

