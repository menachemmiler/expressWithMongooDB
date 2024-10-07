const { login } = require('../controllers/authController');

const router = require('express').Router();

router.post('/login', () => login);//התחברות של משתמש למערכת (יוצר לו טוקן עם הפרטים שלו)

module.exports = router;
