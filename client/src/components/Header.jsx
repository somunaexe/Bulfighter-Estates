import React from 'react'
import { Link } from "react-router-dom"
import { FaSearch, FaUser } from "react-icons/fa"

const Header = () => {
  return (
    <header>
      {/* {LOGO} */}
      <Link to={'/'} className='bold-24'>
      <div>
        Bulfighter  <span>Estates</span>
      </div>
      </Link>
      {/* Searchable */}
      <div>
        <input type="text"
        placeholder='Search here...'
        />
        <button><FaSearch /></button>
      </div>
    </header>
  )
}

export default Header
