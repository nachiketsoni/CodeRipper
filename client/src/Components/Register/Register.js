import React, { useState } from 'react'
import css from './Register.module.css';
import { Link } from 'react-router-dom'
import formlogo from '../../assets/login_illustration.png'
const Register = () => {
  const [ state , setState ] =  useState(false)
  const toggle = () =>{
    setState(!state)
  }
  return (
    <div className={`${css.ctn}`}>
        <div className={`${css.overlay} d-flex align-items-center justify-content-center`} >
          <div id={`${css.box}`} className="d-flex align-items-center justify-content-center" >
            {(state)?<div id={`${css.formBox}`} >
                  {/* <div id={`${css.profile_circle}`}/> */}
                  <form className=' text-center' action="">
                      <img className={` ${css.img}`} src={formlogo} alt="" />
                      <h3 className={`text-center ${css.heading}`} >Sign In</h3>
                      <input placeholder='Email' className={`mb-2 ${css.btnType}`} type="email" />
                      <input placeholder='Password' className={`mb-2 ${css.btnType}`} type="password" />
                      <button className={`mb-2 ${css.btnType}`} type='submit'>Sign In</button>
                      <br></br>
                      <h3 onClick={toggle} className={`mb-2 ${css.link} fs-6`} >Do Not Have Account ? Register Here</h3>
                  </form>
              </div>:<div id={`${css.formBox}`} >
                  {/* <div id={`${css.profile_c ircle}`}/> */}
                  <form className='text-center' action="">
                  <img className={` ${css.img}`} style={{marginTop: "-8vmax"}} src={formlogo} alt="" />

                <h3 className={`text-center ${css.heading}`} >Sign Up</h3>
                      <input placeholder='Email' className={`mb-2 ${css.btnType}`} type="email" />
                      <input placeholder='Password' className={`mb-2 ${css.btnType}`} type="password" />

                      <input placeholder='name' className={`mb-2 ${css.btnType}`} type="text" />
                      <input placeholder='contact' className={`mb-2 ${css.btnType}`} type="text" />
                      <button className={`mb-3 ${css.btnType}`} type='submit'>Sign In</button>
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