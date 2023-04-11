/* import React from 'react'
import { Chart } from 'react-google-charts'
import styles from '../../styles/DonutChart/DonutChart.module.scss'

const data = [
  ['Task', 'Hours per Day'],
  ['Direct', 112332],
  ['Search Engines', 342334],
  ['Referrals', 432334],
  ['Internal', 123221],
  ['Other', 133432],
]

const options = {
  title: 'Traffic Sources',
  titleTextStyle: {
    color: '#333',
  },
  legend: {
    textStyle: {
      whiteSpace: 'nowrap',
    },
  },
  pieHole: 0.9,
  is3D: true,
}

const DonutChart = () => {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  )
}

export default DonutChart
 */

import React from 'react'
import { Chart } from 'react-google-charts'
import styles from '../../styles/DonutChart/DonutChart.module.scss'

const data = [
  ['Task', 'Hours per Day'],
  ['Direct', 112332],
  ['Search Engines', 342334],
  ['Referrals', 432334],
  ['Internal', 123221],
  ['Other', 133432],
]

const options = {
  title: 'Traffic Sources',
  titleTextStyle: {
    color: '#333',
  },
  legend: {
    position: 'bottom',
    alignment: 'start',
    textStyle: {
      whiteSpace: 'normal',
    },
  },
  pieHole: 0.9,
  is3D: true,
}

const DonutChart = () => {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  )
}

export default DonutChart
