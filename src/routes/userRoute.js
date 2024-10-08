const {
  register,
  profile,
  setingsUpdate,
  getAll,
} = require("../controllers/userController");
const {
  onlySoldiersAndCommanders,
  onlyCommanders,
} = require("../middlewares/authMiddleware");

const router = require("express").Router();

/**
 * @swagger
 * /user/register:
 *   post:
 *     tags:
 *       - user
 *     summary: Register a new user
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
 *               role:
 *                 type: string
 *                 enum:
 *                   - soldier
 *                   - commander
 *               area:
 *                 type: string
 *                 enum:
 *                   - center
 *                   - north
 *                   - south
 *                   - west
 *                   - east
 *               units:
 *                 type: array
 *                 items:
 *                  type: number
 *     responses:
 *       200:
 *         description: A successful response
 */
router.post("/register", register); //הרשמת משתמש חדש

/**
 * @swagger
 * /user/profile:
 *   get:
 *     tags:
 *       - user
 *     summary: get users profile with token
 *     responses:
 *       200:
 *         description: A successful response
 */
router.get("/profile", onlySoldiersAndCommanders, profile); //קבלת פרטי המשתמש הנוכחי מה-טוקן שלו

/**
 * @swagger
 * /user/getAll:
 *   get:
 *     tags:
 *       - user
 *     summary: get all users
 *     responses:
 *       200:
 *         description: A list of users
 */
router.get("/getAll", getAll); //קבלת כל החיילים כרגע בלי טוקן (רק בשביל להבין טוב יותר)

router.patch("/setingsUpdate", setingsUpdate); //עדכון פרטי המשתמש (כולל עדכון הסטטוס שלו ב-??????????)

module.exports = router;
