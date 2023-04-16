import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import AdbIcon from '@mui/icons-material/Adb'
import Badge from '@mui/material/Badge'
import MailIcon from '@mui/icons-material/Mail'
import NotificationsIcon from '@mui/icons-material/Notifications'
import GitHubIcon from '@mui/icons-material/GitHub'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import SettingsIcon from '@mui/icons-material/Settings'
import AvatarImage from './assets/images/avatar.png'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import type { ColumnsType } from 'antd/es/table'

export interface DataType {
  key: string;
  name: string;
  money: string;
  address: string;
}

export {
  React,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuIcon,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  AdbIcon,
  Badge,
  MailIcon,
  NotificationsIcon,
  GitHubIcon,
  FavoriteBorderIcon,
  SettingsIcon,
  AvatarImage,
  createTheme,
  ThemeProvider,
}

export const items: MenuProps['items'] = [
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

export const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]

export const dataDonutChart = [
  ['Task', 'Hours per Day'],
  ['Direct', 112332],
  ['Search Engines', 342334],
  ['Referrals', 432334],
  ['Internal', 123221],
  ['Other', 133432],
]

export const options = {
  title: 'Traffic Sources',
  titleTextStyle: {
    paddingTop: '-10px',
    color: 'grey',
    fontFamily: 'sans-serif',
    fontSize: '14',
    fontWeight: '400',
    lineHeight: '1.43',
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

export const pieChartData = [
  ['Chrome', 'Hours per Day'],
  ['Edge', 11],
  ['Firefox', 13],
  ['Safari', 15],
  ['Opera', 16],
  ['Safari', 19],
  ['Other', 15],
]

export const pieChartOptions = {
  title: 'My Daily Activities',
  titleTextStyle: {
    paddingTop: '-10px',
    color: 'grey',
    fontSize: '14',
  },
}

export const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Cash Assets',
    className: 'column-money',
    dataIndex: 'money',
    align: 'right',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
]

export const tableData: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    money: '￥300,000.00',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    money: '￥1,256,000.00',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    money: '￥120,000.00',
    address: 'Sydney No. 1 Lake Park',
  },
]
