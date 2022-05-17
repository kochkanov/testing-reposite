import React from 'react'
import image from '../assets/nature.jpg'
import { Card } from './Card';
import classes from './Football.module.css'


export const Nature = () => {
  return (
      <div className={classes.foot}>
          <Card >
        <div>
        <h3>Nature</h3>
   
    <img src={image}/>
    
     </div>
     </Card> 
      </div>
   
  )
}
