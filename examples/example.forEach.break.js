require('../index');

const arr = [1, 2, 3];

arr.forEach((el, i, array) => {
    console.log(`on iteration: ${i}`);
    if (i === 1) {
        console.log('we should exit now');
        return 'break';
    }
});