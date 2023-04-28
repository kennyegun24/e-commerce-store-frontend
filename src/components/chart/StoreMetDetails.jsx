import React, { useEffect, useState } from 'react'
import { FaStore, FaHashtag } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import './metrics.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const StoreMetDetails = () => {
    const { userStore } = useSelector(state => state.user)
    const { total } = useSelector(state => state.order)
    const { products } = useSelector(state => state.store)

    const [prod, setProd] = useState(0)
    const [prodAmount, setProdAmount] = useState([])
    useEffect(() => {
        if (products.length > 0) {
            setProd(products.map((hey) => hey.in_stock).reduce((a, b) => a + b))
            const mapThrough = products.map((hey) => ({ price: hey.price * hey.in_stock }))
            const convert = mapThrough.map((hey) => parseInt(hey.price, 10))
            setProdAmount(convert.reduce((a, b) => a + b))
        }
    }, [])

    const checkValuePercentage = 100 - ((prodAmount / userStore.store.store_value) * 100)

    return (
        <div className='storeMetMainDiv'>
            <aside className='storeMetCards'>
                <div className='percentDiv' >
                    <CircularProgressbar className='percentage' value={checkValuePercentage} text={`${Math.round(checkValuePercentage)}%`} />
                </div>
                <p>Sold {Math.round(checkValuePercentage)}% of all your products</p>
            </aside>
            <aside className='storeMetCards'>
                <div className='storeMetCardTitle'>
                    <FaHashtag className='storeMetCardIcon' />
                    <h2>No. of prods left</h2>
                </div>
                <p>{prod} </p>
                <p>You have <strong>{prod}</strong> products left</p>
            </aside>

            <aside className='storeMetCards'>
                <div className='storeMetCardTitle'>
                    <h2 >Store Name </h2>
                    <FaStore className='storeMetCardIcon' />
                </div>
                <p><strong>{userStore.store && userStore.store.store_name}</strong></p>
                <p><strong>You have made {total && total}</strong> sales </p>
            </aside>

            <aside className='storeMetCards'>
                <div className='storeMetCardTitle'>
                    <FaHashtag className='storeMetCardIcon' />
                    <h2>of goods left</h2>
                </div>
                <p>Store all time value <strong>${userStore.store.store_value}</strong></p>
                <p><strong>${prodAmount}</strong> worth of products left</p>
            </aside>
        </div>
    )
}

export default StoreMetDetails;