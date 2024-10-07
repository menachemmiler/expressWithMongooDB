const { createNew, reply, getPoll, deletePoll, myStatus } = require('../controllers/greenEyeController');

const router = require('express').Router();

router.post('/', createNew);//create new green Eye

router.post('/reply', reply);//תגובת משתמש לנכסל

router.get('/my', myStatus);//קבלת המצב שלי בנכסל האם עניתי או לא

router.get('/:id', getPoll);//קבלת מצב של נכסל מסויים לפי מזהה של נכסל (כמה ענו...)

router.delete('/:id', deletePoll);//מחיקת\ביטול נכסל

module.exports = router;
