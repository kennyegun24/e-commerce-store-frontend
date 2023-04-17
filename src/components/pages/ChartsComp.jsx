import React, { useEffect, useState } from 'react'
import BarChart from '../chart/BarChart'
import LineChart from '../chart/LineChart'
import { useSelector } from 'react-redux'
/* eslint-disable */
const ChartsComp = () => {
    const { orders } = useSelector((state) => state.order)

    const formattedDates = orders.map((item) => {
        const date = new Date(item.created_at);
        const formattedDate = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });

        return {
            ...item,
            created_at: formattedDate
        };
    });

    const newArray = formattedDates.reduce((acc, curr) => {
        const date = new Date(curr.created_at)
        const monthName = date.toLocaleString('default', { month: 'long' }); // get month name
        const newDate = date.getMonth()

        const exists = acc.find((item) => item.created_at === monthName)

        if (exists) {
            exists.quantity += curr.quantity;
        } else {
            acc.push({ created_at: monthName, value: newDate, quantity: curr.quantity });
        }

        acc.sort((a, b) => a.value - b.value)
        return acc
    }, [formattedDates])

    const [userData, setUserData] = useState({
        labels: newArray.length > 0 && newArray.map((data) => data.created_at),
        datasets: [{
            label: "Sold goods",
            data: newArray.map((data) => data.quantity),
            backgroundColor: ['orange', 'blue', 'grey'],
            borderWidth: 1,
            borderColor: '#111',
        }]

    })
    console.log(userData.labels)

    return (
        <div className='chartDiv'>
            <BarChart chartData={userData} />
            <LineChart chartData={userData} />
        </div>
    )
}

export default ChartsComp;