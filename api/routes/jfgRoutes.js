'use strict';
module.exports = function(app) {
  var jfgList = require('../controllers/jfgController');

  // userList Routes
  app.route('/tasks')
    .get(jfgList.list_all_tasks) 
    .post(jfgList.create_a_task);



  app.route('/tasks/:taskId')
    .get(jfgList.read_a_task)
    .put(jfgList.update_a_task)
    .delete(jfgList.delete_a_task);
};