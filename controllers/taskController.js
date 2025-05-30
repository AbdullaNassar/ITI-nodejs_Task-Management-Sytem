const Task = require('../models/taskModel.js');

const getAllTasks = (req,res)=> {
  const tasks = Task.find();
  res.json(tasks);
};

const createTask = (req,res)=> {
  const task = Task.create(req.body);
  res.json(task);
};

const updateTask = (req,res)=> {
  const {id} = req.params;
  const task = Task.findOneAndUpdate(id,req.body,{new:true,runValidators:true});
  res.json(task);
};
const deleteAllTasks = (req,res)=> {
  const data = Task.deleteMany({});
  res.json(data);
};

const deleteOneTask = (req,res)=> {
  const {id} = req.params;
  const data = Task.deleteOne({_id:id});
  res.json(data);
};

const getTask = (req,res)=> {
  const {id} = req.params;
  const task = Task.findOne({_id:id});
  res.json(task);
};

module.exports = {
  createTask,
  getTask,
  getAllTasks,
  updateTask,
  deleteOneTask,
  deleteAllTasks
};
