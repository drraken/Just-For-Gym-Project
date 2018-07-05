'use strict';
module.exports = function (app) {
    var jfgList = require('../controllers/jfgController');

    // userList Routes
    app.route('/tasks')
        .get(jfgList.list_all_tasks)
        .post(jfgList.create_a_task);

    app.route('/product')
        .get(jfgList.list_all_tasks_product)
        .post(jfgList.create_a_task_product);
    
    app.route('/product/:taskId')
        .put(jfgList.update_a_task_product);
    
    app.route('/buyer')
        .get(jfgList.list_all_tasks_buyer)
        .post(jfgList.create_a_task_buyer);


};
