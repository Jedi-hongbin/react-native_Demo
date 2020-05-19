import React, { Component } from 'react'
import { Text, View, Dimensions } from 'react-native'

export default class INfo extends Component {
  screenWidth = Dimensions.get('window').width;
  screenHeight = Dimensions.get('window').height - 40;
  render () {
    return (
      <View style={{zIndex:-10,width:this.screenWidth,maxHeight:this.screenHeight,backgroundColor: '#00f'}}>
        <Text style={{fontSize: 140,fontWeight:'bold',textAlign: 'center',color:'#fff'}}> 没 </Text>
        <Text style={{fontSize: 140,fontWeight:'bold',textAlign: 'center',color:'#fff'}}> 有 </Text>
        <Text style={{fontSize: 150,fontWeight:'bold',textAlign: 'center',color:'#fff'}}> 详 </Text>
        <Text style={{fontSize: 150,fontWeight:'bold',textAlign: 'center',color:'#fff'}}> 情 </Text>
      </View>
    )
  }
}
