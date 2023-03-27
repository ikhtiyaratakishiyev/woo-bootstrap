import React from 'react'
import '../style/Hero.scss'
import Vector from '../assets/image/Vector.svg'

export default function Hero() {
  return (
    <main>
  <div className='hero-container'>

       <span >
       <img className='vector'  src={Vector} alt="" />
       </span>
   </div>
    </main>
  
  )
}
