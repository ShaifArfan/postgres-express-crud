const { getAllUsers, createUser, updateUser, deleteUser} = require('../controllers/user');
const db = require('../db');

const router = require('express').Router();

router.get('/', getAllUsers);
router.post('/create', createUser);
router.put('/update/:userId', updateUser);
router.delete('/delete/:userId', deleteUser);

module.exports = router;