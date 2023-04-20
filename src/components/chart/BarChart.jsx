import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJs } from 'chart.js/auto'
/* eslint-disable */
const BarChart = ({ chartData, options }) => {
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <Bar data={chartData} options={options} />
        </div>
    )
}

export default BarChart