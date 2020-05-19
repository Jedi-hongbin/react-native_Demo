import React, { Component } from 'react'
import { Image, View, StyleSheet } from 'react-native'

export default class CarouselView extends Component {
  static defaultProps = {
    ImageURI: require('../../assets/images/other/user_bg.png')
  }
  render () {
    return (
      <View style={[styles.containerHorizontal]}>
        <Image style={styles.WH} source={this.props.ImageURI} resizeMode='cover' />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  WH:{
    flex:1,
    height: 170,
    borderRadius: 10
  },
  containerHorizontal: {
    height: 170,
    borderRadius: 20,
    backgroundColor: '#fff',
    elevation: 4
  }
});