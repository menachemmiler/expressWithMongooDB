const mongoose = require("mongoose"); //יבוא המחלקה שאחראית על כל הפעולות מול מסד נתונים מסוג: מונגו(לא רלציוני)

const userSchema = new mongoose.Schema({
  //הגדרת המבנה של כל רשומה\פריט\אובייקט באוסף\טבלה
  user_name: {
    //שם פרטי
    type: String,
    required: [true, "user name is required!"],
    minlength: [4, "user name must to be at last 4 chars"],
  },
  password: {
    //סיסמא אישית
    type: String,
    required: [true, "password is required!"],
  },
  role: {
    //האם מפקד או חייל
    type: String,
    enum: ["soldier", "commander"],
    required: [true, "please provide a role!"],
  },
  area: {
    //איזור שיוך\מגורים של חייל\מפקד
    type: String,
    enum: ["center", "north", "south", "west", "east"],
    required: [true, "please provide an area!"],
  },
  units: {
    //מזהה\מספר יחידה
    type: [Number], //מפקד\(חייל) יכול להיות שייך לכמה יחידות
    required: [true, "please specify at least one unit!"],
  },
});

const UserModel = mongoose.model("user", userSchema);//הגדרת הטבלה\אוסף כולל המבנה שלה
module.exports = {
    UserModel,
    userSchema
};

