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
    let store = []
    _.each(array,function(val,i){
      if(target===val){
        store.push(i)
        //console.log(store)
      }
    })
      if(store.length>=1){
        return store[0]
      }else{
        return -1
      }
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
    //console.log(collection,iterator,"this",accumulator)
    let reducer;
    if(accumulator!==undefined){
      reducer = accumulator;
      _.each(collection,function(val){
        reducer = iterator(reducer, val)
      })
    }else{
      reducer = collection[0]
      _.each(collection,function(val,i,collection){
        //console.log(val,i,collection)
        if(i+1<collection.length){
          reducer = iterator(reducer,collection[i+1])
        }
      })
    }
    return reducer;
  };

  _.contains = (collection, target) => {
    return _.reduce(collection, (wasFound, item) => {
      //console.log(wasFound,item)
      if (wasFound) {
        return true;
      }
      return item === target;
    }, false);
  };

  _.every = function (collection,iterator) {
    // YOUR CODE HERE
    return _.reduce(collection,function(total,item){
      //console.log("total",total,"item",item)
      if(!total){
        return false;
      }else if(!iterator){
          return true
      }else{
        return iterator(item)
      }
    },true)
  };

  /**
  | OBJECTS
  |~~~~~~~~~~
  **/

  _.extend = function (obj1,...obj2) {
    // YOUR CODE HERE
    _.each(obj2,function(subObj){
      //console.log(subObj)
      _.each(subObj,function(val,key){
         //console.log("val:",val,"key:",key)
         obj1[key]=val
      })
    })
    return obj1;
  };

  /**
  | FUNCTIONS
  |~~~~~~~~~~
  **/

  _.once = function (func) {
    // YOUR CODE HERE
    let count = 0;
    let countStore = [];
    return function(v){
      if(count<=0){
      countStore.push(func(v))
      }
     count +=1
     return countStore[0]
    }
  };

  _.memoize = function (func) {
    // YOUR CODE HERE
    let memory = {}
    return function(...args){
      let n = args[0];
      if(n in memory){
        return memory[n];
      }else{
        let result = func(n);
        memory[n]=result;
        return result;
      }
    }
  };
  
  _.invoke = function (collection, functionOrKey) {
    // YOUR CODE HERE
      if(typeof functionOrKey == "string"){
        return _.map(collection,function(val){
          return val[functionOrKey].apply(val);
      })
      }else{
        return _.map(collection,function(val){
          return functionOrKey.apply(val)
        })
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

