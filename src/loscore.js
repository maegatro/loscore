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
    // YOUR CODE HERE => committed
    if(n === undefined){return [array[0]]};
    console.log('array', array, 'n', n);
    console.log(array.slice(0,n));
    return array.slice(0,n);
  };

  _.takeRight = (array, n) => {
    // YOUR CODE HERE => committed
    console.log('array', array, 'n', n);
    if(n===undefined){
      console.log([array[array.length-1]]);
      return [array[array.length-1]];
    }else if(n >= array.length){
      console.log(array);
      return array;
    }else {
      console.log(array.slice(array.length-n));
      return array.slice(array.length-n);
    }
  
  };

  _.uniq = (array) => {
    // YOUR CODE HERE => committed
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
    // YOUR CODE HERE => committed
    console.log('collection',collection);
    if (typeof collection !== 'object'){
      return collection.length;
    }else if(Array.isArray(collection)){
      return collection.length;
    }else return Object.keys(collection).length;
  };

  _.indexOf = (array, target) => {
    // YOUR CODE HERE => committed
    console.log('array',array,'target',target);
    const result = [-1];
    const callback = (l,i,collection) => {
      if(l===target){result.push(i)};
    }
    _.each(array, callback);
    console.log('result', result, 'answer', result[1]);
    return typeof result[1]==='number'? result[1]: result[0];
  };

  _.each = (collection, iteratee) => {
    // YOUR CODE HERE => committed
    console.log('collection:',collection, 'iteratee:', iteratee);
    const iterations =[];
    if (Array.isArray(collection)){
      for (let i = 0; i <collection.length; i++){
        let l = collection[i];
        iteratee(l,i,collection);
      };
    }else{
      for (const key in collection){
        let value = collection[key];
        iteratee(value,key,collection);
      }
    }
  };

  _.map = (collection, iteratee) => {
    // YOUR CODE HERE => committed
    const result =[];
    const callback = (l,i,collection) => result.push(iteratee(l,i,collection));
    _.each(collection, callback);
    console.log('result',result);
    return result;
  };

  _.filter = (collection, test) => {
    // YOUR CODE HERE => committed
    const result =[];
    console.log('collection:',collection, 'iteratee:', test);
    const callback = (l,i,collection) => {
      if(test(l,i,collection)){
        result.push(l);
      };
    }
    _.each(collection, callback);
    console.log(result);
    return result;
  };

  _.reject = (collection, test) => {
    // YOUR CODE HERE => committed
    console.log('collection:',collection, 'iteratee:', test);
    const callback = (l,i,collection) =>{
      return !(test(l,i,collection));
    }
    return _.filter(collection, callback);
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

