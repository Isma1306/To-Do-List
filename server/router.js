const { Router } = require('express');
const { sendTasks, postTask, wrongPath } = require('./controllers/controller');

const router = new Router();

router.get('/tasks', sendTasks);

router.post('/tasks', postTask);

router.all('/*', wrongPath);

module.exports = {
  router
};
