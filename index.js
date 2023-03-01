const express = require("express");
const app = express();
const hbs = require("hbs");
const bodyParser = require("body-parser");


app.set("view engine", "hbs");
app.use(express.static("public"));
hbs.registerPartials(__dirname + '/views/partials');
app.use(bodyParser.json());

const auth = require("./middleware/auth");

app.use(bodyParser.urlencoded({ extended: true }));
const userRouter = require('./user/routes');

hbs.registerHelper("json", function (context) {
  return JSON.stringify(context);
});

app.use("/", userRouter);


app.listen(8000, () => {
  console.log("server is runing on port 8000");
});
