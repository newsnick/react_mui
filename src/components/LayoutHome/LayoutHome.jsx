import React from 'react'
import { Layout, theme } from 'antd'
import { ControlTwoTone } from '@ant-design/icons'
import LightDarkTheme from '../LightDarkTheme/LightDarkTheme.jsx'
import ResponsiveAppBar from '../Header/Header'
import ResponsiveStack from '../Stack/Stack'
import StackArray from '../StackArray/StackArray'
import StackVertical from '../StackVertical/StackVertical'
import DatePicker from '../DatePicker/DatePicker'
import AntdDropdown from '../AntdDropdown/AntdDropdown'
import styles from '../../styles/LayoutHome/LayoutHome.module.scss'
import Statistics from '../Statistics/Statistics'
import BarChartComponent from '../BarChartComponent/BarChartComponent'
import SelectPeriod from '../SelectPeriod/SelectPeriod'
import DonutChart from '../DonutChart/DonutChart'
import TableData from '../TableData/TableData'
import PieChart from '../PieChart/PieChart'
import Copyright from '../Copyright/Copyright'
import { colorBgContainer, customTitleStyles, useToken } from '../../utils.js'

const { Header, Content, Footer, Sider } = Layout

const LayoutHome = () => {
  const token = useToken()

  return (
    <Layout>
      <Sider
        style={{ padding: 0, background: colorBgContainer }}
        breakpoint="lg"
        collapsedWidth="0"
        collapsible="true"
        onBreakpoint={(broken) => {
          console.log(broken)
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type)
        }}
      >
        <div className={styles.logo} />
        <LightDarkTheme />
      </Sider>
      <Layout style={{ background: '#f5f8fa' }}>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <ResponsiveAppBar />
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: '#f5f8fa',
            }}
          >
            <StackArray
              item1={[
                <AntdDropdown key="dropdown" className={styles.dropdown} />,
                <DatePicker key="datepicker" className={styles.datepicker} />,
                <ControlTwoTone key="control" className={styles.controlicon} />,
              ]}
            />

            <ResponsiveStack
              className={styles.stack2}
              item1={
                <Statistics
                  key="pageviews"
                  item1={<span style={customTitleStyles}>Page Views</span>}
                  item2="281358"
                />
              }
              item2={
                <Statistics
                  key="visits"
                  className={styles.bgbox2}
                  item1={<span style={customTitleStyles}>Visits</span>}
                  item2="251901"
                />
              }
              item3={
                <Statistics
                  key="uniquevisitors"
                  item1={<span style={customTitleStyles}>Unique Visitors</span>}
                  item2="25135"
                />
              }
            />
            <div className={styles.chartcontainer}>
              <StackVertical
                item1={[
                  <SelectPeriod key="selectperiod" />,
                  <BarChartComponent key="barchart" />,
                ]}
              />
              <StackArray item1={[<DonutChart key="donutchart" />]} />
            </div>
            <div className={styles.chartcontainer}>
              <StackArray item1={[<TableData key="tabledata" />]} />
              <StackArray item1={[<PieChart key="piechart" />]} />
            </div>
          </div>
        </Content>
        <Footer className={styles.footer} style={{ textAlign: 'center' }}>
          <StackArray item1={[<Copyright className={styles.copyright} />]} />
        </Footer>
      </Layout>
    </Layout>
  )
}

export default LayoutHome
