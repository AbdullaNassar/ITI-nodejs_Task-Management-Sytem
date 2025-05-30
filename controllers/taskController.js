const Task = require('../models/taskModel.js');

function getAllTasks() {
  const tasks = Task.find();
  return tasks;
};

function createTask(data) {
  const task = Task.create(data);
  return task;
};

function updateTask(id,data) {
  const task = Task.findOneAndUpdate(id,data,{new:true,runValidators:true});
  return task;
};
function deleteAllTasks() {
  const data = Task.deleteMany({});
  return data;
};

function deleteOneTask(id) {
  const data = Task.deleteOne({_id:id})
  return data;
};

function getTask(id) {
  const task = Task.findOne({_id:id});
  return task;
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteAllTasks,
  deleteOneTask,
  getTask
}
