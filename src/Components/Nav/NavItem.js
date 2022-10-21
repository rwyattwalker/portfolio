import React from 'react'

function NavItem({url, fontAwesomeIcon}) {
  return (
    <a href={url} rel="noreferrer" target="_blank"><i className={`${fontAwesomeIcon} p-2 nav-icon`}></i></a>
  )
}

export default NavItem