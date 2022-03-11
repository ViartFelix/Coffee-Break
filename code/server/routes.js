const express = require("express");
const routes = express.Router();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('data/ecoalDB');

module.exports = routes;

routes
    .get("/", (req, res) => {
      db.all(
               "select * from articles order by publish limit 3",
               (err, rows) => res.json(rows)
      );
    })

    .get("/articles", (req,res) => {
            db.all(
                     "select * from articles",
                     (err, rows) => res.json(rows)
          );

    })
