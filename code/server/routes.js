const express = require("express");
const routes = express.Router();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('data/ecoalDB');

module.exports = routes;

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
    //Adds Records/

        .post("/articles", (req,res) =>
        {

                let title = req.body.title 
                let content = req.body.content
                let thumbnailURL = req.body.content
                let mediaType = req.body.mediaType
                let mediaUrl = req.body.mediaUrl


                db.run("INSERT INTO article (title, content, thumbnailURL, mediaType, mediaUrl) values (?,?,?,?,?)", 
                [title, content, thumbnailURL, mediaType, mediaUrl], (err) =>
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
        
