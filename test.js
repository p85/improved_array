require('./index');
const assert = require('assert');
const { PerformanceObserver, performance } = require('perf_hooks');


describe('tests', () => {
    describe('forEach', () => {
        it('should loop through an array', () => {
            const results = [];
            const shouldBe = ['1_0_[1,2,3]', '2_1_[1,2,3]', '3_2_[1,2,3]'];
            [1, 2, 3].forEach((el, i, arr) => {
                const strf = `${el}_${i}_${JSON.stringify(arr)}`;
                results.push(strf);
            });
            assert.deepStrictEqual(results, shouldBe);
        });
        it('should stop loop iteration on returning "break"', () => {
            const results = [];
            const shouldBe = ['1_0_[1,2,3]'];
            [1, 2, 3].forEach((el, i, arr) => {
                if (i === 1) {
                    return 'break';
                }
                const strf = `${el}_${i}_${JSON.stringify(arr)}`;
                results.push(strf);
            });
            assert.deepStrictEqual(results, shouldBe);
        });
    });
    describe('asyncForEach', () => {
        it('should loop through an array, waiting for async to resolve', async () => {
            const results = [];
            const shouldBe = ['1_0_[1,2,3]', '2_1_[1,2,3]', '3_2_[1,2,3]'];
            let runtime;

            const obs = new PerformanceObserver((items) => {
                runtime = Math.trunc(items.getEntries()[0].duration);
                performance.clearMarks();
            });
            obs.observe({ entryTypes: ['measure'] });

            performance.mark('async Runtime start');

            await [1, 2, 3].asyncForEach(async (el, i, arr) => {
                const strf = `${el}_${i}_${JSON.stringify(arr)}`;
                results.push(strf);
                return new Promise(resolve => setTimeout(() => resolve(), 500));
            });

            performance.mark('async Runtime end');
            performance.measure('async Runtime', 'async Runtime start', 'async Runtime end');

            assert.deepStrictEqual(results, shouldBe);
            assert.strictEqual(runtime > 1490, true, 'runtime should be greater than 1500ms');
            return Promise.resolve();
        });
        it('should stop loop iteration on returning "break"', async () => {
            const results = [];
            const shouldBe = ['1_0_[1,2,3]'];
            let runtime;

            const obs = new PerformanceObserver((items) => {
                runtime = Math.trunc(items.getEntries()[0].duration);
                performance.clearMarks();
            });
            obs.observe({ entryTypes: ['measure'] });

            performance.mark('async Runtime start');

            await [1, 2, 3].asyncForEach(async (el, i, arr) => {
                if (i === 1) {
                    return 'break';
                }
                const strf = `${el}_${i}_${JSON.stringify(arr)}`;
                results.push(strf);
                return new Promise(resolve => setTimeout(() => resolve(), 500));
            });

            performance.mark('async Runtime end');
            performance.measure('async Runtime', 'async Runtime start', 'async Runtime end');

            assert.deepStrictEqual(results, shouldBe);
            assert.strictEqual(runtime > 490, true, 'runtime should be greater than 500ms');
            return Promise.resolve();
        });
    });
});