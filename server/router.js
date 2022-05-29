const { Router } = require('express');
const { sendTasks, postTask, deleteTask, wrongPath } = require('./controllers/controller');

const router = new Router();

router.get('/tasks', sendTasks);

router.post('/tasks', postTask);
router.delete('/tasks', deleteTask);
router.all('/*', wrongPath);

module.exports = {
  router
};
