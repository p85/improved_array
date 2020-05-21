require('../index');

(async () => {
    const arr = [1, 2, 3];

    await arr.asyncForEach(async (el, i, arr) => {
        console.log('on iteration: ' + i);
        if (i === 1) {
            console.log('we should exit now');
            return 'break';
        }
        return new Promise(resolve => setTimeout(() => resolve(), 500));
    });
})();

