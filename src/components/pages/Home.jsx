import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { loginSuccess } from '../../redux/user/user'
// import axios from 'axios'
import { getStore } from '../../redux/store/store'
import img from '../../assets/vic.jpg'
import './home.css'

import ChartsComp from './ChartsComp'
import Table from './Table'
import Orders from './Orders'

const Home = () => {
  const { currentUser } = useSelector(state => state.user)
  const { status } = useSelector(state => state.store)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getStore(currentUser.data.token))
  }, [])

  const date = Date.now()
  const newDate = new Date(date)

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