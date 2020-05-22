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
see Folder `examples`