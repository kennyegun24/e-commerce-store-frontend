import React from 'react'
import img from '../../assets/vic.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { loginSuccess } from '../../redux/user/user'

const Nav = () => {
  const { userStore } = useSelector(state => state.user)
  // const { products } = useSelector(state => state.store)

  const dispatch = useDispatch()
  const logout = () => {
    dispatch(loginSuccess(null))
  }

  return (
    <>
      <nav className='mainNavHeader'>
        <div className='mainNavDiv'>
          <img className='navStoreImage' src={img} alt="" />
          <div>
            <p>{userStore.store && userStore.store.store_name}</p>
            <p>No. Prod.: {userStore.store && userStore.store.total_products}</p>
            <button onClick={() => logout()}>Logout</button>
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