import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJs } from 'chart.js/auto'
/* eslint-disable */
const BarChart = ({ chartData }) => {
    return (
        <Bar style={{ height: '100%' }} data={chartData} />
    )
}

export default BarChart