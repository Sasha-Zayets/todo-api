import Task from '../models/Task';

export const addTask = async (req, res) => {
    try {
        const { id, title, done } = req.body;
        const data = new Task({
            user_id: id,
            title,
            done
        });
        await data.save();
        return res.status(200).send('New post added');
    } catch(error) {
        return res.status(400).send(error);
    }
}

export const getTasks = async (req, res) => {
    try {
        const { user_id } = req.body;
        const data = await Task.find({ user_id });

        return res.status(200).send(data);
    } catch(error) {
        return res.status(400).send(error);
    }
} 

export const update = async (req, res) => {
    try {
        const { id, title, done } = req.body;
        await Task.updateOne({ _id: id }, { title, done });

        return res.status(200).send('Task updated');
    } catch(error) {
        return res.status(400).send(error);
    }
}