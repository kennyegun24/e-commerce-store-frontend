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
        status === 'Pending'
          ?
          (<div style={{ height: '100vh', width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}><p className="rotate"></p><p style={{ fontSize: '1.5vw', fontWeight: '600' }}>Loading...</p></div>)
          :
          (
            <div className='homeMainDiv'>
              <StoreMetDetails />

              <div className='chartCompDiv' >
                <ChartsComp />
              </div>

              <MetricDetails />
            </div>)
      }

    </div>
  )
}

export default Home