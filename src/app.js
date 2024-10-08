const express = require("express");
const dotenv = require("dotenv");
const { connectToMongoo } = require("./config/dbConfig");
const cookieParser = require("cookie-parser");


const app = express();
dotenv.config();
connectToMongoo();//הפעלת הפונקצייה שאחראית על התחברות למסד הנתונים

const port = process.env.PORT || 1415;

app.use(express.json());
app.use(cookieParser());

app.use("/auth", require("./routes/authRoute"));
app.use("/user", require("./routes/userRoute"));//כל הפעולות שקשורות ל-חייל\מפקד  יתחילו ב-/user
app.use("/greenEye", require("./routes/greenEyeRoute"));

app.listen(port, () => console.log(`server up and runing on port ${port}`));

//https://mongoosejs.com/docs/guide.html
