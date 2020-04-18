const Task = require('../models/Task');

const addTask = async (req, res) => {
    try {
        const { id, title, done } = req.body;
        const data = new Task({
            user_id: id,
            title,
            done
        });
        const result = await data.save();
        return res.status(200).send(result);
    } catch(error) {
        return res.status(400).send(error);
    }
}

const getTasks = async (req, res) => {
    try {
        const { id } = req.body;
        const data = await Task.find({ user_id: id });
        
        return res.status(200).send(data);
    } catch(error) {
        return res.status(400).send(error);
    }
} 

const update = async (req, res) => {
    try {
        const { id, task } = req.body;
        const result = await Task.updateOne({ _id: id }, { ...task });
        
        return res.status(200).send(result);
    } catch(error) {
        return res.status(400).send(error);
    }
}

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Task.deleteOne({ _id: id });

        return res.status(200).send(result);
    } catch(error) {
        return res.status(400).send(error);
    }
}

module.exports = {
    addTask,
    getTasks,
    update,
    deleteTask
}