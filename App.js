import React, { Component } from 'react'
import { View, Animated, Dimensions, StatusBar } from 'react-native'
import EnterComponent from './components/Enter.js'

const centered = {
  flex: 1,
  backgroundColor: '#0f2',
  justifyContent: 'center',
  alignItems: 'center'
}
// 设置顶部状态栏
StatusBar.setBarStyle('default', true)
StatusBar.setBackgroundColor('transparent', true)
StatusBar.setTranslucent(true)

const fadeIn = new Animated.Value(0.2)
export default class App extends Component {
  componentDidMount () {
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false
    }).start()
  }

  render () {
    return (
      <Animated.View style={{ opacity: fadeIn }}>
        <View
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height+50,
            backgroundColor: '#fffae5',
            display: 'flex'
          }}>
          <EnterComponent {...this.props} centered={centered} />
        </View>
      </Animated.View>
    )
  }
}
