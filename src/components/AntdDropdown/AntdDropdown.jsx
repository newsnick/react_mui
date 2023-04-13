import React from 'react'
import type { MenuProps } from 'antd'
import { Button, Dropdown } from 'antd'
import styles from '../../styles/AntdDropdown/AntdDropdown.module.scss'

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    ),
  },
]

const AntdDropdown: React.FC = () => (
  <>
    <Dropdown menu={{ items }} placement="bottomLeft" arrow>
      <Button className={styles.dropdown}>bottomLeft</Button>
    </Dropdown>
  </>
)

export default AntdDropdown
