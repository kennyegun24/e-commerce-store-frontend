import React, { useEffect, useRef, useState } from 'react'
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
            exists.amount += curr.amount
        } else {
            acc.push({ created_at: monthName, value: newDate, quantity: curr.quantity, amount: curr.amount });
        }

        acc.sort((a, b) => a.value - b.value)
        return acc
    }, [])

    const [userData, setUserData] = useState({
        labels: newArray.map((data) => data.created_at),
        datasets: [{
            label: "Sold goods",
            data: newArray.map((data) => data.quantity),
            backgroundColor: ['rgba(247, 205, 18, 0.795)', 'rgba(50, 93, 236, 0.6)', 'rgba(143, 142, 140, 0.685)'],
            borderWidth: 1,
            fill: true,
            borderColor: '#111',
            tension: 0.5,
        }, {
            label: "Amount Sold",
            data: newArray.map((data) => data.amount),
            backgroundColor: ['rgba(13, 11, 119, 0.767)', 'rgba(248, 23, 23, 0.767)', 'rgba(107, 107, 107, 0.767)', '#fff'],
            borderWidth: 1,
            fill: true,
            borderColor: '#111',
            tension: 0.5
        }]

    })

    const options = {
        responsive: true,
        maintainAspectRatio: false,
    }

    const prevArrayRef = useRef(newArray)

    useEffect(() => {
        if (JSON.stringify(newArray) !== JSON.stringify(prevArrayRef.current)) {
            setUserData({
                labels: newArray.map((data) => data.created_at),
                datasets: [{
                    label: "Sold goods",
                    data: newArray.map((data) => data.quantity),
                    borderWidth: 1,
                    borderColor: '#111',
                }, {
                    label: "Amount Sold",
                    data: newArray.map((data) => data.amount),
                    borderWidth: 1,
                    borderColor: '#111',
                }]
            })
            prevArrayRef.current = newArray
        }
    }, [newArray])

    return (
        <div className='chartDiv'>
            <div>
                <BarChart chartData={userData} options={options} />
            </div>

            <div>
                <LineChart chartData={userData} options={options} />
            </div>
        </div>
    )
}

export default ChartsComp;