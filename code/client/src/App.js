import {Route, Link, Routes} from "react-router-dom"
import Home from "./home/Home";
import Articles from "./articles/Articles";
import Login, {ProtectedRoute, NotProtectedLink, ProtectedLink} from "./login/Login";
import './App.css';
import {useCookies, withCookies} from 'react-cookie';

function App() {

  const [cookies, setCookie, removeCookie] = useCookies(['login']);

  function disconnect(e) {
    e.preventDefault()
      removeCookie('login');
  }

  return (
    <>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/articles">News</Link>

      <NotProtectedLink to="/login">Login</NotProtectedLink>
      <Link to="/" onClick={disconnect}>logout</Link>

    </nav>

      <Routes>
        <Route exact={true} path="/" element={<Home/>}/>
        <Route exact={true} path="/articles" element={<ProtectedRoute><Articles/></ProtectedRoute>}/>
        <Route exact={true} path="/login" element={<Login/>}/>
        <Route path="*" element={() => <p>Page Not Found</p>} />
      </Routes>
    </>
);
}

export default App;
