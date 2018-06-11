'use strict';
module.exports = function(app) {
  var jfgList = require('../controllers/jfgController');

  // userList Routes
  app.route('/tasks')
    .get(jfgList.list_all_tasks)
    .get(jfgList.list_all_tasks1)
    .post(jfgList.create_a_task)
    .post(jfgList.create_a_task1);


  app.route('/tasks/:taskId')
    .get(jfgList.read_a_task)
    .put(jfgList.update_a_task)
    .delete(jfgList.delete_a_task);
};