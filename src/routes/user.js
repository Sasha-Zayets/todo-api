const { Router } = require('express');
const { registration, login } = require('../controller/user');

const router = Router();

router.post('/registration', registration);
router.post('/login', login);

module.exports = router;