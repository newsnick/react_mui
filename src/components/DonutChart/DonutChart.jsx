import React from 'react'
import { Chart } from 'react-google-charts'
import { dataDonutChart } from '../../utils.js'
import { options } from '../../utils.js'
import styles from '../../styles/DonutChart/DonutChart.module.scss'

const DonutChart = () => {
  return (
    <Chart
      className={styles.donutchart}
      chartType="PieChart"
      width="100%"
      height="382px"
      data={dataDonutChart}
      options={options}
    />
  )
}

export default DonutChart
