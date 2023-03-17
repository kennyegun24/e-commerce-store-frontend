import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginSuccess } from '../../redux/user/user'

const Nav = () => {
  const { userStore } = useSelector(state => state.user)
  const { total } = useSelector(state => state.order)

  const dispatch = useDispatch()
  const logout = () => {
    dispatch(loginSuccess(null))
  }

  return (
    <>
      <nav className='mainNavHeader'>
        <div className='mainNavDiv'>
          <img className='navStoreImage' src={userStore.store.image} alt="" />
          <div>
            <p>{userStore.store && userStore.store.store_name}</p>
            <p>No. Prod: {userStore.store && userStore.store.total_products}</p>
            <p>No. Sales: {total && total}</p>
            <button style={{ background: 'blue', color: '#fff', padding: '0.5rem', border: 'none', fontSize: '1vw' }} onClick={() => logout()}>Logout</button>
          </div>
        </div>

        <div className='navOptions'>
          <ul>
            <li>Products</li>
            <li>Orders</li>
            <li>Statistics</li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav