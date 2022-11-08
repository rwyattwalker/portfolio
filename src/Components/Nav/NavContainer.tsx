import React from 'react'
import Toggle from '../../ToggleTheme'
import NavItem from './NavItem'
// import NavSwitch from './NavSwitch'

function NavContainer():JSX.Element {
  return (
    <nav className="navbar bg-[#111] flex justify-end h-12">
      <NavItem url={'https://www.linkedin.com/in/wyatt-walker-aa182b138'} fontAwesomeIcon={'fab fa-linkedin-in'}/>
      <NavItem url={'https://www.facebook.com/wyatt.walker.50'} fontAwesomeIcon={'fab fa-facebook-f'}/>
      <NavItem url={'https://www.linkedin.com/in/wyatt-walker-aa182b138'} fontAwesomeIcon={'fab fa-github'}/>
      <Toggle />
    </nav>
  )
}

export default NavContainer
