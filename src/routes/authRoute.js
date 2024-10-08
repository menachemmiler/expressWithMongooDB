const { login, logout } = require('../controllers/authController');

const router = require('express').Router();


/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags:
 *       - auth
 *     summary: login user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_name:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Success message + token in the cookie
 */
router.post('/login', login);//התחברות של משתמש למערכת (יוצר לו טוקן עם הפרטים שלו)

/**
 * @swagger
 * /auth/logout:
 *   delete:
 *     tags:
 *       - auth
 *     summary: login user
 *     responses:
 *       200:
 *         description: Success message = הטוקן נמחק בהצלחה
 */
router.delete('/logout', logout);//התחברות של משתמש למערכת (יוצר לו טוקן עם הפרטים שלו)


module.exports = router;
