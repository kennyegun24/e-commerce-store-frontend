import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { loginSuccess } from '../../redux/user/user'
// import axios from 'axios'
import { getStore } from '../../redux/store/store'
import img from '../../assets/vic.jpg'
import './home.css'

const Home = () => {
  const { currentUser } = useSelector(state => state.user)
  const { products, status } = useSelector(state => state.store)
  // const [products, setProducts] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getStore(currentUser.data.token))
  }, [])
  return (
    <div className='homeDiv'>
      {
        status === 'Pending' ? 'hey'
          :
          (
            <div className='homeTableDiv'>

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
                    <img className='prodImage' src={img} />
                    <td>7</td>
                  </tr>
                ))}
              </table>

            </div>)
      }

      <section className='orderSection'>
        <p className='orderTxt'>
          Orders
        </p>
        <div>

          <div>
            <aside className='asideImg'>
              <img src={img} alt="" />
            </aside>
            <aside className='asideDetails'>
              <div>
                <p>Kenny Elias</p>
                <p>Block N18, Flat 3, Abesan Estate, Ipaja</p>
                <p>+234 802 546 4789</p>
              </div>

              <div>
                <p>Samsung Galaxy Fold</p>
                <p>Red</p>
                <p>2 pieces</p>
              </div>
            </aside>
          </div>
          <div>
            <aside className='asideImg'>
              <img src={img} alt="" />
            </aside>
            <aside className='asideDetails'>
              <div>
                <p>Kenny Elias</p>
                <p>Block N18, Flat 3, Abesan Estate, Ipaja</p>
                <p>+234 802 546 4789</p>
              </div>

              <div>
                <p>Samsung Galaxy Fold</p>
                <p>Red</p>
                <p>2 pieces</p>
              </div>
            </aside>
          </div>
          <div>
            <aside className='asideImg'>
              <img src={img} alt="" />
            </aside>
            <aside className='asideDetails'>
              <div>
                <p>Kenny Elias</p>
                <p>Block N18, Flat 3, Abesan Estate, Ipaja</p>
                <p>+234 802 546 4789</p>
              </div>

              <div>
                <p>Samsung Galaxy Fold</p>
                <p>Red</p>
                <p>2 pieces</p>
              </div>
            </aside>
          </div>
          <div>
            <aside className='asideImg'>
              <img src={img} alt="" />
            </aside>
            <aside className='asideDetails'>
              <div>
                <p>Kenny Elias</p>
                <p>Block N18, Flat 3, Abesan Estate, Ipaja</p>
                <p>+234 802 546 4789</p>
              </div>

              <div>
                <p>Samsung Galaxy Fold</p>
                <p>Red</p>
                <p>2 pieces</p>
              </div>
            </aside>
          </div>
          <div>
            <aside className='asideImg'>
              <img src={img} alt="" />
            </aside>
            <aside className='asideDetails'>
              <div>
                <p>Kenny Elias</p>
                <p>Block N18, Flat 3, Abesan Estate, Ipaja</p>
                <p>+234 802 546 4789</p>
              </div>

              <div>
                <p>Samsung Galaxy Fold</p>
                <p>Red</p>
                <p>2 pieces</p>
              </div>
            </aside>
          </div>
          <div>
            <aside className='asideImg'>
              <img src={img} alt="" />
            </aside>
            <aside className='asideDetails'>
              <div>
                <p>Kenny Elias</p>
                <p>Block N18, Flat 3, Abesan Estate, Ipaja</p>
                <p>+234 802 546 4789</p>
              </div>

              <div>
                <p>Samsung Galaxy Fold</p>
                <p>Red</p>
                <p>2 pieces</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home