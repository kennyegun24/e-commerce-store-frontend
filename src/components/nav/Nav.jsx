import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginSuccess } from '../../redux/user/user'
import { FaStore, FaCheck, FaChartBar } from 'react-icons/fa'

const Nav = () => {
  const { currentUser } = useSelector((state) => state.user)

  const dispatch = useDispatch()
  const logout = () => {
    dispatch(loginSuccess(null))
  }

  return (
    <>
      <nav className='mainNavHeader'>
        <div className='navOptions'>
          <ul>
            <div>
              <img className='navImage' src={currentUser.store.image} alt="" />
            </div>

            <NavLink to='/' className='navLink'><FaChartBar /> Statistics</NavLink>
            <NavLink className='navLink' to='/products'><FaStore /> Products</NavLink>
            <NavLink className='navLink' to='/orders'><FaCheck /> Orders</NavLink>
            <button className='logoutButton' onClick={() => logout()}>Logout</button>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav