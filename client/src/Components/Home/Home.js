import React from 'react'
import Navbar from './Navbar'
import banner from '../../assets/banner.jpg'
import Card from './Card'

import image from '../../images/image 1.png'

import css from './Home.module.css'

const Home = () => {
  return (
    <div>
      <Navbar/>
     
      <div className={css.main} >
       <div className={css.left_home1} style={{ height: '100%', width: '100%',padding:"7vh"}}>
<h1 
className={css.savewaste}
style={{fontFamily: 'Mouse Memoirs',fontSize:"150px" ,paddingTop:"60px",lineHeight:"120px",color:"green  "}}
>Save The <br/> Waste </h1>
<h5 style={{fontFamily: 'Mouse Memoirs',fontSize:"30px" ,paddingTop:"40px",lineHeight:"30px",color: "#000000"}}>Hassle free door-to-door pickup <br/>Service
</h5>
<button type="button" className={css.buttonsave}
 style={{width:"30%",borderRadius:"45px",color:"black",backgroundColor:"#D4FDC5"}} class="btn btn-success p-6 mt-50">Get Started</button>

       </div>
       <div className={css.right_home1} style={{fontWeight:"bold", height: '100%', width: '100%'}}>
       <img className={css.img} src={image}/>
       </div>
      </div>
      <div className={css.cards} >
      <Card />
      </div>
    </div>
  )
}

export default Home