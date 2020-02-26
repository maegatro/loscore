(() => {
  'use strict';
  
  window._ = {};

  _.identity = (val) => {
    return val
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
    return array.slice(1, array.length)
  };

  _.take = (array, n = 1) => {
    return array.slice(0, n)
  };

  _.takeRight = (array, n = 1) => {
    return array.slice(array.length - n >=0 ? array.length -n : 0, array.length)
  };

  _.uniq = (array) => {
    let output = array
    for ( let i=0; i < output.length; i++) {
      for ( let j=0; j < output.length; j++) {
        if (i !== j && output[i] === output[j]) {
          output = output.slice(0, j).concat(output.slice(j + 1, output.length))
        }
      }
    }
    return output
  };

  /**
  | COLLECTIONS
  |~~~~~~~~~~
  **/ 

  _.size = (collection) => {
    let i = 0
    for (let el in collection) {
      el
      i++
    }
    return i
  };

  _.indexOf = (array, target) => {
    let output = -1
    let flag = 0
    _.each(array, (l, i) => {
      if (l === target && flag === 0 ) {
        output = i
        flag = 1
      }
    })
    return output
  };

  _.each = (collection, iteratee) => {
    if(Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        iteratee(collection[i], i, collection)
      }
    }
    else {
      for (let i = 0; i < Object.keys(collection).length; i++) {
        iteratee(collection[Object.keys(collection)[i]], Object.keys(collection)[i], collection) 
      }
    }
  };
  
  _.map = (collection, iteratee) => {
    let output = []
    _.each(collection, (el) => output.push(iteratee(el)))
    return output
  };

  _.filter = (collection, test) => {
    let output = []
    _.each(collection, (el) => {
      if (test(el)) output.push(el)
    })
    return output
  };
  
  _.reject = (collection, test) => {
    let output = _.filter(collection, (el) => { 
      return !test(el)
    })
    return output
  };

  _.pluck = (collection, key) => {
    let output = []
    for (let i = 0; i < collection.length; i++) {
      output.push(collection[i][key])
    }
    return output
  };

  _.reduce = (collection, iterator, accumulator = collection[0]) => {
    let memo = accumulator
    let item
    _.each(collection, (el) => {
      item = el 
      if (item !== collection[0] || item !== memo) memo = iterator(memo, item)
      else if (iterator(memo, item) == undefined) memo
    })
    return memo
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
    if (test == undefined) return true
    return _.reduce(collection, (wasnotFound, item) => {
      if (!wasnotFound) {
        return false;
      }
      return test(item)
    }, true);
  };
  
  /**
  | OBJECTS
  |~~~~~~~~~~
  **/

  _.extend = function (obj) {
    let output = obj
    for (let object of arguments) {
      
      _.each(object, (el,key, object) =>{output[key] = el});
      object = 'done'
    }
    return output
};

  /**
  | FUNCTIONS
  |~~~~~~~~~~
  **/

  _.once = function (func) {
    let initial 
    return (b) => {
      if (b !== undefined) {
        if (initial === undefined) initial = b
        return func(initial) 
      }
      else {
        if (initial === undefined) { 
          initial = 1
          return func()
        }
      }
    } 
  }

  _.memoize = function (func) {
    let cache
    return (b) => {
      if(cache === undefined) {
        cache = {}
        let output = func(b)
        cache[b] = output
        return output
      }
      else if(cache[b] === undefined) {
        let output = func(b)
        cache[b] = output
        return output
      }
      else {
        return cache[b]
      }
    }
  };
  
  _.invoke = function (collection, functionOrKey) {
    let output = []
    if (typeof (functionOrKey) === 'function') {
      for (let el of collection) {
          output.push(functionOrKey.apply(el))
        }
      
    }
    else {
      var obj = {func: function () {
        return this[functionOrKey]()
      }
      }
      // obj.func.apply(collection)
      for (let el of collection) {
        output.push(obj.func.apply(el))
      }
    }
    return output
  }
  

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

