import React from 'react'
import { Link } from 'react-router-dom'
import classes from './NavBar.module.css'



export const NavBar = () => {
  return (
    <div className={classes.nav}>
        <header>
            <ul>
                 <li>
    <Link to='/'>Nature</Link>
        </li>
        <li>
            <Link to='/cars'>Cars</Link>
        </li>
        <li>
            <Link to='/football'>Football</Link>
        </li>
        <li>
            <Link to='instagram'>Instagram</Link>
        </li>
            </ul>
              
        </header>
     
    </div>
  )
}
