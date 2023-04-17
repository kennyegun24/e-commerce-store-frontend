import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Orders = () => {
  const { orders } = useSelector((state) => state.order)

  useEffect(() => {
  }, [])

  return (
    <div className='orderSection'>
      <p className='orderTxt'>
        Orders
      </p>
      <div>
        {orders.map((indOrd, index) => (
          <div key={indOrd.id}>
            {index + 1}

            <aside className='asideImg'>
              <img src={indOrd.image} alt="" />
            </aside>
            <aside className='asideDetails'>
              <div>
                <p>{indOrd.user_name}</p>
                <p>{indOrd.address}</p>
                <p>{indOrd.tel_number}</p>
              </div>

              <div>
                <p>{indOrd.product_name}</p>
                <p>Red</p>
                <p>{indOrd.quantity} pieces</p>
              </div>
            </aside>
          </div>
        ))}
      </div></div>
  )
}

export default Orders