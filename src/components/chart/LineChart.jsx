import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJs } from 'chart.js/auto'
/* eslint-disable */
const LineChart = ({ chartData, options }) => {
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <Line data={chartData} options={options} />
        </div>
    )
}

export default LineChart