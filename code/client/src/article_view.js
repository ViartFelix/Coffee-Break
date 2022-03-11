import React, { useState, useEffect } from 'react';
import  { useParams } from 'react-router-dom';
import axios from 'axios';
import {Link} from "react-router-dom"

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

  //let art = data;

  //console.log(art);
  //console.log("art: "+art[0].id);

  return (<div>
    {data.map(x =>
      <article key={x.id}>
      {console.log(x.title)}
        <h1 className="Article_title">{x.title}</h1>
        <section dangerouslySetInnerHTML={{__html: x.content}}></section>
        <h1>{x.id}</h1>
      </article>
    )}
    </div>);
}
