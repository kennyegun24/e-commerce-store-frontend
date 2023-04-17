import React from 'react'
import { useSelector } from 'react-redux'
import img from '../../assets/vic.jpg'
const Table = () => {
    const { products } = useSelector(state => state.store)
    return (
        <div>
            <table>
                <tr className='tr'>
                    <th>Product name</th>
                    <th>Product price</th>
                    <th>Image</th>
                    <th>Items left</th>
                </tr>

                {products.map((prod) => (
                    <tr className='trD' key={prod.id}>
                        <td>{prod.name}</td>
                        <td>{prod.price}</td>
                        <img className='prodImage' src={prod.image} />
                        <td>{prod.in_stock}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default Table