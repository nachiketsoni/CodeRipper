import React from 'react'
import css from './Register.module.css';
const Register = () => {
  return (
    <div className='d-flex align-items-center justify-content-center' style={{height: '100vh',}}>
        <div id={`${css.box}`} className="d-flex align-items-center justify-content-center" >
            <div id={`${css.formBox}`} >
                <div id={`${css.profile_circle}`}/>
                <form className='position-absolute bottom-0 text-center' action="">
                    <input placeholder='Username' className={`mt-3 ${css.btnType}`} type="text" />
                    <input placeholder='Password' className={`mt-3 ${css.btnType}`} type="text" />
                    <button className={`mt-3 mb-3 ${css.btnType}`} type='submit'>Sign Up</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register