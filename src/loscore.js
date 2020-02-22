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
    // console.log('array', array, 'n', n);
    // console.log(array.slice(0,n));
    return array.slice(0,n);
  };

  _.takeRight = (array, n) => {
    // YOUR CODE HERE => committed
    // console.log('array', array, 'n', n);
    if(n===undefined){
      // console.log([array[array.length-1]]);
      return [array[array.length-1]];
    }else if(n >= array.length){
      // console.log(array);
      return array;
    }else {
      // console.log(array.slice(array.length-n));
      return array.slice(array.length-n);
    }
  
  };

  _.uniq = (array) => {
    // YOUR CODE HERE => committed
    // console.log('array',array);
    const result =[];
    for (const element of array){
      result.find(value => value === element)? '' : result.push(element);
      // console.log('result',result)
    }
    return result;

  };

  /**
  | COLLECTIONS
  |~~~~~~~~~~
  **/ 

  _.size = (collection) => {
    // YOUR CODE HERE => committed
    // console.log('collection',collection);
    if (typeof collection !== 'object'){
      return collection.length;
    }else if(Array.isArray(collection)){
      return collection.length;
    }else return Object.keys(collection).length;
  };

  _.indexOf = (array, target) => {
    // YOUR CODE HERE => committed
    // console.log('array',array,'target',target);
    const result = [-1];
    const callback = (l,i) => {
      if(l===target){result.push(i)};
    }
    _.each(array, callback);
    // console.log('result', result, 'answer', result[1]);
    return typeof result[1]==='number'? result[1]: result[0];
  };

  _.each = (collection, iteratee) => {
    // YOUR CODE HERE => committed
    // console.log('collection:',collection, 'iteratee:', iteratee);
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
    // console.log('result',result);
    return result;
  };

  _.filter = (collection, test) => {
    // YOUR CODE HERE => committed
    const result =[];
    // console.log('collection:',collection, 'iteratee:', test);
    const callback = (l,i,collection) => {
      if(test(l,i,collection)){
        result.push(l);
      };
    }
    _.each(collection, callback);
    // console.log(result);
    return result;
  };

  _.reject = (collection, test) => {
    // YOUR CODE HERE => committed
    // console.log('collection:',collection, 'iteratee:', test);
    const callback = (l,i,collection) => !(test(l,i,collection));
    return _.filter(collection, callback);
  };

  _.pluck = (collection, key) => {
    // => committed
    // console.log('collection:',collection, 'key:', key);
    const result =[];
    for (const element of collection){
      for (const keyOfElement in element){
        if(keyOfElement === key){
          result.push(element[keyOfElement]);
        }
      }
    }
    return result;
  //   return _.map(collection, (item) => {
  //     return item[key];
  //   });
  };

  _.reduce = (collection, iterator, accumulator) => {
    // => committed
    // console.log('collection:',collection,'iterator:',iterator,'accum:', accumulator);
    
    let result;
    if (accumulator === undefined){
      result = collection[0];
      collection = collection.slice(1);
    }else{result = accumulator};
    const callback = (l) => {
      //console.log('i:',i,'result(before):',result);
      result = iterator(result,l);
      //console.log('i:',i,'result(after):',result);
    };
    _.each(collection, callback);
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

  _.every = function (collection,testFunc) {
    // YOUR CODE HERE => committed
    // console.log('START EVERY! collection=>',collection,'testFunc=>',testFunc);
    if (testFunc === undefined){
      testFunc = (val) => val;
    };
    const iterator =(result,l) =>{
      //console.log('result=>',result,'test(l)=>',testFunc(l),'!test(l)=>',!testFunc(l));
      return !testFunc(l)? testFunc(l): result;
    };
    return _.reduce(collection,iterator,true);
  };

  /**
  | OBJECTS
  |~~~~~~~~~~
  **/

  _.extend = function (original, ...objs) {
    // YOUR CODE HERE => committed
    for (const obj of objs){
      const callback = (value,key) => original[key]=value;
      _.each(obj,callback);
    }
    return original;
  };

  /**
  | FUNCTIONS
  |~~~~~~~~~~
  **/

  _.once = function (func) {
    // YOUR CODE HERE => committed
    let count = 0, memory;
    return (...args) => {
      if(count === 0){
        count++;
        memory = func(...args);
        return memory;
      }else return memory;
    }
  };

  _.memoize = function (func) {
    // YOUR CODE HERE => committed
    const memory=[],result=[];
    return (...args) =>{
      for (let i = 0; i<memory.length; i++){
        if(JSON.stringify(memory[i]) === JSON.stringify([...args])){
          return result[i];
        }
      }
      const answer = func(...args);
      memory.push([...args]);
      result.push(answer);
      return answer;
    };
  };
  

  _.invoke = function (collection, functionOrKey) {
    // YOUR CODE HERE
    let resultArr =[];
    if (typeof functionOrKey !== "function"){
      resultArr = _.map(collection, (i)=> {
        // console.log('i',i);
        return i[functionOrKey].apply(i);
    });
    } else if (typeof functionOrKey === "function") {
      resultArr = _.map(collection, (i)=> {
        // console.log('i',i);
        return functionOrKey.apply(i)
      })}
    return resultArr;
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

