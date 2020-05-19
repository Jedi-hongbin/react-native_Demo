import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

export default class Card extends Component {
  render () {
    return (
      <View style={styles.View}>
        <Image style={styles.Image} source={this.props.Source} resizeMode='cover' />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  Image: {
    width: 220,
    height: 150,
    position: 'absolute'
  },
  View: {
    position: 'relative',
    overflow: 'hidden',
    width: 220,
    height: 150,
    backgroundColor: '#99f',
    margin: 10,
    marginTop: 20,
    borderRadius: 20,
    elevation: 5,
  }
})
