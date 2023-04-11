import React from 'react'
import { Radio } from 'antd'
import styles from '../../styles/SelectPeriod/SelectPeriod.module.scss'

const SelectPeriod: React.FC = () => (
  <>
    <div className={styles.select}>
      <p>Traffic Summary</p>
      <Radio.Group defaultValue="a" buttonStyle="solid">
        <Radio.Button value="a">Day</Radio.Button>
        <Radio.Button value="b">Week</Radio.Button>
        <Radio.Button value="c">Month</Radio.Button>
      </Radio.Group>
    </div>

    {/* <Radio.Group defaultValue="c" buttonStyle="solid" style={{ marginTop: 16 }}>
      <Radio.Button value="a">Day</Radio.Button>
      <Radio.Button value="b">Week</Radio.Button>
      <Radio.Button value="c">Month</Radio.Button>
    </Radio.Group> */}
  </>
)

export default SelectPeriod
