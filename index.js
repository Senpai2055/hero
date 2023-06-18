const express = require("express");
const app = express();
const port = 3000;
const db = require("./Model/index");
const { storage, multer } = require("./services/multerConfig");
const upload = multer({ storage: storage });
const path = require("path");

// const student = require("./Model/student");
const studentcontroller = require("./controller/studentcontroller");
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "uploads")));

db.sequelize.sync({ force: false });
app.get("/", studentcontroller.index);
app.get("/store", studentcontroller.store);
app.get("/login", studentcontroller.login);
app.post("/login", studentcontroller.loginstudent);
app.post("/student", upload.single("img"), studentcontroller.createstudent);

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
