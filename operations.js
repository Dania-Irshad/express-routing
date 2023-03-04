function getMean(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    let mean = sum / nums.length;
    return mean;
}

function getMedian(nums) {
    let median = 0;
    nums.sort(function (a, b) { return a - b });
    if (nums.length % 2 !== 0) {
        median = nums[(nums.length - 1) / 2];
    }
    else {
        median = (nums[nums.length / 2 - 1] + nums[nums.length / 2]) / 2;
    }
    return median;
}

function getMode(nums) {
    const mode = {};
    let maxNum = 0;
    let count = 0;
    let num;

    for (let i = 0; i < nums.length; i++) {
        num = nums[i];
        if (mode[num]) {
            mode[num]++;
        }
        else {
            mode[num] = 1;
        }

        if (count < mode[num]) {
            maxNum = num;
            count = mode[num];
        }
    }
    return maxNum;
}

module.exports = {
    getMean: getMean,
    getMedian: getMedian,
    getMode: getMode
};