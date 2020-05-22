require('../index');

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
