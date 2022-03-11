import React from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';
import {useCookies, withCookies} from 'react-cookie';
import "./login.css";

function FormLogin(props) {
    return (<>
      <form onSubmit={props.onSignin} className="row">
          <div className="col-md-6 mx-auto p-0">
              <div className="card__true">
                  <div className="login-box">
                      <div className='imgLogin'>
                        <Link className="back" to="/"><img className='backImg' src='./middle.png'/></Link>
                      </div>
                      <div className="login-snip"> <input id="tab-1" type="radio" name="tab" className="sign-in"/><label htmlFor="tab-1" className="tab">Login</label> <input id="tab-2" type="radio" name="tab" className="sign-up"/><label htmlFor="tab-2" className="tab">Sign Up</label>
                          <div className="login-space">
                              <div className="login">
                                  <div className="group"> <br></br> <input id="username" type="text" className="input" placeholder="Enter your username" autoComplete="off" ref={props.usernameRef}/> </div>
                                  <div className="group"> <input id="password" type="password" className="input" data-type="password" autoComplete="off" ref={props.passwordRef} placeholder="Enter your password"/> </div>
                                  <div className="group"> <input id="check" type="checkbox" className="check" checked/> <label htmlFor="check"><span className="icon"></span> Keep me Signed in</label> </div>
                                  <div className="group"> <button type="submit" className="button" name="login" value="Sign In">Sign In</button> </div>
                                  <div className="hr"></div>
                                  <div className="foot"> <a href="#">Forgot Password?</a> </div>
                                  <div className="hr"> </div>

                              </div>
                              <div className="sign-up-form">
                                  <div className="group"> <br></br> <input id="user" type="text" className="input" placeholder="Create your Username"/> </div>
                                  <div className="group">  <input id="pass" type="password" className="input" data-type="password" placeholder="Create your password"/> </div>
                                  <div className="group">  <input id="pass" type="password" className="input" data-type="password" placeholder="Repeat your password"/> </div>
                                  <div className="group">  <input id="pass" type="text" className="input" placeholder="Enter your email address"/> </div>
                                  <div className="group">  <button type="submit" className="button" name="signup" value="Sign Up" onClick={props.onSignup}>Sign up</button> </div>
                                  <div className="hr"></div>
                                  <div className="foot"> <label htmlFor="tab-1">Already Member?</label> </div>


                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </form>
    </>);
}

export default function Login() {
    const [cookies, setCookie, removeCookie] = useCookies(['login']);
    const usernameRef = React.createRef();
    const passwordRef = React.createRef();

    function disconnect() {
        removeCookie('login');
    }

    async function onSignup() {
        const user = {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        };
        try {
            const p = (await axios.post('http://localhost:8000/signup', user));
            if (p.status === 200) {
                user.token = p.data.token;
                setCookie('login', user, '/');
            }
        } catch (err) {
            console.error(err)
        }
    }

    async function onSignin(e) {
        e.preventDefault();

        console.log('ùokzqdpokqzkpd,');
        const user = {
            username: e.target.username.value,
            password: e.target.password.value
        };
        try {
            const p = (await axios.post('http://localhost:8000/signin', user));
            if (p.status === 200) {
                user.token = p.data.token;
                setCookie('login', user, '/login');
            }
        } catch (err) {
            console.error(err)
        }
    }

    if (cookies.login && cookies.login.token) {
        return <button id="disconnect" onClick={disconnect}>disconnect</button>;
    }
    return <FormLogin onSignin={onSignin} onSignup={onSignup} usernameRef={usernameRef} passwordRef={passwordRef}/>
}

function LocalProtectedRoute({children, ...rest}) {
    if (rest.allCookies && rest.allCookies.login && rest.allCookies.login.username && rest.allCookies.login.token) {
        return (
            React.cloneElement(children, {username: rest.allCookies.login.username, token: rest.allCookies.login.token})
        )
    }
    return <></>
}


/**
 * @return {null}
 */
function LocalProtectedLink({...rest}) {
    if (rest.allCookies && rest.allCookies.login && rest.allCookies.login.username && rest.allCookies.login.token) {
        return <Link className={rest.className} to={rest.to}>{rest.children}</Link>
    } else {
        return null;
    }
}


function NotLocalProtectedLink({...rest}) {
    if (!(rest.allCookies && rest.allCookies.login && rest.allCookies.login.username && rest.allCookies.login.token)) {
        return <Link className={rest.className} to={rest.to} onClick={e=> rest.onClick(e)}>{rest.children}</Link>
    } else {
        return null;
    }
}

const ProtectedRoute = withCookies(LocalProtectedRoute);
const ProtectedLink = withCookies(LocalProtectedLink);
const NotProtectedLink = withCookies(NotLocalProtectedLink);

export {ProtectedRoute, ProtectedLink, NotProtectedLink};
