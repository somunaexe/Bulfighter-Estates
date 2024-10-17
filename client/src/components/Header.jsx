import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { FaSearch, FaUser } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { setLogout } from "../redux/state"

const Header = () => {

  const [menuOpened, setMenuOpened] = useState(false)
  const [dropdownMenu, setDropdownMenu] = useState(false)
  const user = useSelector((state)=>state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const toggleMenu = () => {
    setMenuOpened(!menuOpened)
  }

  return (
    <header className='max-padd-container flexBetween rounded-xl py-4'>
      {/* {LOGO} */}
      <Link to={'/'} className='bold-24'>
        <div>
          {/* //Bulfighter----------------------------- */}
           <span className='text-secondary'>Estates</span>
        </div>
      </Link>
      {/* Searchable */}
      <div className='bg-white ring-1 ring-slate-900/5 rounded-full p-2 px-4 w-44 sm:w-96 flexBetween gap-x-2 relative'>
        <input type="text" placeholder='Search here...'
        className='outline-none border-none w-full bg-white'
        />
        <button className='absolute right-0 h-full w-10 rounded-full bg-secondary text-white flexCenter cursor-pointer'>
          <FaSearch />
        </button>
      </div>
      {/* Dropdown Menu */}
      <div className='flexBetween gap-x-10'>
        <div 
          onClick={()=> setDropdownMenu(!dropdownMenu)}
          className='cursor-pointer relative'
        >
          <div>
            {!user ? (
              <FaUser />
            ) : (
              <img 
                src={`http://localhost:4000/${user.profileImagePath.replace("public", "")}`} 
                alt="" 
                height={47} 
                width={47} 
                className='rounded-full object-cover aspect-square'
              />
            )}
            </div>
            {dropdownMenu && !user && (
              <div className='absolute top-16 right-0 w-40 p-4 rounded-3xl bg-white text-gray-30 medium-14 flex flex-col gap-y-2 shadow-md z-50'>
                <Link to={"/login"}>Login</Link>
                <Link to={"/register"}>Sign Up</Link>
              </div>
            )}
            {dropdownMenu && user && (
              <div className='absolute top-16 right-0 w-40 p-4 rounded-3xl bg-white text-gray-30 medium-14 flex flex-col gap-y-2 shadow-md z-50'>
                <Link to={`/create-listing`}>Add a Property</Link>
                <Link to={`${user._id}/trips`}>Trips</Link>
                <Link to={`${user._id}/wishlist`}>Wish List</Link>
                <Link to={`${user._id}/properties`}>Properties</Link>
                <Link to={`${user._id}/reservations`}>Reservations</Link>
                <Link to={"/login"} onClick={()=>{dispatch(setLogout())}}>Logout</Link>
              </div>
            )}
        </div>
      </div>
    </header>
  )
}

export default Header
