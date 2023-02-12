import React, { useEffect, useState } from 'react'
import css from './Register.module.css';
import { Link, useNavigate } from 'react-router-dom'
import formlogo from '../../assets/login_illustration.png'
import { useDispatch, useSelector } from 'react-redux';
import { loadUserAsync, loginAsync, signUpAsync } from '../../Store/UserSlice/Userslice';
import axios from '../../AxiosConfig/axios'

const Register = () => {
  const [ state , setState ] =  useState(true);
  const { user, isAuthenticated, error } = useSelector((state) => state.user);
  const Navigate = useNavigate();
  const [dets, setdets] = useState({
    email: '',
    password: '',
    contact :'',
    name: ''
  })
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserAsync());
    if(isAuthenticated) Navigate('/');
}, [isAuthenticated]);

  console.log(isAuthenticated)

  const toggle = () =>{
    setState(!state)
  }

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(loginAsync(dets));
  }

  const registerHandler = (e) => {
    e.preventDefault();
    dispatch(signUpAsync(dets));
  }

  const changeHandler = (e) => {
    setdets({...dets, [e.target.name]: e.target.value});
  }

  return (
    <div className={`${css.ctn}`}>
        <div className={`${css.overlay} d-flex align-items-center justify-content-center`} >
          <div id={`${css.box}`} className="d-flex align-items-center justify-content-center" >
            {(state)?<div id={`${css.formBox}`} >
                  {/* <div id={`${css.profile_circle}`}/> */}
                  <form onSubmit={submitHandler} className=' text-center'>
                      <img className={` ${css.img}`} src={formlogo} alt="" />
                      <h3 className={`text-center ${css.heading}`} >Sign In</h3>
                      <input onChange={changeHandler} name='email' placeholder='Email' className={`mb-2 ${css.btnType}`} type="email" />
                      <input onChange={changeHandler} name='password' placeholder='Password' className={`mb-2 ${css.btnType}`} type="password" />
                      <button className={`mb-2 ${css.btnType}`} type='submit'>Sign In</button>
                      <br></br>
                      <h3 onClick={toggle} className={`mb-2 ${css.link} fs-6`} >Do Not Have Account ? Register Here</h3>
                  </form>
              </div>:<div id={`${css.formBox}`} >
                  {/* <div id={`${css.profile_c ircle}`}/> */}
                  <form onSubmit={registerHandler} className='text-center' action="">
                  <img className={` ${css.img}`} style={{marginTop: "-8vmax"}} src={formlogo} alt="" />

                <h3 className={`text-center ${css.heading}`} >Sign Up</h3>
                      <input onChange={changeHandler} name='name' placeholder='name' className={`mb-2 ${css.btnType}`} type="text" />
                      <input onChange={changeHandler} name='email' placeholder='email' className={`mb-2 ${css.btnType}`} type="email" />
                      <input onChange={changeHandler} required name='contact' placeholder='contact' className={`mb-2 ${css.btnType}`} type="number" />
                      <input onChange={changeHandler} name='password' placeholder='Password' className={`mb-2 ${css.btnType}`} type="password" />
                      <button className={`mb-3 ${css.btnType}`} type='submit'>Sign Up</button>
                      <br></br>
                      <h3  onClick={toggle} className={`mt-1 ${css.link} fs-6`} >Already Have an Account ? Login Here</h3>
                  </form>
              </div>}

          </div>
        </div>
    </div>
  )
}

export default Register