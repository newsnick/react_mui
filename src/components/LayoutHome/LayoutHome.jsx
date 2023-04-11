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

const { Header, Content, Footer, Sider } = Layout

const LayoutHome = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken)
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type)
        }}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['4']}
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
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <ResponsiveAppBar />
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <StackArray
              item1={[
                <AntdDropdown className={styles.dropdown} />,
                <DatePicker className={styles.datepicker} />,
                <ControlTwoTone className={styles.controlicon} />,
              ]}
            />
            <ResponsiveStack
              className={styles.stack2}
              item1={<Statistics item1="Page Views" item2="281358" />}
              item2={<Statistics item1="Visits" item2="251901" />}
              item3={<Statistics item1="Unique Visitors" item2="25135" />}
            />

            <StackVertical
              className={styles.chartcontainer}
              item1={[<SelectPeriod />, <BarChartComponent />]}
            />

            <ResponsiveStack />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}></Footer>
      </Layout>
    </Layout>
  )
}

export default LayoutHome
