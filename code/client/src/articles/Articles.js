import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Articles.css";
import {useCookies, withCookies} from 'react-cookie';


export default function Articles() {

  const [cookies, setCookie, removeCookie] = useCookies(['login']);
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


   if (cookies.login.value.lenght !== 0) {
     return (

        <>
         {console.log(cookies.login.value.lenght)}
         <h1>
             Articles !!
         </h1>
           {data.map( x =>  <article key={x.id}>
                               <h1 className="Article_title">{x.title}</h1>
                               <section dangerouslySetInnerHTML={{__html: x.content}}></section>
                               <h1>{x.id}</h1>
                               {displayMedia(x.mediaType,x.mediaURL)}
                            </article>
            )}
       </>
     );
   } else {
     return (
      <>
      {console.log(cookies.login.value.lenght)}
        <h1>Login to see the article</h1>
      </>
    );
   }


}
