const { findTasks, saveTask, destroyTask } = require('../models/task.model');

const sendTasks = async function (req, res) {
  try {
    const tasks = await findTasks();
    res.send(tasks);
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
};



const postTask = async function (req, res) {
  try {
    const content = await saveTask(req.body);
    res.send(content);
    res.status(201);
  } catch (error) {
    console.log(error);
    res.status(400);
    res.send(error);
  }
};

const deleteTask = async function (req, res) {
  try {
    const response = await destroyTask(req.body);
    res.send(response);
    res.status(201);
  } catch (error) {
    console.log(error);
    res.status(400);
    res.send(error);
  }
};



const wrongPath = function (req, res) {
  res.status(404);
  res.send('Nothing to see here!');
};


module.exports = {
  postTask, sendTasks, deleteTask, wrongPath
};
