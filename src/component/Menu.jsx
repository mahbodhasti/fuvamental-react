import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Menu = () => {
  return (
    <div>
        <ul>
          <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to='/' >Home</NavLink></li>           
            <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"}  to="/about/10/ariyan" >about</NavLink></li>
            <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/contact" >contact</NavLink></li>
            <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/PersonFaviver" >PersonFaviver</NavLink></li>
        </ul>
    </div>
  )
}
