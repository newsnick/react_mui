import React from 'react'
import { Table } from 'antd'
import { tableData, columns } from '../../utils.js'
import styles from '../../styles/TableData/TableData.module.scss'

const TableData: React.FC = () => (
  <Table
    className={styles.table}
    columns={columns}
    dataSource={tableData}
    bordered
    title={() => <h1 className={styles.header}>Header</h1>}
    footer={() => 'Footer'}
  />
)

export default TableData
