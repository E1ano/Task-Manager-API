const Task = require('../models/TaskModel');

const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ totalCount: tasks.length, tasks });
  } catch (error) {
    next(error); // Pass the error to the error handler
  }
};

const createTask = async (req, res, next) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    next(error);
  }
};

const getTask = async (req, res, next) => {
  try {
    const taskID = req.params.id;
    const task = await Task.findById(taskID);

    if (!task) {
      return res
        .status(404)
        .json({ message: `Task with id: ${taskID} not found.` });
    }

    res.status(200).json({ task });
  } catch (error) {
    next(error);
  }
};

const updateTask = async (req, res, next) => {
  try {
    const taskID = req.params.id;
    const task = await Task.findByIdAndUpdate(
      taskID,
      { ...req.body },
      {
        new: true, // Return the updated document
        runValidators: true, // Ensure the updates follow schema rules
      }
    );

    if (!task) {
      return res
        .status(404)
        .json({ message: `Task with id: ${taskID} not found.` });
    }

    res.status(200).json({ message: 'Task updated successfully', task });
  } catch (error) {
    next(error);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const taskID = req.params.id;
    const task = await Task.findByIdAndDelete(taskID);

    if (!task) {
      return res
        .status(404)
        .json({ message: `Task with id: ${taskID} not found.` });
    }

    res.status(200).json({ message: 'Task deleted', task });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
