import React from 'react'
import LayoutHome from '../../components/LayoutHome/LayoutHome.jsx'
//import { Layout } from 'antd'
import { Provider } from 'react-redux'
import store from '../../redux/store/store'

const Home = () => {
  return (
    <Provider store={store}>
      <LayoutHome />
    </Provider>
  )
}

export default Home
