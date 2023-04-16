import React, { useEffect, useState } from 'react'
import BarChart from '../chart/BarChart'
import LineChart from '../chart/LineChart'
import { newArray } from '../chart/data'
/* eslint-disable */
const ChartsComp = () => {

    const [userData, setUserData] = useState({
        labels: newArray.map((data) => data.date),
        datasets: [{
            label: "Sold goods",
            data: newArray.map((data) => data.amount),
            backgroundColor: ['orange', 'blue', 'grey'],
            borderWidth: 1,
            borderColor: '#111',
        }]
    })

    return (
        <div className='chartDiv'>
            <BarChart chartData={userData} />
            <LineChart chartData={userData} />
        </div>
    )
}

export default ChartsComp;