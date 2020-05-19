import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

export default class listCard extends Component {
  render() { // console.log(this.props)
    return (
      <View>
        <View style={[styles.wrap, {width: Dimensions.get('window').window}]}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('GoodsInfo', {
                uri: this.props.uri,
                price: this.props.price,
                title: this.props.title,
                action: this.props.action,
              })
            }
            style={styles.Image}>
            <Image
              style={{width: 90, height: 90}}
              source={{uri: this.props.uri}}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <View style={styles.aside}>
            <Text style={styles.title}>{this.props.title}</Text>
            <Text style={styles.price}>￥{this.props.price}</Text>
            <Text style={styles.count}>数量{this.props.count}</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  count: {},
  price: {
    color: '#f66',
    marginVertical: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    overflow: 'hidden',
    maxWidth: 300,
    maxHeight: 17,
  },
  aside: {
    flex: 2,
    backgroundColor: '#dfd',
    padding: 10,
    marginRight: 5,
    height: 90,
    borderRadius: 5,
  },
  Image: {
    flex: 1,
    maxWidth: 90,
    height: 90,
    backgroundColor: '#ddd',
    borderRadius: 5,
    overflow: 'hidden',
    margin: 5,
  },
  wrap: {
    elevation: 2,
    flexDirection: 'row',
    borderRadius: 5,
    overflow: 'hidden',
    minHeight: 130,
    backgroundColor: '#fff',
    alignItems: 'center',
    margin: 5,
  },
});
