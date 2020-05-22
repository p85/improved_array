require('../index');

// workaround for top level await
(async () => {
    const arr = [1, 2, 3];
    const another_array = ['Hello', 'World', 'meh'];

    await arr.asyncForEach(async (el, i, arr) => {
        console.log(`arr: on iteration: {i}`);
        if (i === 1) {
            console.log('arr: we should exit now');
            return 'break';
        }
        return new Promise(resolve => setTimeout(() => resolve(), 500));
    });

    console.log('arr done');

    await another_array.asyncForEach(async (el, i, arr) => {
        console.log(`another_array: ${el}`);
    });
    console.log('another_array: done');
    console.log('we are done now');
})();

