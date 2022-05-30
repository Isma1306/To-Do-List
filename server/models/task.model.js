const { mongoose } = require('mongoose');
const { TaskSchema } = require('../schemas/task.schema');


const Task = new mongoose.model('Task', TaskSchema);

const saveTask = async function (content) {
  const newTask = await Task.create(content);
  newTask.save();
  return newTask;
};


const findTasks = async function () {
  const task = await Task.find();
  return task;
};

const destroyTask = async function (task) {
  const response = await Task.deleteOne(task);
  return response;
};

const updateTask = async function (task) {
  const newTask = await Task.replaceOne({ _id: task._id }, task);
  return newTask;
};

module.exports = {
  saveTask, findTasks, destroyTask, updateTask
};
