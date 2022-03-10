const express = require("express");
const routes = express.Router();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('data/ecoalDB');

const verify=require('./connectionRouter').verify;

routes
  .get("/", (req, res) => {
      res.json("Hello world!!");
  })

  .get("/articles", (req,res) => {
    db.all(
      "select * from articles",
      (err, rows) => res.json(rows)
    );
  })

module.exports = routes;



/* For selecting all columns but with a condition
    .get("/articles", (req,res) => {
      db.all(
        "select * from articles where id>1",
        (err, rows) => res.json(rows)
      )
    })
*/
