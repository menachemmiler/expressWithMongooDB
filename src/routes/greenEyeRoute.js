const router = require('express').Router();

router.post('/', () => {});//create new green Eye

router.get('/my', () => {});//קבלת המצב שלי בנכסל האם עניתי או לא

router.get('/:id', () => {});//קבלת מצב של נכסל מסויים לפי מזהה של נכסל (כמה ענו...)

module.exports = router;
