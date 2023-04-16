import React from 'react'
import { Button, Dropdown } from 'antd'
import styles from '../../styles/AntdDropdown/AntdDropdown.module.scss'
import { items } from '../../utils.js'

const AntdDropdown: React.FC = () => (
  <>
    <Dropdown menu={{ items }} placement="bottomLeft" arrow>
      <Button className={styles.dropdown}>bottomLeft</Button>
    </Dropdown>
  </>
)

export default AntdDropdown
