import React from 'react'

function NavItem({url, fontAwesomeIcon}) {
  return (
    <a href={url} rel="noreferrer" target="_blank"><i className={`${fontAwesomeIcon} p-2 mt-2 text-[#fff]`}></i></a>
  )
}

export default NavItem