(() => {
  'use strict';
  
  window._ = {};

  _.identity = (val) => {
    // Return the first argument received as input
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
    //Iterate through array
    let newArr = [];
    for(let i = 0; i < array.length; i++){
      // IF first element, skip
      if(i === 0){
        continue;
      // ELSE Append to new array
      }else{
        newArr.push(array[i]);
      }
    // console.log(`Original Array : ${array}`);
    // console.log(newArr);
    }
    // Return all but the first element of array
    return newArr;
  };

  _.take = (array, n) => {
    // Create slice of an array with the n elements taken from the beginning
    // console.log(`Original Array: ${array} and Second input: ${n}`);
    // console.log(array.slice(0, n));
    let newArr;

    if(n === undefined){
      newArr = array.slice(0, 1);
    }else {
      newArr = array.slice(0, n);
    }

    //Return the slice
    return newArr;
  };

  _.takeRight = (array, n) => {
    // Create a slice of n elements from the end and return them
    let newArr;

    if(n === undefined){
      newArr = array.slice(-1);
    }else if(n === 0){
      newArr = [];
    }else{
      newArr = array.slice(-n);
    }

    //Return the slice
    return newArr;
  };

  _.uniq = (array) => {
    let newArr = [];
      for(let el of array){
        if(isIncluded(el, newArr)){
          continue;
        }else {
            newArr.push(el);
        }
      }
      return newArr;
  };

  // Made this function as an alternative of the built-in function(includes)
  // Separate logics by placing the checking logic outside of the uniq method
  let isIncluded = (currentElement, newArr) => {
    for(let el of newArr){
      if(currentElement === el){
        return true;
      }
    }
    return false;
  }

  /**
  | COLLECTIONS
  |~~~~~~~~~~
  **/

  _.size = (collection) => {
    let counter = 0;
    let finalCollection = collection;
    if(Object.prototype.toString.call(collection) === "[object Object]") finalCollection = Object.entries(collection);

    for(let el of finalCollection){
      counter = counter + 1;
    }
    return counter;
  };

  _.indexOf = (array, target) => {
    let result = -1;

    _.each(array, (l, i) => {
      if(target === l && result === -1){
        result = i;
      }
    });
    return result;
  }

  _.each = (collection, iteratee) => {
    let index = 0;

    for(let el in collection){
        if(Object.prototype.toString.call(collection) === "[object Array]"){
          index = parseInt(el)
        }else {
          index = el;
        };

        if(isNaN(el) === true && Object.prototype.toString.call(collection) === "[object Array]") continue;

        if(iteratee.length === 0){
          iteratee();
        } else if(iteratee.length === 1){
          iteratee(collection[el]);
        } else if(iteratee.length === 2){
          iteratee(collection[el], index);
        } else {
          iteratee(collection[el], index, collection);
        }
    }
  };

  _.map = (collection, iteratee) => {
    let result = [];

    _.each(collection, (val) => {
      result.push(iteratee(val))
    });

    // Return new array
    return result;
  };

  _.filter = (collection, test) => {
    let result = [];

    _.each(collection, (num) => {
      if(test(num)){
        result.push(num);
      }
    });

    return result;
  };

  _.reject = (collection, test) => {
    let result = [];

    _.filter(collection, (num) => {
      if(!test(num)){
        result.push(num);
      }
    });

    return result;
  };

  _.pluck = (collection, key) => {
    let result = [];

    for(let arr of collection){
      result.push(arr[key]);
    }

    return result;

    // return _.map(collection, (item) => {
    //   console.log(item[key])
    //   return item[key];
    // });
    // let result = [];

    // _.each(collection, (val, i, collection) => {
    //     result.push(val[key])
    // });
  };

  _.reduce = (collection, iterator, accumulator) => {
    let acc = accumulator;
    _.each(collection, (value, index, array) => {
      if(acc === undefined){
        acc = array[0];
      }
      acc = iterator(acc, array[index]);
    })
    if(Math.sign(acc) === -1){
      acc = 0;
    }
    return acc;
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
    let result = true;

    if(test === undefined){
      for(let el of collection){
        if(el === false){
          result = false;
          break;
        }
      }
    } else {
      result =  _.reduce(collection, (doesPass, item) => {
        if(!doesPass){
          return false;
        }
        return test(item);
      }, true);
      }
    return result;
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

