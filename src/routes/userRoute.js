const { register, profile, setingsUpdate, getAll } = require('../controllers/userController');
const { onlySoldiersAndCommanders, onlyCommanders } = require('../middlewares/authMiddleware');

const router = require('express').Router();

router.post('/register', register);//הרשמת משתמש חדש

router.get('/profile', onlySoldiersAndCommanders ,profile);//קבלת פרטי המשתמש הנוכחי מה-טוקן שלו

router.get('' , getAll);//קבלת כל החיילים כרגע בלי טוקן (רק בשביל להבין טוב יותר)

router.patch('/setingsUpdate', setingsUpdate);//עדכון פרטי המשתמש (כולל עדכון הסטטוס שלו ב-??????????)



module.exports = router;
