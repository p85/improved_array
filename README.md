# Improved Array Functions
## Installation
`npm install package improved_array` 


## Usage
Just put `require('improved_array')` in your File.
___
The `foreach` Function now will stop its iteration when the Value `'break'` is being returned.
___
The new `asyncForEach` Function will wait with the Iteration until the Callback returns a Resolving Promise.

It also supports stopping of the Iteration, when the Value `'break'` is being returned via a Resolving Promise.


# Tests
Run `npm test`