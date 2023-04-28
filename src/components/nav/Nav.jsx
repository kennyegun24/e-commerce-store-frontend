import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginSuccess } from '../../redux/user/user'
import { FaStore, FaCheck, FaChartBar, FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { fetchOrders } from '../../redux/order/order'
import { getStore } from '../../redux/store/store'

const Nav = () => {
  const { currentUser } = useSelector((state) => state.user)
  const [toggle, setToggle] = useState(false)

  const dispatch = useDispatch()
  const logout = () => {
    dispatch(loginSuccess(null))
  }

  useEffect(() => {
    dispatch(fetchOrders(currentUser.data.token))
    dispatch(getStore(currentUser.data.token))
  }, [])

  const toggleOn = () => {
    if (!toggle) {
      setToggle(true)
    } else setToggle(false)
  }

  const hideMenu = () => {
    setToggle(false)
  }

  return (
    <>
      <div className='bar'>
        {!toggle && <FaBars onClick={toggleOn} />}
        {toggle && <AiOutlineClose onClick={toggleOn} />}
      </div>
      <nav className={`mainNavHeader ${toggle ? '' : 'hide'}`}>
        <div className='navOptions'>
          <ul className="navUls">
            <div>
              <img className='navImage' src={currentUser.store.image} alt="" />
            </div>

            <NavLink onClick={hideMenu} to='/' className='navLink'><FaChartBar /> Statistics</NavLink>
            <NavLink onClick={hideMenu} className='navLink' to='/products'><FaStore /> Products</NavLink>
            <NavLink onClick={hideMenu} className='navLink' to='/orders'><FaCheck /> Orders</NavLink>
            <button className='logoutButton' onClick={() => logout()}>Logout</button>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav