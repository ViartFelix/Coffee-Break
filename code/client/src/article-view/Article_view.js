import React, { useState, useEffect } from 'react';
import  { useParams } from 'react-router-dom';
import axios from 'axios';
import {Link} from "react-router-dom";
import "./Article_view.css";

export default function Article_view() {

  const [data, setData] = useState([]);

  let params = useParams();

  async function getArticles(id) {
    const data = (await axios.get('http://localhost:8000/article_view/'+params.id)).data;
    setData(data);
  }

  useEffect(() => {
   getArticles(params.id)
  }, []);

  console.log(data);

  function displayMedia(url) {
    return <img className="img" src={"http://localhost:8000/media/"+url}/>
  }

  //let art = data;

  //console.log(art);
  //console.log("art: "+art[0].id);

  return (<div>
    {data.map(x =>
      <section key={x.id} className="article">
        <div className="media__container"> {displayMedia(x.mediaURL)} </div>
        <div className="container">
          <h3 className="article__title">{x.title}</h3>
          <div className="article__content" dangerouslySetInnerHTML={{__html: x.content}}></div>
        </div>
      </section>
    )}
    </div>);
}
