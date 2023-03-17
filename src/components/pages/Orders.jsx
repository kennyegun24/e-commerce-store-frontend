import React, { useEffect } from 'react'
import img from '../../assets/vic.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { getStore } from '../../redux/store/store'
import { fetchOrders } from '../../redux/order/order'

const Orders = () => {
    const { orders } = useSelector((state) => state.order)
    const { currentUser } = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchOrders(currentUser.data.token))
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