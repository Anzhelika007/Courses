//- **`Array.flat` Polyfill**: Implement a polyfill for the `Array.flat` method. This method should flatten an array up to the specified depth, handling cases where the depth is not provided (default to 1) or when it's an infinite depth.
//- **`Array.reduce` Polyfill**: Write a polyfill for the `Array.reduce` method. Ensure your implementation handles all the functionalities of the native `reduce` method, including the accumulator and current value parameters, as well as the optional initial value.
//- **String Repeater**: Create a method that extends the String prototype to repeat a given string a specified number of times. For example, calling `'hello world'.repeating(3)` should return `'hello world hello world hello world'`. The method should handle edge cases like non-integer repeat times and negative numbers.
//- **`String.prototype.padStart` Polyfill**: Write a polyfill for the `String.prototype.padStart` method. It should pad the current string from the start with another string (multiple times if necessary) until the resulting string reaches the given length.
//- **Custom `setTimeout` Implementation**: Implement a custom version of `setTimeout` using only `Date` and a `while` loop, without using the native `setTimeout` function.
//- **Memoization Function**: Create a function that implements memoization to cache and return the results of expensive function calls.
//- **Currying Logger**: Develop a `curryLogger` function that takes a logging function and returns a curried version of this function.
//- **Arguments Reverser**: Implement a function that reverses the order of arguments it receives, returning a new function with reversed arguments.
//- **Private Counter Closure**: Craft a function that uses closures to create a private counter, which can only be modified through specific methods.
function createCounter() {
  let count = 0;  // Private variable

  return {
    increment: function() {
      count += 1;
      return count;
    },
    decrement: function() {
      count -= 1;
      return count;
    },
    getValue: function() {
      return count;
    }
  };
}

// Example Usage
const counter = createCounter();

console.log(counter.getValue());  // Output: 0
counter.increment();
counter.increment();
console.log(counter.getValue());  // Output: 2
counter.decrement();
console.log(counter.getValue());  // Output: 1


//- **Rest Parameters Sum**: Write a function that uses rest parameters to calculate and return the sum of an indefinite number of arguments.
//- **Object Freeze Deep**: Create a function that deeply freezes an object, ensuring all nested objects are also frozen.
//- **Array Chunker**: Develop a function that divides an array into chunks of a specified size and returns them.
//- **Custom Array Filter**: Implement your own version of the array filter function without using the built-in `Array.prototype.filter` method.
//- **DOM Element Selector**: Write a function for selecting DOM elements with a specific data attribute and applying a given callback function to them.
