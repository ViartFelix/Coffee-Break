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
        return <p className="alc"><button id="disconnect" onClick={disconnect}>disconnect</button></p>;
    }
    return <FormLogin onSignin={onSignin} onSignup={onSignup} usernameRef={usernameRef} passwordRef={passwordRef}/>
}


export default function Login() {
  return (<>


          <div class="row">
              <div class="col-md-6 mx-auto p-0">
                  <div class="card">
                      <div class="login-box">
                          <div className='imgLogin'>
                            <Link className="back" to="/Home"><img className='backImg' src='./middle.png'/></Link>
                          </div>
                          <div class="login-snip"> <input id="tab-1" type="radio" name="tab" class="sign-in" checked/><label for="tab-1" class="tab">Login</label> <input id="tab-2" type="radio" name="tab" class="sign-up"/><label for="tab-2" class="tab">Sign Up</label>
                              <div class="login-space">
                                  <div class="login">
                                      <div class="group"> <br></br> <input id="user" type="text" class="input" placeholder="Enter your username"/> </div>
                                      <div class="group"> <input id="pass" type="password" class="input" data-type="password" placeholder="Enter your password"/> </div>
                                      <div class="group"> <input id="check" type="checkbox" class="check" checked/> <label for="check"><span class="icon"></span> Keep me Signed in</label> </div>
                                      <div class="group"> <input type="submit" class="button" value="Sign In"/> </div>
                                      <div class="hr"></div>
                                      <div class="foot"> <a href="#">Forgot Password?</a> </div>
                                      <div class="hr"> </div>
                                      
                                  </div>
                                  <div class="sign-up-form">
                                      <div class="group"> <br></br> <input id="user" type="text" class="input" placeholder="Create your Username"/> </div>
                                      <div class="group">  <input id="pass" type="password" class="input" data-type="password" placeholder="Create your password"/> </div>
                                      <div class="group">  <input id="pass" type="password" class="input" data-type="password" placeholder="Repeat your password"/> </div>
                                      <div class="group">  <input id="pass" type="text" class="input" placeholder="Enter your email address"/> </div>
                                      <div class="group">  <input type="submit" class="button" value="Sign Up"/> </div>
                                      <div class="hr"></div>
                                      <div class="foot"> <label for="tab-1">Already Member?</label> </div>
                                      

                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
  </>);
}
