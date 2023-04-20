import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginSuccess } from '../../redux/user/user'
import { FaStore, FaCheck, FaChartBar } from 'react-icons/fa'
import { fetchOrders } from '../../redux/order/order'
import { getStore } from '../../redux/store/store'

const Nav = () => {
  const { currentUser } = useSelector((state) => state.user)

  const dispatch = useDispatch()
  const logout = () => {
    dispatch(loginSuccess(null))
  }

  useEffect(() => {
    dispatch(fetchOrders(currentUser.data.token))
    dispatch(getStore(currentUser.data.token))
    console.log('orders')
  }, [])

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