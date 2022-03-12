const express = require("express");
const routes = express.Router();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('data/ecoalDB');


routes
.get("/", (req,res) => {
  db.all(
    "select * from articles limit 3",
    (err, rows) => res.json(rows)
  );
})

  .get("/articles", (req,res) => {
        db.all(
                 "select * from articles",
                 (err, rows) => res.json(rows)
      );
  })


  .get("/search/:query?", (req,res)=> {
    let myQuery=req.params.query
       if (!myQuery) {
         db.all(
           "select * from articles order by publish",
           (err, rows) => res.json(rows)
         );
       }
       else {
         db.all(
           "select * from articles where title like '%"+myQuery+"%'",
           (err, rows) => res.json(rows)
         );
       }
  })

  .get("/article_view/:id", (req,res)=> {
  let myId = req.params.id
    db.all(
      "select * from articles where id=" + myId,
      (err, rows) => res.json(rows)
    );
  })

  .post("/write", (req,res)=> {
  let title=req.body.title;
  let content=req.body.content;
  let thumbnailURL=req.body.thumbnail;

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();

  today = dd + '/' + mm + '/' + yyyy;

  db.run("INSERT INTO articles (title, content, thumbnailURL, publish) values (?,?,?,?)",[title, content, thumbnailURL, today], (err) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).send({
      success: "true",
      message: "article successful"
    })
  })
});

module.exports = routes;



/* For selecting all columns but with a condition
    .get("/articles", (req,res) => {
      db.all(
        "select * from articles where id>1",
        (err, rows) => res.json(rows)
      )
    })
    */
    //Adds Records/


        module.exports = routes;
