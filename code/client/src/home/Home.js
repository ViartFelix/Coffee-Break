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

    function displayMedia(type, url) {
      return  <img src={"http://localhost:8000/media/" + url} />
    }

    return (<>

      <p className="alc al_title"><h1 className="Home_title">Latest News</h1></p>

      {data.map( x =>
      <article key={x.id}>
        <div className="Article_text">
          <Link to={"/article_view/"+ x.id}> <h3 className="Article_title">{x.title}</h3> </Link>
          <h4>{x.publish}</h4>
        </div>
        <div className="Thumbnail">{displayMedia(x.mediaType,x.mediaURL)}</div>
      </article>
      )}
    </>);
}
