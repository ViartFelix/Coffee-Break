import {Route, Link, Routes} from "react-router-dom"
import Home from "./home/Home";
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

  return (
    <>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/articles">News</Link>
      <Link to="/search">Search</Link>
      <Link to="/write">New Article</Link>

      <NotProtectedLink to="/login">Login</NotProtectedLink>
      <Link to="/logout" onClick={disconnect}>logout</Link>

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
