/* import React from 'react'
import { Col, Row, Statistic } from 'antd'
import CountUp from 'react-countup'

const formatter = (value: number) => <CountUp end={value} separator="," />

const Statistics: React.FC = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Statistic title="Active Users" value={112893} formatter={formatter} />
    </Col>
    <Col span={12}>
      <Statistic
        title="Account Balance (CNY)"
        value={112893}
        precision={2}
        formatter={formatter}
      />
    </Col> 
  </Row>
)

export default Statistics
 */

import { useState } from 'react'
import { Col, Row, Statistic } from 'antd'
import CountUp from 'react-countup'
import styles from '../../styles/Statistics/Statistics.module.scss'

const formatter = (value: number) => <CountUp end={value} separator="," />

interface StatisticsProps {
  item1: string;
  item2: number;
}

const Statistics: React.FC<StatisticsProps> = ({ item1, item2 }) => {
  const [value1, setValue1] = useState(item1)
  const [value2, setValue2] = useState(item2)

  if (!item1 || !item2) {
    return null
  }

  return (
    <Row gutter={16}>
      <Col span={12}>
        <Statistic
          className={styles.title}
          title={value1}
          value={value2}
          formatter={formatter}
        />
      </Col>
    </Row>
  )
}

export default Statistics
