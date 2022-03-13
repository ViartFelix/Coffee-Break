
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./login.css";
import {Route, Link, Routes} from "react-router-dom"


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
