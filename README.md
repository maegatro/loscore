# Precourse: LoScore

## Objectives

In this assignment you will use JavaScript to:

* 🧠 solve accumulator problems  
* ➰ loop over arrays using index  
* ✅ write code to make Jasmine tests pass   
* ⌨️ write functions that accept functions as arguments  
* ➡️ pass callbacks to functions  
* 👉 store values as a hash map  
* 👈 retrieve values from a hash map  
* 👍 use bracket notation to access object properties
 
We also want you to continue forming the habit of making commits. We have included in our instructions reminders to make commits, but *these won't be there in the near future*. 

**Feel free to make more commits 💬💬💬 than we specified.** You are not being graded on making commits exactly the way they are specified here. These reminders are just to help you get used to making regular commits because that is a best practice.

Your commits do not have to be in the exact order given here - unless one of the methods is using another method from earlier in the assignment. Skip around if you get stuck, and then come back to the tough ones!

If you are confused, need some help, or want more in depth information ask on our #slack-overflow channel or in the Precourse AMAs!

## Tutorial

[Underscore.js](http://underscorejs.org/) and [Lodash](https://lodash.com/) are JavaScript  libraries 📚 that provide methods functions that can simplify your code. However, we want you to be able to write some of these helpful functions yourself from scratch!

The methods in these libraries are assigned to a variable named  `_`. 

> 🦋 **Sidenote:** *Naming variables like this [should generally be avoided](https://javascript.info/ninja-code)*. The Underscore.js library is using it here in a special circumstance, so we are copying that style.

In this assignment you will demonstrate your JavaScript skills by creating your own implementation of some of the methods found in the Underscore and Lodash libraries on our `_` object.

If you can understand how to write these methods, then you will understand how to use them!

### Window

There's a global variable called `window` that's automatically defined by the browser, which represents and object that has a bunch of fields on it. JavaScript does something a little weird in that when you create a global variable with `var`, that global variable is secretly a field on window.

Open up the console and try it. Type: `var x = 42;` and then type `window.x` and see what happens. Neat, right? But this behaviour doesn't happen with `let` or `const` because ES6 made improvements to control this sort of things as much as possible.

We are also using `(()=>{...})();` to control global variables, so from within that scope we can assign a special global variable to the window object like this:

`window.someObject = {};`

In the `loscore.js` assignment file, we've added an object named `_` to `window` like this:

`window._ = {};`

## Basic Requirements

### Basics

- [ ] Fork and clone this repository.

- [ ] Open the `testrunner.html` file in your browser.  You will see a list of tests, most of them failing 😅.

- [ ] Fill out the function definitions in the `src/loscore.js` file with your code to make the tests pass.

- [ ] Check the top of the file. Make sure you remember what `use strict` means!

> 🦋 **Note:** The function definitions are given to you. You should not need to change them unless you are asked to.

- [ ] If any of the instructions below are not clear, or if you are still confused about what each method does, check out the  libraries that they come from. These methods are from the [Underscore](https://underscorejs.org) and [LoDash](https://lodash.com/)  libraries. Go look at the documentation 📄📄 for more information and pop open your console to play around with them.

Write this method:

- [ ] `_.identity`: identity should return the first argument it receives. This may seem useless because of how simple it is, but later it will be used by functions that require a transformation function. If a transformation function is not supplied as an argument, `_.identity` will be used in its place.

- [ ] Make a commit with the message, "Wrote identity method". 

- [ ] `_.add`: add takes in two arguments and adds them. This one is done for you as an example. 

#### Arrays

Write these methods for arrays:

- [ ] `_.head`: head takes the first item of the array and returns it. This one is already done for you as an example.

- [ ] `_.tail`: tail should return all but the first element of array.

- [ ] `_.take`: take should create a slice of an array with n elements taken from the beginning

  ```js
      _.take([1, 2, 3]);
      // => [1]
      _.take([1, 2, 3], 2);
      // => [1, 2]
      _.take([1, 2, 3], 5);
      // => [1, 2, 3]
      _.take([1, 2, 3], 0);
      // => []
  ```

- [ ] `_.takeRight`: takeRight should create a slice of an array with n elements taken from the end
  
  ```js
      _.takeRight([1, 2, 3]);
      // => [3]
      _.takeRight([1, 2, 3], 2);
      // => [2, 3]
      _.takeRight([1, 2, 3], 5);
      // => [1, 2, 3]
      _.takeRight([1, 2, 3], 0);
      // => []
  ```

- [ ] `_.uniq`: uniq should take an array and return a duplicate-free version

- [ ] Make a commit with an appropriate message 💬💬💬 summarizing what you've done so far, following steps shown above.

#### Collections

A collection in JavaScript is either an array or an object containing a number of values.

Write these methods for collections:

- [ ] `_.size`: size should return the size of collection by returning its length 📏 for array-like values, number of characters in a string, or number of elements in an object.

- [ ] `_.each`: size should call an 'iteratee' for each element of the collection. It can accept both objects AND arrays. The iteratee should receive the value, key (or index), and collection. It has no return value and simply runs the given function over each element of the array. 

> 🦋 **What is this "iteratee"?** We'll be seeing this more and more. An iteratee is a callback that we expect to be invoked on each item in the collection. Typically, in lodash and underscore, iteratees are provided with the value, key/index, and the collection itself when invoked: `iteratee(value, key, collection)`

- [ ] `_.indexOf`: indexOf should get the first index at which the target is found in the array.
    - [ ] 👉💻 Your code for indexOf should use `_.each` in its implementation.

- [ ] `_.map`: map should return a new array containing all results returned by calling the iteratee with the value, key (or index), and collection. In other words, the iteratee should return the resulting value that is to be stored in the array eventually returned by map. 
    - [ ] 👉💻 Your code for map should use `_.each` in its implementation.

- [ ] `_.filter`: filter should return an array of all elements of an array that pass a given truth test. Return all elements if no truth test is given. 
    - [ ] 👉💻 Your code for filter should use `_.each` in its implementation.  
    - [ ]🤔 Think about why you should not use `_.map` to write `_.filter`. BIG HINT: The callback here should return a boolean.

- [ ] Make a commit with an appropriate message 💬💬💬 summarizing what you've done so far, following steps shown above.

- [ ] `_.reject`: reject should return all elements of an array that DON'T pass a truth test. 
    - [ ] 👉💻 Your code for reject should use `_.filter` in its implementation.

- [ ] `_.pluck`: Look at the code we've written for pluck using `_.map`. 

  `_.pluck` takes an array of objects and returns an array of values of a certain property in it. It 'plucks' particular objects out and returns them.
  
  `_.map` is particularly useful when you want to turn an array of values into a new array of values. Writing `_.map` will cause the tests for `_.pluck` to also pass. 

- [ ] Rewrite `_.pluck` so that it uses for loops and does not use any built-in methods. 

> 🦋 **What native methods are the specs testing for?** We want you to write your code without using: `map`, `indexOf`, `forEach`, `filter`, `reduce`, `every`, `some`, and `includes`. Those are the methods you are learning to write! :)

- [ ] Make a commit with an appropriate message 💬💬💬 summarizing what you've done so far, following steps shown above.

- [ ] `_.reduce`: reduce should "reduce" a collection to a single value by repetitively calling the `iterator(accumulator, item)` for each item. The accumulator should be the return value of the previous iterator call.

   - [ ] If no starting value is passed, the first element in the collection should be used as the accumulator.

  ```js
  var numbers = [1, 2, 3];
  var accumulate = function (result, int) {
    return   result + int;
  };
  var sum = _.reduce(numbers, accumulate, 0); // ---> 6
  ```

- [ ] `_.contains`: _.contains determines if the array or object contains a target value. It uses '==='. We have done this one for you, using reduce. Once you write a correct reduce, the tests for this one should also pass. Please do not proceed until you understand what is going on.

- [ ] `_.every`: every should determine if all the elements pass the given truth test. ✅ It stakes in a callback (the test), and should return a boolean.
    - [ ] 👉💻 Your code for every should use `_.reduce` in its implementation.

- [ ] Make a commit with an appropriate message 💬💬💬 summarizing what you've done so far, following steps shown above.

#### Objects

Write this method for objects:

- [ ] `_.extend`: extend should "extend" a main object with the properties of another object. The first argument should be the main object and subsequent arguments should be objects to add to the main object. It makes shallow copies only.
    - [ ] 👉💻 Your code for extend should use `_.each` in its implementation.

- [ ] Make a commit with an appropriate message 💬💬💬 summarizing what you've done so far, following steps shown above.

#### Functions

These are function decorators. Function decorators take a function and return a new version of that function that works just a little bit differently.

Write these methods for functions:

- [ ] `_.once`: once should return a function that can be called at most one time. Any subsequent calls should return the previously returned value. 
    - [ ] 👉💻 You will need to use closures for this.

- [ ] `_.memoize`: memoize should take a function as an input. It takes the results from the input function and stores them (a cache). It should return a function that, when called, will check if it has already computed a result for the given argument. It should return the cached value if possible. Assume the input function only takes primitives as arguments.
    - [ ] 🤔🤔 You may want to think about using `JSON.stringify`.

- [ ] Make a commit with an appropriate message 💬💬💬 summarizing what you've done so far, following steps shown above.

- [ ] `_.invoke` : should call the method named by `functionOrKey` on each value in the list. Assume there are no extra arguments.

    - [ ] Besides being a string, `functionOrKey` can also be a function passed in. If it is a function, then we can apply the values directly onto it. 
    - [ ] 👉💻 You may want to use `apply` here, or at least [learn](http://lmgtfy.com/?q=apply+avascript) about it.

```js
_.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
// => [[1, 5, 7], [1, 2, 3]]
```

- [ ] Follow the Code Chrysalis git flow instructions to create a `pull request`.

## Advanced Requirements

Do these only if you have done the above. **You will also need to write your own tests for these.** Advanced requirements are not required, but attempts are highly encouraged. *Focus on finishing precourse first before you try to do advanced requirements!*

These methods can be found in the Underscore library 📚. 

- [ ] Check out the [Underscore](https://underscorejs.org) documentation 📄📄 for more information or examples!

- [ ] Remember to commit 💬💬💬.

Write these methods: 

- [ ] `_.sortBy`: sortBy should return a sorted copy of a collection (first input) and ranks them by ascending order based on the results of each value passed through the iteratee (second input). The iteratee may also be the string name of the property to sort (e.g. length 📏).

- [ ] `_.zip`: zip should "zip" together two or more arrays with elements of the same index going together.

- [ ] `_.delay`: delay should delay a function for a given number of milliseconds, then call it with the given arguments.

- [ ] `_.defaults`: defaults should be very similar to `_.extend`, but it doesn't overwrite a key that already exists.

- [ ] `_.throttle`: throttle should return a function that, when invoked, can only be triggered once during a given window of time ⌚.

## Documentation 

* [Underscore.js](http://underscorejs.org/)
* [Lodash](https://lodash.com/)