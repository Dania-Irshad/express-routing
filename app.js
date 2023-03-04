const express = require('express');
const app = express();
const { getMean, getMedian, getMode } = require('./operations');
const ExpressError = require("./expressError");


app.get('/mean', function (req, res) {
    if (!req.query.nums) {
        throw new ExpressError("Numbers are required", 400);
    }
    const numsArr = [];
    for (let num of req.query.nums.split(',')) {
        if (!Number(num)) {
            throw new ExpressError(`${num} is not a number`, 400);
        }
        numsArr.push(Number(num));
    }
    return res.send({
        operation: "mean",
        value: getMean(numsArr)
    });
});

app.get('/median', function (req, res) {
    if (!req.query.nums) {
        throw new ExpressError("Numbers are required", 400);
    }
    const numsArr = [];
    for (let num of req.query.nums.split(',')) {
        if (!Number(num)) {
            throw new ExpressError(`${num} is not a number`, 400);
        }
        numsArr.push(Number(num));
    }
    return res.send({
        operation: "median",
        value: getMedian(numsArr)
    });
});

app.get('/mode', function (req, res) {
    if (!req.query.nums) {
        throw new ExpressError("Numbers are required", 400);
    }
    const numsArr = [];
    for (let num of req.query.nums.split(',')) {
        if (!Number(num)) {
            throw new ExpressError(`${num} is not a number`, 400);
        }
        numsArr.push(Number(num));
    }
    return res.send({
        operation: "mode",
        value: getMode(numsArr)
    });
});


app.use(function (req, res, next) {
    const notFoundError = new ExpressError("Not Found", 404);
    return next(notFoundError)
});

app.use(function (err, req, res, next) {
    let status = err.status || 500;
    let message = err.message;

    return res.status(status).json({
        error: { message, status }
    });
});

app.listen(3000, function () {
    console.log('App on port 3000');
})