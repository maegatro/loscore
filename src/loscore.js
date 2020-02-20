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
    let newArr = [];
    for(const index of array){
      newArr.push(index)
    }
    if(n==undefined){
      newArr.splice(1)
      return newArr
    }else{
     newArr.splice(n)
     return newArr
    }
    
  };

  _.takeRight = (array, n) => {
    // YOUR CODE HERE
    let newArr = [];
    for(const index of array){
      newArr.push(index)
    }
    if(n==undefined){
      return newArr.splice(-1)
    }else if(n>=1){
     return newArr.splice(-n)
    }else{
      return newArr = [];
    }
  };

  _.uniq = (array) => {
    // YOUR CODE HERE
    let result = [];
    let store = {}
    for(let i=0;i<array.length;i++){
      if(!store[array[i]]){
        store[array[i]]=true;
        result.push(array[i])
        //console.log(result)
      }
    }
    return result;
  };

  /**
  | COLLECTIONS
  |~~~~~~~~~~
  **/ 

  _.size = (collection) => {
    // YOUR CODE HERE
    if(typeof collection === "object"){
      let count = 0;
      for(const i in collection){
        count += 1
      }
      return count;
    }else{
      return collection.length;
    }
  };

  _.indexOf = (array, target) => {
    // YOUR CODE HERE
    let result = -1;
    _.each(array,function(val,i){
      if(target===val){
        //console.log(target,val)
        result=i;
        if(result){
          return result; 
        }
      }
    })
    return result;
  };

  _.each = (collection, iteratee) => {
    // YOUR CODE HERE
    if(collection.constructor ===Array){
      for(let i=0;i<collection.length;i++){
        //console.log(collection[i])
        let each = collection[i]
        //console.log(collection[i])
        iteratee(each,i,collection)
      }
    }else{
      for(const key in collection){
      let value = collection[key]
      iteratee(value,key,collection)
      }
    }
  };

  _.map = (collection, iteratee) => {
    // YOUR CODE HERE
    let result = [];
    const callback = function(list,i,collection){
      return result.push(iteratee(list,i,collection))
    }
    _.each(collection,callback)
    return result;
  };

  _.filter = (collection, test) => {
    // YOUR CODE HERE
    let result = [];
    _.each(collection, function(val){
      if(test(val))
      return result.push(val)
    })
    return result
  };

  _.reject = (collection, test) => {
    // YOUR CODE HERE
    let result=[];
    _.filter(collection,function(val){
      if(!test(val)){
        result.push(val)
      }
    })
    return result;
  };

  _.pluck = (collection, key) => {
    let result = [];
    for(const obj of collection){
      for(const each in obj){
        if(each==key){
          result.push(obj[key])
        }
      }
    }
    return result;
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

