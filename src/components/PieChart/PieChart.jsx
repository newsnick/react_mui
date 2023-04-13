import React from 'react'
import { Chart } from 'react-google-charts'
import styles from '../../styles/PieChart/PieChart.module.scss'

const data = [
  ['Chrome', 'Hours per Day'],
  ['Edge', 11],
  ['Firefox', 13],
  ['Safari', 15],
  ['Opera', 16],
  ['Safari', 20],
  ['Other', 15],
]

const options = {
  title: 'My Daily Activities',
  titleTextStyle: {
    paddingTop: '-10px',
    color: 'grey',
    fontSize: '14',
  },
}

const PieChart = () => (
  <Chart
    className={styles.piechart}
    chartType="AreaChart"
    data={data}
    options={options}
    width={'500px'}
    height={'406px'}
  />
)

export default PieChart
