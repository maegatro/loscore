(() => {
  'use strict';
  
  window._ = {};

  _.identity = (val) => {
    // YOUR CODE HERE => committed
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
    // YOUR CODE HERE => committed
    const result = [];
    for (let i = 1; i<array.length; i++){
      result.push(array[i]);
    }
    return result;
  };

  _.take = (array, n) => {
    // YOUR CODE HERE
    const result = [];
    for (let i =0; i<n; i++){
      result.push(i);
    }
    return result;
  };

  _.takeRight = (array, n) => {
    // YOUR CODE HERE
    const result =[];
    for (i=n; i >array.length-n; i--){
      result.unshift(i-1);
    }
    return result;
  };

  _.uniq = (array) => {
    // YOUR CODE HERE
    console.log('array',array);
    const result =[];
    for (const element of array){
      result.find(value => value === element)? '' : result.push(element);
      console.log('result',result)
    }
    return result;

    /* => log the failed code
    console.log('array',array);
    const dict = {}, result = [];
    for (const element of array){
      dict[element]? dict[element]+=1 :dict[element]=1;
      console.log('dict',dict);
    };
    for (const key in dict){
      result.unshift(Number(key));
      console.log('result', result);
    }
    console.log('final result', result);
    return result;
    */
  };

  /**
  | COLLECTIONS
  |~~~~~~~~~~
  **/ 

  _.size = (collection) => {
    // YOUR CODE HERE
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

