import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const FullWidth = Dimensions.get('window').width;

export default class GoodsLists extends Component {
  render() {
    return (
      <View
        style={[
          styles.wrapper,
          {backgroundColor: this.props.tabBarBGC.replace('B3B3B3', 'ddd')},
        ]}>
        <Text style={styles.Text}>
          {' '}
          {this.props.title} <FontAwesome size={19} name="thumbs-o-up" />{' '}
        </Text>
        {/* 商品列表 */}
        <View style={styles.container}>
          {this.props.data.map((item, index) => (
            <GoodsCard {...this.props} navigation={this.props.navigation} key={index} uri={item.uri} price={item.price} title={item.title} />
          ))}
        </View>
      </View>
    );
  }
}
// 商品卡片组件
class GoodsCard extends Component {
  render () {
    return (
      <View style={[styles.Card, {width: FullWidth / 2 - 30}]}>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('GoodsInfo',{
          uri: this.props.uri,
          price: this.props.price,
          title: this.props.title,
          action: this.props.action,
          changeAction : this.props.changeAction
        })}>
          <Image
            style={{flex: 3,minHeight: 150}}
            source={{
              uri: this.props.uri,
            }}
            resizeMode="stretch"
          />
          <View style={{flex: 1}}>
            <Text style={styles.Price}>{isNaN(this.props.price) ? '' : '￥' }{this.props.price}</Text>
            <Text>{this.props.title.substring(0, 30)}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Price: {
    color: '#f22',
    fontWeight: 'bold',
    fontSize: 19,
  },
  Card: {
    // height: 200,
    backgroundColor: '#fff',
    borderRadius: 5,
    margin: 2,
    overflow: 'hidden',
    marginLeft: 6,
    marginRight: 0,
    marginBottom: 5,
    elevation: 3
  },
  container: {
    backgroundColor: '#fffae5',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
    flexWrap: 'wrap',
    paddingBottom: 10,
    paddingRight: 6
  },
  Text: {
    fontWeight: 'bold',
    color: '#666',
    fontSize: 19,
    marginTop: 5,
    marginLeft: 5,
  },
  wrapper: {
    marginLeft: 10,
    marginRight: 10,
    elevation: 10,
    marginTop: 20,
    borderRadius: 5,
    marginBottom: 50
  },
});
