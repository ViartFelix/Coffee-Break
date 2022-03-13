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
  async function getTags() {
    const data = (await axios.get('http://localhost:8000/articles')).data;
    setData(data);
    console.log(data)
  }

  console.log(data)

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
           {data.map( x => <article key={x.id}>
                              <Link to={"/article_view/"+ x.id}> <h1 className="Article_title">{x.title}</h1> </Link>
                               <section dangerouslySetInnerHTML={{__html: x.content}}></section>
                               <h1>{x.id}</h1>
                               {displayMedia(x.mediaType,x.mediaURL)}
                            </article>
            )}
       </>
     );


    return (
       <>
        <h1>
            Articles !!
        </h1>
          {data.map( x =>  <article key={x.id}>
                              <h1 className="Article_title">{x.title}</h1>
                              <section dangerouslySetInnerHTML={{__html: x.content}}></section>
                              {displayMedia(x.mediaType,x.mediaURL)}

                              



                           </article>
           )}
      </>
    );
}
