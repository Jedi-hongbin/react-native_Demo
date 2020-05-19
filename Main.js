import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import App from './App.js'
// import { TabNav } from './TabNav.js'
import Root from './root.js'
import AboutUs from './components/User/AboutUs.js'
import AddYinHangCard from './components/User/AddYinHangCard.js'
import GoodsInfo from './components/GoodsInfo'

const RootStack = createStackNavigator({
  App: {
    screen: App,
    navigationOptions: {
      header: null
    }
  },
  Main: {
    screen: Root,
    navigationOptions: {
      header: null,
      mode: 'card'
    }
  },
  AboutUs: {
    screen: AboutUs,
    navigationOptions: {
      headerTitle:'返回',
      headerStyle:{
        backgroundColor: '#f88'
      },
    },
    gesturesEnabled: 'true'
  },
  AddYinHangCard: {
    screen: AddYinHangCard,
    navigationOptions:{
      headerTitle:'返回',
      headerStyle:{
        backgroundColor: '#0af'
      }
    }
  },
  GoodsInfo: {
    screen: GoodsInfo,
    navigationOptions:{
      header: null,
      headerStyle:{
        backgroundColor: '#f66'
      }
    }
  }
})

export default createAppContainer(RootStack)
