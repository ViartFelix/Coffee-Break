import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import "./search.css";

export default function Search() {
  const [data, setData] = useState( [] );


  async function getArticles(query) {
    const data = (await axios.get('http://localhost:8000/search/'+ query)).data;
    setData(data);
    console.log(data)
  }

  useEffect(() => {
   getArticles('')
  }, []);

  console.log(data);


  function change_filter(e) {
    console.log(document.querySelector(".true-input").value);
  }

  function change_query(e) {
    let q = document.querySelector(".true-input").value
    getArticles(q)
    //document.querySelector(".true-input").value;
    //console.log(document.querySelector(".true-input").value);
  }

  function displayMedia(type, url) {
    return  <img src={"http://localhost:8000/media/" + url} />
  }

    return (
      <>
        <p className="alc al_title"><h1 className="Home_title">Search</h1></p>

        <label htmlFor="input">Search by name: </label> <input onKeyUp={change_query} type="input" name="input" className="true-input"/>

        <div>
          {data.map( x =>
          <article key={x.id}>
            <div className="Article_text">
              <Link to={"/article_view/"+ x.id}> <h3 className="Article_title">{x.title}</h3> </Link>
              <h4>{x.publish}</h4>
            </div>
            <div className="Thumbnail">{displayMedia(x.mediaType,x.mediaURL)}</div>
          </article>
           )}
        </div>

        {console.log(data.length)}
    </>
  );
}
