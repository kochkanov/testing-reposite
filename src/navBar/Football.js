import React from 'react'
import  imageS from '../assets/soccer.jpg';
import classes from './Football.module.css'
import { Card } from './Card';



export const Football = () => {
  return (
        <div className={classes.foot}>
       <Card >
     
            <h3>Football</h3>
        <img src={imageS}/>
       
       
    </Card>
      </div>
   
  )
}
