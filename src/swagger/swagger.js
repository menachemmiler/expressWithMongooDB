const swaggerJsdoc = require("swagger-jsdoc");//יבוא המחלקה שאחראית על הגדרת המבנה של ה-swager
const swaggerUi = require("swagger-ui-express");//יבוא המחלקה שאחראית על ייצור ה-ממשק הויזואלי של ה-swager

const options = {//אובייקט ההגדרות של ה-swager
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Swagger Express API",
      version: "1.0.0",
      description: "A simple Express API with Swagger documentation",
    },
    tags: [//הגדרת כל נושאי הבסיס שיש להם נקודות קצה ב-swager 
      {
        name: "user",
        description: "API for managing users",
      },
      {
        name: "auth",
        description: "aoutontication",
      },
      {
        name: "greenEye",
        description: "",
      },
    ],
  },
  apis: ["./src/routes/*.js"], // Path to your API routes
};

const specs = swaggerJsdoc(options);//הכנסת ההגדרות שלי לבנאי של המחלקה של ההגדרות של swager

module.exports = {
  specs,
  swaggerUi,
};
