/* import { useState } from 'react'
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
          className={styles.box}
          title={value1}
          titleClassName={styles.title}
          value={value2}
          valueStyle={{
            color: 'white',
            paddingLeft: '140px',
            fontFamily: 'Apple-System, Arial, Helvetica',
            fontSize: '35px',
          }}
          formatter={formatter}
        />
      </Col>
    </Row>
  )
}

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
  backgroundImage: string;
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
          className={styles.box}
          title={value1}
          titleClassName={styles.title}
          value={value2}
          valueStyle={{
            color: 'white',
            paddingLeft: '140px',
            fontFamily: 'Apple-System, Arial, Helvetica',
            fontSize: '35px',
          }}
          formatter={formatter}
        />
      </Col>
    </Row>
  )
}

export default Statistics
