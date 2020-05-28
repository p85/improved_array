# Improved Array Functions
## Installation
`npm install package improved_array` 


## Usage
Just put `require('improved_array')` in your File.
___
The `foreach(callback: (ArrayElement, Index, Array))` Function now will stop its iteration when the Value `'break'` is being returned.
___
The new `asyncForEach(callback: (ArrayElement, Index, Array))` Function will wait with the Iteration until the Callback returns a Resolving Promise.

It also supports stopping of the Iteration, when the Value `'break'` is being returned via a Resolving Promise.
___

The `deduplicate()` Function removes all Duplicate Values from the Array and returns it.

It works with Primitive Values and Objects.


# Tests
Run `npm test`


# Example Usage
forEach
```
require('improved_array');

const arr = [1, 2, 3];

arr.forEach((el, i, array) => {
    console.log(`on iteration: ${i}`);
    if (i === 1) {
        console.log('we should exit now');
        return 'break';
    }
});
```

asyncForEach
```
require('improved_array');

const arr = [1, 2, 3];
const another_array = ['Hello', 'World', 'meh'];

await arr.asyncForEach(async (el, i, arr) => {
    console.log(`arr: on iteration: ${i}`);
    if (i === 1) {
        console.log('arr: we should exit now');
        return 'break';
    }
    return new Promise(resolve => setTimeout(() => resolve(), 500));
});

console.log('arr done');

await another_array.asyncForEach(async (el, i, arr) => {
    console.log(`another_array: ${el}`);
    return Promise.resolve();
});
console.log('another_array: done');
console.log('we are done now');

```
deduplicate
```
require('improved_array');

// with Primitive Values
let array_1 = new Array(10000);
let array_2 = new Array(10000);
let array_3 = new Array(10000);
array_1.fill(1);
array_2.fill(2);
array_3.fill(3);
let large_arr = [].concat(array_1, array_2, array_3).concat(array_2, array_3, array_1).concat(array_3, array_1, array_2);
let expectedToBe = [1, 2, 3];
let result = large_arr.deduplicate();

console.log(`\n\nThe Result should be equal: ${expectedToBe}`);
console.log(`Result: ${result}`);
console.log('\n*************************\n\n\n');

// with Objects
array_1 = new Array(10000);
array_2 = new Array(10000);
array_3 = new Array(10000);
array_1.fill({a: 'a'});
array_2.fill({b: 'b'});
array_3.fill({c: 'c'});
large_arr = [].concat(array_1, array_2, array_3).concat(array_2, array_3, array_1).concat(array_3, array_1, array_2);
expectedToBe = [{a: 'a'}, {b: 'b'}, {c: 'c'}];
result = large_arr.deduplicate();

console.log(`The Result should be equal: ${JSON.stringify(expectedToBe)}`);
console.log(`Result: ${JSON.stringify(result)}`);
console.log('\n*************************\n');
```