import React from 'react'
import  image from '../assets/cars.jpg';
import { Card } from './Card';
import classes from './Football.module.css'

export const Cars = () => {
  return (
      <div className={classes.foot}>
         <Card>
        <h3>Cars</h3>
        <img src={image}/>
    </Card> 
      </div>
    
  )
}
