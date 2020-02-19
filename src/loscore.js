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
     let arr = array.slice(0);
     arr.splice(0,1);
     return arr;
  };

  _.take = (array, n) => {
   var arr;
   if(n == 0){
     arr = [];
     return arr;
   }
   else if (typeof(n) == 'undefined'){
     arr = array.slice(0,1);
     return arr
   }
    else{
     arr = array.slice(0,n);
     return arr;
    }
  };

  _.takeRight = (array, n) => {
    var arr;
    if(n == 0){
      arr = [];
      return arr;
    }
    else if (typeof(n) == 'undefined'){
      arr = array.slice(array.length-1);
      return arr
    }
     else{
      arr = array.slice(n<array.length?array.length-n:0);
      return arr;
     }
  };

  _.uniq = (array) => {
    var arr = [];
    if(array!=[]){arr.push(array[0])}
    else{return [];};
    for (var value of array){
      var checker = false;
      for(var val of arr){
        if(val == value){
          checker=true;
        }
      }
      if(!checker){
        arr.push(value);
      }
    }
    return arr;
  };

  /**
  | COLLECTIONS
  |~~~~~~~~~~
  **/ 

  _.size = (collection) => {
    var keys = Object.keys(collection);
    return keys.length;

  };

  _.indexOf = (array, target) => {
    var index=[];
    var checker = false;
    _.each(array,(value,i)=>{
      if(value==target)
      {index.push(i);
        checker=true;
      }
    })
    if(checker)
    return index[0];
    else return -1;
  };

  _.each = (collection, iteratee) => {
  var keys = Object.keys(collection);
  if(Array.isArray(collection)){
  
  for(var val of keys){
    var cKey = parseInt(val);
    if(isNaN(cKey)){
      break;
    }
    iteratee(collection[val],cKey,collection);
  }
}
  else{
    for(var val of keys){
      iteratee(collection[val],val,collection);
    }
  }
  
};

  _.map = (collection, iteratee) => {
  var arr=[];
  _.each(collection, (val)=>{arr.push(iteratee(val))})
  return arr;
  };

  _.filter = (collection, test) => {
    var arr=[];
    _.each(collection, (val)=>{if(test(val)){arr.push(val);}
    })
    return arr;
  };

  _.reject = (collection, test) => {

   var arr=[];
   _.filter(collection,(val)=>{if(!test(val)){arr.push(val)}})
   return arr;
  };

  _.pluck = (collection, key) => {
    var arr=[];
    for(var val of collection){
    var temp = Object.entries(val);
    for(var value of temp){
      if(value[0]==key){
        arr.push(value[1]);
      }
    }
    }
    return arr;

  };

  _.reduce = (collection, iterator, accumulator) => {
    var result;

    _.each((accumulator || accumulator == 0)?collection:collection.slice(1),(val)=>{result=iterator((accumulator || accumulator == 0)?accumulator:collection[0],val);accumulator = result});
  
   return result;
    
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

