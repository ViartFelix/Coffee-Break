import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

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

    return (
      <>
        <h1 className="Home_title">
            My Online Newspaper !! Baguette
        </h1>

        <div>
          <input onKeyUp={change_query} type="input" className="true-input"/>
        </div>

        <div>
          {data.map( x => <article key={x.id}>
                              <Link to={"/article_view/"+ x.id}> <h1 className="Article_title">{x.title}</h1> </Link>
                              <section dangerouslySetInnerHTML={{__html: x.content}}></section>
                              <h1>{x.id}</h1>
                           </article>
           )}
        </div>

        {console.log(data.length)}
    </>
  );
}
