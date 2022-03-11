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
           "select * from articles",
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

  .post("/write", (req,res) =>
  {

          let title = req.body.title
          let content = req.body.content
          let thumbnailURL = req.body.content
          let mediaType = req.body.mediaType
          let mediaUrl = req.body.mediaUrl
          let name= req.body.name
          let idArticle=req.body.idArticle
          let idTag=req.body.idTag




          db.run("INSERT INTO article (title, content, thumbnailURL, mediaType, mediaUrl) values (?,?,?,?,?), INSERT INTO tag(name),INSERT INTO article_tag(idArticle, idTag)",
          [title, content, thumbnailURL, mediaType, mediaUrl,name, idArticle, idTag], (err) =>
          {
              if(err)
              {
              console.log("An Error has occured")
              return res.status(500).json(err);
              }

                      res.status(200).json({
                      success: "true",
                      message: "article successful"
              })
          })

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
    //Adds Records/


        module.exports = routes;
