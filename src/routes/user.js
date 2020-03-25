import { Router } from 'express';
import User from '../models/User';
const router = Router();

router.post('/user', async (req, res) => {
    try {
        const { name, password } = req.body;
        const newUser = new User({
            name, password
        });
        
        await newUser.save();
        return res.send('Користувач успішно доданий');
    } catch(error) {
        return res.send('error');
    }
});

router.get('/user', async (req, res) => {
    try {
        const data = await User.find();
        
        return res.status(200).send(data);
    } catch(error) {
        return res.status(400).send(error);
    }
});

export default router;