const User = require('../models/User');

const login = async (req, res) => {
    try {
        const { name, password } = req.body;
        const query = User.where({ name, password });

        const result = await query.findOne();
        if(result === null) throw 'User is not registered';
        return res.status(200).send(result);
    } catch(error) {
        return res.status(203).send(error);
    }
}

const registration = async (req, res) => {
    try {
        const { name, password } = req.body;
        const newUser = new User({
            name,
            password
        });
        
        const result = await newUser.save();
        return res.status(200).send('User successfully registered');
    } catch(error) {
        return res.status(203).send(error.message);
    }
}

module.exports = {
    login,
    registration
}