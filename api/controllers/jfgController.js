'use strict';


var mongoose = require('mongoose'),
    Task = mongoose.model('User'),
    TaskProduct = mongoose.model('Product'),
    TaskBuyer = mongoose.model('Buyer');




exports.list_all_tasks = function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    Task.find({}, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};


exports.create_a_task = function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    var new_task = new Task(req.body);
    new_task.save(function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.list_all_tasks_product = function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    TaskProduct.find({}, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};


exports.create_a_task_product = function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    var new_task = new TaskProduct(req.body);
    new_task.save(function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.list_all_tasks_buyer = function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    TaskBuyer.find({}, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};


exports.create_a_task_buyer = function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    var new_task = new TaskBuyer(req.body);
    new_task.save(function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.update_a_task_product = function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    TaskProduct.findOneAndUpdate({
        _id: req.params.taskId
    }, req.body, {
        new: true
    }, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};
