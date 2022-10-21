import React from 'react'
import NavItem from './NavItem'
import NavSwitch from './NavSwitch'
function RenderNav() {
  return (
    <nav class="navbar navbar-expand-sm align-middle justify-content-end">
      <NavItem url={'https://www.linkedin.com/in/wyatt-walker-aa182b138'} fontAwesomeIcon={'fab fa-linkedin-in'}/>
      <NavItem />
      <NavItem />
    </nav>
  )
}

export default RenderNav