import User from '../models/User';

export const login = async (req, res) => {
    try {
        const { name } = req.body;
        const query = User.where({ name });

        await query.findOne((error, user) => {
            if(error) throw error;
            return res.status(200).send(user); 
        });
    } catch(error) {
        return res.status(400).send(error);
    }
}

export const registration = async (req, res) => {
    try {
        const { name } = req.body;
        const newUser = new User({
            name
        });
        
        await newUser.save();
        return res.status(200).send('User successfully registered');
    } catch(error) {
        return res.status(203).send(error.message);
    }
}