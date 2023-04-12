import React from 'react'
//import { useSelector } from 'react-redux'
import { Layout, Menu, theme } from 'antd'
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  ControlTwoTone,
} from '@ant-design/icons'
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
import { createTheme, ThemeProvider } from '@mui/material/styles'

const { Header, Content, Footer, Sider } = Layout

const LayoutHome = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  const newColorBgContainer = '#fff'

  const customTitleStyles = {
    color: 'white',
    padding: '10px',
    marginLeft: '130px',
  }

  return (
    <Layout>
      <Sider
        style={{ padding: 0, background: newColorBgContainer }}
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
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['6']}
          items={[
            UserOutlined,
            VideoCameraOutlined,
            UploadOutlined,
            UserOutlined,
          ].map((icon, index) => ({
            key: String(index + 1),
            icon: React.createElement(icon),
            label: `nav ${index + 1}`,
          }))}
        />
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
                <AntdDropdown className={styles.dropdown} />,
                <DatePicker className={styles.datepicker} />,
                <ControlTwoTone className={styles.controlicon} />,
              ]}
            />
            {/* <ResponsiveStack
              className={styles.stack2}
              item1={<Statistics item1="Page Views" item2="281358" />}
              item2={<Statistics item1="Visits" item2="251901" />}
              item3={<Statistics item1="Unique Visitors" item2="25135" />}
            /> */}
            <ResponsiveStack
              className={styles.stack2}
              item1={
                <Statistics
                  item1={<span style={customTitleStyles}>Page Views</span>}
                  item2="281358"
                />
              }
              item2={
                <Statistics
                  className={styles.bgbox2}
                  item1={<span style={customTitleStyles}>Visits</span>}
                  item2="251901"
                />
              }
              item3={
                <Statistics
                  item1={<span style={customTitleStyles}>Unique Visitors</span>}
                  item2="25135"
                />
              }
            />
            <div className={styles.chartcontainer}>
              <StackVertical
                item1={[<SelectPeriod />, <BarChartComponent />]}
              />
              <StackArray item1={[<DonutChart />]} />
            </div>
            <div className={styles.chartcontainer}>
              <StackArray item1={[<TableData />]} />
              <StackArray item1={[<PieChart />]} />
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}></Footer>
      </Layout>
    </Layout>
  )
}

export default LayoutHome
