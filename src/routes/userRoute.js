const { register, profile, setingsUpdate } = require('../controllers/userController');
const { onlySoldiersAndCommanders } = require('../middlewares/authMiddleware');

const router = require('express').Router();

router.post('/register', register);//הרשמת משתמש חדש

router.get('/profile', onlySoldiersAndCommanders ,profile);//קבלת פרטי המשתמש הנוכחי מה-טוקן שלו

router.patch('/setingsUpdate', setingsUpdate);//עדכון פרטי המשתמש (כולל עדכון הסטטוס שלו ב-??????????)



module.exports = router;
