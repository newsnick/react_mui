import React from 'react'
import { Chart } from 'react-google-charts'
import styles from '../../styles/PieChart/PieChart.module.scss'
import { pieChartData, pieChartOptions } from '../../utils.js'

const PieChart = () => (
  <Chart
    className={styles.piechart}
    chartType="AreaChart"
    data={pieChartData}
    options={pieChartOptions}
    width={'500px'}
    height={'406px'}
  />
)

export default PieChart
