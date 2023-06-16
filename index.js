const express = require("express");
const app = express();
const port = 3000;
const db = require("./Model/index");
// const student = require("./Model/student");
const studentcontroller = require("./controller/studentcontroller");
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync({ force: false });
app.get("/", studentcontroller.index);
app.get("/store", studentcontroller.store);
app.get("/login", studentcontroller.login);
app.post("/login", studentcontroller.loginstudent);

app.post("/student", studentcontroller.createstudent);

app.all("*", studentcontroller.notFound);

// app.get("/", (req, res) => {
//   res.json({
//     status: "200",
//     message: "hello testing",
//   });
// });
// start the server
app.listen(port, () => {
  console.log("server is running on port ${port}");
});
