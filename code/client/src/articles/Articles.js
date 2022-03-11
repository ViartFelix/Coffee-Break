import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Articles.css";


export default function Articles() {

  const [data, setData] = useState( [] );

  async function getArticles() {
    const data = (await axios.get('http://localhost:8000/articles')).data;
    setData(data);
  }



   useEffect(() => {
    getArticles()
   }, []);

   function displayMedia(type, url) {
     return <img src={"http://localhost:8000/media/" +url} />
   }

    
   if(data.length == 0)
       return null
   let last = data[0]
    

    return (
       <>
    

        <div className='Main_article'>
          {displayMedia(last.mediaType, last.mediaURL)}
          <span className="Main_title">Ukrainian and Russian: how similar are the two languages?</span>
        </div>
        <h2 className="Latest_news">Latest News</h2>
        
          {data.map( x =>  <article key={x.id}>
                              <div className="Article_text">
                              <h3 className="Article_title">{x.title}</h3>
                              <h4>{x.publish}</h4>
                              </div>
                              <div className="Thumbnail">{displayMedia(x.mediaType,x.mediaURL)}</div>
                           </article>
           )}
      </>
    );
}
