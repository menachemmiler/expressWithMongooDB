const express = require("express");
const dotenv = require("dotenv");
const { connectToMongoo } = require("./config/dbConfig");

const app = express();
dotenv.config();
connectToMongoo();

const port = process.env.PORT || 1415;

app.use(express.json());
app.use("/auth", require("./routes/authRoute"));
app.use("/user", require("./routes/userRoute"));
app.use("/greenEye", require("./routes/greenEyeRoute"));

app.listen(port, () => console.log(`server up and runing on port ${port}`));

//https://mongoosejs.com/docs/guide.html
