import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';

export default function Home() {

  const [data, setData] = useState( [] );

  async function getArticles() {
    const data = (await axios.get('http://localhost:8000/')).data;
    setData(data);
  }



   useEffect(() => {
    getArticles()
   }, []);

    return (<>
        <h1 className="Home_title">
            My Online Newspaper !! QL?DQ?KMD?KQDZKMQMKDLQ?MZDL?MQD?LMQL?DL?MQ
        </h1>
          {data.map( x =>  <article key={x.id}>
                              <h1 className="Article_title">{x.title}</h1>
                              <section dangerouslySetInnerHTML={{__html: x.content}}></section>
                           </article>
           )}
    </>);
}
