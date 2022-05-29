const { Router } = require('express');
const { sendTasks, postTask, deleteTask, toggleTask, wrongPath } = require('./controllers/controller');

const router = new Router();

router.get('/tasks', sendTasks);
router.post('/tasks', postTask);
router.delete('/tasks', deleteTask);
router.put('/tasks', toggleTask);

router.all('/*', wrongPath);

module.exports = {
  router
};
