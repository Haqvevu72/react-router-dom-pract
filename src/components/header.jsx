import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/aboutus">AboutUs</NavLink>
        <NavLink to="/contactus">Home</NavLink>
    </div>
  )
}

export default Header
