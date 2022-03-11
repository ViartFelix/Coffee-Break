import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Articles.css";


export default function Articles() {

  const [data, setData] = useState( [] );

  async function getArticles() {
    const data = (await axios.get('http://localhost:8000/articles')).data;
    setData(data);
    console.log(data)
  }
  async function getTags() {
    const data = (await axios.get('http://localhost:8000/articles')).data;
    setData(data);
    console.log(data)
  }



   useEffect(() => {
    getArticles()
    getTags()
   }, []);

   function displayMedia(type, url) {
     return  <img src={url="http://localhost:8000/media/" + url} />
   }
   function displayTags(id, name,url){
    return <p src={url="http://localhost:8000/tag/" + url}/>
   }


    return (
       <>
        <h1>
            Articles !!
        </h1>
          {data.map( x =>  <article key={x.id}>
                              <h1 className="Article_title">{x.title}</h1>
                              <section dangerouslySetInnerHTML={{__html: x.content}}></section>
                              {displayMedia(x.mediaType,x.mediaURL)}
                              <h1 className="tag">{x.name}</h1>
                              <section dangerouslySetInnerHTML={{__html: x.id}}></section>
                              {displayTags(x.id,x.name)}

                           </article>
                           
           )}
      </>
    );
}
