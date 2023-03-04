const { getMean, getMedian, getMode } = require('./operations');

describe("getMean", function () {
    test("Get the mean of a list of numbers", function () {
        let nums = [5, 1, 3, 4, 2];
        expect(getMean(nums)).toEqual(3);
    });
});

describe("getMedian", function () {
    test("Get the median of a list of numbers", function () {
        let nums = [5, 1, 3, 4, 2];
        expect(getMedian(nums)).toEqual(3);
    });
});

describe("getMode", function () {
    test("Get the mode of a list of numbers", function () {
        let nums = [5, 1, 3, 4, 2, 2];
        expect(getMode(nums)).toEqual(2);
    });
});