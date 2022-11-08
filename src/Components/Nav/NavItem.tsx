import React from 'react'

interface Props{
    url:string,
    fontAwesomeIcon:any
}
function NavItem({url, fontAwesomeIcon}:Props) {
  return (
    <a href={url} rel="noreferrer" target="_blank"><i className={`${fontAwesomeIcon} p-2 mt-2 text-[#fff]`}></i></a>
  )
}

export default NavItem
