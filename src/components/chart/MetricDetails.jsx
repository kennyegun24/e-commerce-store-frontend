import React from 'react'
import { FaHashtag } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const MetricDetails = () => {
    const { userStore } = useSelector(state => state.user)
    const { total } = useSelector(state => state.order)
    return (
        <div style={{ margin: 'auto', gap: '1.5rem', width: '100%', height: '25%', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <aside className='storeMetCards'>
                <div className='storeMetCardTitle'>
                    <FaHashtag className='storeMetCardIcon' />
                    <h2>Sold Quantities</h2>
                </div>
                <p>{total && total} </p>
                <p>You have made <strong>{total && total}</strong> sales so far</p>
            </aside>

            <aside className='storeMetCards'>
                <div className='storeMetCardTitle'>
                    <FaHashtag className='storeMetCardIcon' />
                    <h2>Amount Sold ($)</h2>
                </div>

                <p>${userStore.store && userStore.store.total_sold} sold</p>
                <p><strong>{total && total}</strong> sales generated <strong>${userStore.store && userStore.store.total_sold}</strong> so far</p>
            </aside>

            <aside className='storeMetCards'>
                <div className='storeMetCardTitle'>
                    <FaHashtag className='storeMetCardIcon' />
                    <h2>No. of Products</h2>
                </div>
                <p>{userStore.store && userStore.store.total_products} Units</p>
                <p>You have <strong>{userStore.store && userStore.store.total_products}</strong> products</p>
            </aside>
        </div>
    )
}

export default MetricDetails