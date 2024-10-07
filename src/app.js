const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
const port = process.env.PORT || 1415;

app.use(express.json());
app.use("/auth", require("./routes/authRoute"));
app.use("/user", require("./routes/userRoute"));
app.use("/greenEye", require("./routes/greenEyeRoute"));

app.listen(port, () => console.log(`server up and runing on port ${port}`));
