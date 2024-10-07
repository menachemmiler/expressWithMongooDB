const router = require('express').Router();

router.post('/register', () => {});//הרשמת משתמש חדש

router.get('/profile', () => {});//קבלת פרטי המשתמש הנוכחי מה-טוקן שלו

router.patch('/setingsUpdate', () => {});//עדכון פרטי המשתמש (כולל עדכון הסטטוס שלו ב-??????????)

router.post('/reply', () => {});//תגובת משתמש לנכסל

router.delete('/:id', () => {});//מחיקת\ביטול נכסל

module.exports = router;
