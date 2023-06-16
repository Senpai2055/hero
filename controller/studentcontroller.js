const express = require("express");
const { student } = require("../Model");
const bcrypt = require("bcryptjs");
exports.index = async (req, res) => {
  res.render("index.ejs");
};
exports.store = async (req, res) => {
  // res.redirect("/test")
  res.render("about.ejs", { name: "Manish", cast: "Basnet" });
};

exports.notFound = async (req, res) => {
  res.render("notFound.ejs");
};
exports.login = async (req, res) => {
  res.render("login.ejs");
};
exports.loginstudent = async (req, res) => {
  console.log(req.body);
  const { name, password } = req.body;
  const foundstudent = await student.findAll({
    where: {
      name: name,
      // password: password,
    },
  });
  console.log(foundstudent);
  // console.log(student[0].password);
  if (bcrypt.compareSync(password, foundstudent[0].password)){
      res.redirect("/dashboard");
    } else {
      res.redirect("/login");
    }
};

exports.createstudent = async (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body; //short cut method
  // const name = req.body.name;
  // const email = req.body.email;
  student.create({
    title: "hello",
    name: name,
    email: email,
    password: bcrypt.hashSync(password, 5),
  });
  res.redirect("/login");
};
