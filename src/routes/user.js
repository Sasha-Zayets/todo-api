import { Router } from 'express';
import { registration, login } from '../controller/user';

const router = Router();

router.post('/registration', registration);
router.post('/login', login);

export default router;