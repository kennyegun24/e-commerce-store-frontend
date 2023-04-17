import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStore } from '../../redux/store/store'
import { fetchOrders } from '../../redux/order/order'
import './home.css'
import ChartsComp from './ChartsComp'
import Table from './Table'
import Orders from './Orders'

const Home = () => {
  const { currentUser } = useSelector(state => state.user)
  const { status } = useSelector(state => state.store)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchOrders(currentUser.data.token))
    dispatch(getStore(currentUser.data.token))
  }, [])

  return (
    <div className='homeDiv'>
      {
        status === 'Pending' ? 'hey'
          :
          (
            <div style={{ height: '100%' }}>
              <ChartsComp />
              <div className='flex'>

                <div className='homeTableDiv'>
                  <Table />
                </div>

                <Orders />
              </div>
            </div>)
      }

    </div>
  )
}

export default Home