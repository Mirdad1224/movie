import React from 'react'
import { Link } from 'react-router-dom'

const NavbarItem = ({link, desc, Icon }) => {
  return (
    <div
        className="flex flex-col items-center justify-center gap-1
       ease-in duration-300 hover:text-yellow-600"
      >
        <Link className="contents" to={link}>
          <Icon />
          <span>{desc}</span>
        </Link>
      </div>
  )
}

export default NavbarItem