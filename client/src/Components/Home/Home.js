import React from 'react'
import Navbar from './Navbar'
import banner from '../../assets/banner.jpg'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className='bg-success' style={{height: '400px', width: '100%', opacity: '.6'}}>
        <p className='display-3'>Contact Us, to <br/> Clean Up Your City</p>
      </div>
    </div>
  )
}

export default Home