const express = require("express");
const routes = express.Router();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('data/ecoalDB');

module.exports = routes;

routes
  .get("/", (req, res) => {
      res.json("Hello world!!");
  })

<<<<<<< HEAD
  .get("/articles", (req,res) => {
    db.all(
      "select * from articles",
      (err, rows) => res.json(rows)
    );
  })
=======
    .get("/articles", (req,res) => {
            db.all(
                     "select * from articles",
                     (err, rows) => res.json(rows)
          );
>>>>>>> f8f50820edd74478a6df2c4a1b8f8ba6313c7150

/* For selecting all columns but with a condition
    .get("/articles", (req,res) => {
      db.all(
        "select * from articles where id>1",
        (err, rows) => res.json(rows)
      )
    })
*/
