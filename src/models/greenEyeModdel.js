const mongoose = require("mongoose"); //יבוא המחלקה שאחראית על כל הפעולות מול מסד נתונים מסוג: מונגו(לא רלציוני)

const populationSchema = mongoose.Schema({//שיוך של הקפצה
    areas: [String],//שיוך לפי איזור של חייל\מפקד 
    units: [Number],//שיוך לפי יחידה של חייל
});

const greenEyeSchema = new mongoose.Schema({
  //הגדרת המבנה של כל רשומה\פריט\אובייקט באוסף\טבלה
  createdAt: {
    //זמן יצירת ההודעה על נוהל נכסל חדש
    type: Date,
    default: Date.now,
  },
  createdBy: {
    //זהות יוצר הנכסל
    type: mongoose.Schema.Types.ObjectId, //מקושר למזהה של חייל
    ref: "user", //לכל אובייקט יש אובייקט "מזהה" בעל אופי ייחודי
    required: [true, "user id is required!"],
  },
  length: {
    //כמות הזמן שנדרש מהחיילים להגיב
    type: Number,
    default: 3,
  },
  replies: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "user",
  },
  population: {//שיוך של ההקפצה לנכסל (מי יוקפץ)
    type: populationSchema,
  },
});

const greenEyeModel = mongoose.model("greenEye", greenEyeSchema); //הגדרת הטבלה\אוסף כולל המבנה שלה
module.exports = greenEyeModel;
