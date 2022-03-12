import {Route, Link, Routes} from "react-router-dom"

import Home from './home/Home';
import Articles from "./articles/Articles";
import Search from "./search/Search";
import Article_view from "./article-view/Article_view";
import Write from "./write/Write";
import Login, {ProtectedRoute, NotProtectedLink, ProtectedLink} from "./login/Login";
import './App.css';
import {useCookies, withCookies} from 'react-cookie';

function App() {

  const [cookies, setCookie, removeCookie] = useCookies(['login']);

  function disconnect(e) {
    e.preventDefault();
    removeCookie('login');
  }

  let a=1;

  function deployer() {
    a++;
    if (a%2!=1) {
      document.querySelector(".nav_link").style.transform="translateX(+300px)";
    } else {
      document.querySelector(".nav_link").style.transform="translateX(0px)";
    }
  }

  return (
    <>
    <nav className="nav_link undeployed">
      <img className="cross" src="/cross.svg" onClick={deployer}/>
      <Link to="/">Home</Link>
      <Link to="/articles">News</Link>
      <Link to="/search">Search</Link>
      <Link to="/write">New Article</Link>

      <NotProtectedLink to="/login">Login</NotProtectedLink>
      <Link to="/logout" onClick={disconnect}>logout</Link>
    </nav>

    <nav className="nav_top">
      <div className="Title">
        <svg className="burger" onClick={deployer} xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/></svg>
        <Link to="/search"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/></svg></Link>
        <h1>COFFEE</h1>
        <img src='/logo.png' alt='Logo' className="logo"></img>
        <h1>BREAK</h1>
        <img src='/avatar.png' alt='avatar' className="avatar"></img>
        {/* <Link to="/">Home</Link>
        <Link to="/articles">News</Link> */}
      </div>
    </nav>


      <Routes>
        <Route exact={true} path="/" element={<Home/>}/>
        <Route exact={true} path="/articles" element={<ProtectedRoute><Articles/></ProtectedRoute>}/>
        <Route exact={true} path="/login" element={<Login/>}/>
        <Route exact={true} path="/search" element={<Search/>}/>
        <Route exact={true} path="/article_view/:id" element={<Article_view/>}/>
        <Route exact={true} path="/write" element={<Write/>}/>
        <Route path="*" element={() => <p>Page Not Found</p>} />
      </Routes>
    </>
);
}

export default App;
