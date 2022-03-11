import './Home.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default function Home() {
  const [data, setData] = useState( [] );

  async function getArticles() {
    const data = (await axios.get('http://localhost:8000/')).data;
    setData(data);
  }

  useEffect(() => {
   getArticles()
  }, []);

    console.log(data);

    return (<>

        {data.map( x =>  <article key={x.id}>
                            <Link to={"/article_view/"+ x.id}> <h1 className="Article_title">{x.title}</h1> </Link>
                            <section dangerouslySetInnerHTML={{__html: x.content}}></section>
                            <h1>{x.id}</h1>
                         </article>
         )}
    </>);
}
