import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStore } from '../../redux/store/store'
import { fetchOrders } from '../../redux/order/order'
import './home.css'
import ChartsComp from './ChartsComp'
import MetricDetails from '../chart/MetricDetails'
import StoreMetDetails from '../chart/StoreMetDetails'

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
            <div style={{ width: '100%', height: '100vh' }}>
              <StoreMetDetails />

              <div style={{ height: '40%' }}>
                <ChartsComp />
              </div>

              <MetricDetails />
            </div>)
      }

    </div>
  )
}

export default Home