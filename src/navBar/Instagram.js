import React from 'react'
import imageIn from '../assets/instagram.jpg'
import { Card } from './Card'
import classes from './Instagram.module.css'
export const Instagram = () => {
  return (
      <div className={classes.insta}>
           <Card >
        <h3>Instagram</h3>
        <img src={imageIn}/>
    </Card> 
      </div>
  
  )
}
