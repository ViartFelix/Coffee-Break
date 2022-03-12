import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Articles.css";
import {Link} from "react-router-dom";

export default function Articles() {

  const [data, setData] = useState( [] );

  async function getArticles() {
    const data = (await axios.get('http://localhost:8000/articles')).data;
    setData(data);
    console.log(data)
  }

  console.log(data)

   useEffect(() => {
    getArticles()
   }, []);

   function displayMedia(type, url) {
     return  <img src={"http://localhost:8000/media/" + url} />
   }

   function displayTags(id, name,url){
    return <p src={url="http://localhost:8000/tag/" + url}/>
   }

     return (
        <>
         <p className="alc al_title"><h1 className="Home_title">All the articles</h1></p>
            {data.map( x =>
            <article key={x.id}>
              <div className="Article_text">
                <Link to={"/article_view/"+ x.id}> <h3 className="Article_title">{x.title}</h3> </Link>
                <h4>{x.publish}</h4>
              </div>
              <div className="Thumbnail">{displayMedia(x.mediaType,x.mediaURL)}</div>
            </article>
            )}
       </>
     );


}
