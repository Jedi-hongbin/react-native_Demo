import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import ListCard from './listCard';
// var uuid = require('react-native-uuid')

class ShoppingCar extends Component {
  screenWidth = Dimensions.get('window').width;
  screenHeight = Dimensions.get('window').height;
  componentDidMount() {
//    console.log()
  }
  render() {
    return (
      <View style={[{height: this.screenHeight}, styles.wrapper]}>
        {/* 商品列表 */}
        {this.props.action.map((item, index) => (
          <ListCard
            navigation={this.props.navigation}
            key={index}
            count={item.count}
            title={item.title}
            price={item.price}
            uri={item.uri}
          />
        ))}
        {/* 背景 */}
        <View
          style={[
            styles.bgTop,
            {width: this.screenWidth * 0.5, height: this.screenHeight * 0.5},
          ]}
        />
        <View
          style={[
            styles.bgBottom,
            {width: this.screenWidth * 0.5, height: this.screenHeight * 0.5},
          ]}
        />
      </View>
    );
  }
  genId = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
      .replace(/[xy]/g, function(c) {
        var r = (Math.random() * 16) | 0,
          v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      })
      .toUpperCase();
  };
}

function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps)(ShoppingCar);
const styles = StyleSheet.create({
  bgBottom: {
    backgroundColor: '#aaf',
    position: 'absolute',
    bottom: 0,
    borderTopRightRadius: 200,
    borderBottomRightRadius: 200,
    zIndex: -10,
  },
  bgTop: {
    backgroundColor: '#f88',
    position: 'absolute',
    right: 0,
    borderTopLeftRadius: 200,
    borderBottomLeftRadius: 200,
    zIndex: -10,
  },
  wrapper: {
    // justifyContent: 'center',
    padding: 10,
    paddingTop: 30,
  },
});
