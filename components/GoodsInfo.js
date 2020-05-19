import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ScrollView,
  Animated,
} from 'react-native';
import Goods from './GoodsInfo/Goods';
import Comment from './GoodsInfo/Comment';
import Info from './GoodsInfo/Info';
import AddShoppingCar from './GoodsInfo/AddShoppingCar';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Modal, Provider, Toast} from '@ant-design/react-native';
import {Overlay} from 'react-native-elements';

export default class GoodsInfo extends Component {
  state = {
    modalVisible: false,
    index: 0,
    visible: false,
    overlay: true,
    overlayOpacity: new Animated.Value(1),
  };
  screenWidth = Dimensions.get('window').width;
  screenHeight = Dimensions.get('window').height;
  // 添加购物车
  addShoppingCar = (dispatch) => {
    // let Data = this.props.navigation.state.params.action
    // Data.unshift(dispatch)
    // this.props.navigation.state.params.changeAction('changeAction',Data)
    this.props.navigation.state.params.changeAction('changeAction',dispatch)
    console.log(this.props.navigation.state.params.action)
  }
  render() {
    const state = this.props.navigation.state.params;
    console.log(state)
    return (
      <View style={{backgroundColor: '#fff'}}>
        {/* 顶部返回btn */}
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={styles.returnBar}>
          <FontAwesome name="chevron-circle-left" size={30} color="#999" />
        </TouchableOpacity>
        {/* 底部购买栏 */}
        <View
          style={[
            styles.bottomBar,
            {
              width: Dimensions.get('window').width,
              bottom: 0,
              opacity: this.state.index == 0 ? 1 : 0,
              // top: Dimensions.get('window').height - 10,
            },
          ]}>
          <View style={{marginLeft: 15, marginTop: 5}}>
            <FontAwesome name="archive" size={30} color="#aa22ff" />
            <Text style={{color: '#fffae5'}}>店铺</Text>
          </View>
          <View style={{marginLeft: 25, marginTop: 5}}>
            <FontAwesome name="comments" size={30} color="#0f0" />
            <Text style={{color: '#fffae5'}}>客服</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              this.setState({visible: !this.state.visible});
              this.closeOverlay(1);
            }}
            style={styles.Btn}>
            <Text style={[styles.btnText, {color: '#0fa'}]}>加入购物车</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Btn}>
            <Text style={[styles.btnText, {color: '#00a'}]}>立刻购买</Text>
          </TouchableOpacity>
        </View>
        {/* 购物车弹窗 */}
        <Provider>
          <Modal
            title=""
            transparent
            maskClosable
            popup
            // animationType="slide"
            visible={this.state.visible}>
            <Overlay
              isVisible={this.state.overlay}
              backdropStyle={{backgroundColor: 'transparent'}}
              overlayStyle={{
                backgroundColor: 'transparent',
                elevation: 0,
                transform: [{translateY: 100}],
              }}
              onBackdropPress={this.close}>
              <Animated.View
                style={[
                  styles.overlay,
                  {
                    width: this.screenWidth,
                    height: this.screenHeight * 0.8,
                    opacity: this.state.overlayOpacity,
                  },
                ]}>
                <Text style={styles.carTitle}>添加购物车</Text>
                <AddShoppingCar addShoppingCar={this.addShoppingCar} Toast={this.Toast} close={this.close} title={state.title} price={state.price} uri={state.uri} />
              </Animated.View>
            </Overlay>
          </Modal>
        </Provider>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              backgroundColor: '#fff',
              minHeight: Dimensions.get('window').height - 50,
              position: 'relative',
            }}>
            <View style={styles.leftCon}>
              <TouchableOpacity
                onPress={() => this.setState({index: 0})}
                style={[
                  styles.btn,
                  this.state.index === 0 ? styles.selected : {},
                ]}>
                <Text style={styles.Text}>商品</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({index: 1})}
                style={[
                  styles.btn,
                  this.state.index === 1 ? styles.selected : {},
                ]}>
                <Text style={styles.Text}>评论</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({index: 2})}
                style={[
                  styles.btn,
                  this.state.index === 2 ? styles.selected : {},
                ]}>
                <Text style={styles.Text}>详情</Text>
              </TouchableOpacity>
            </View>
            <View style={this.state.index == 0 ? {} : styles.hidden}>
              <Goods title={state.title} price={state.price} uri={state.uri} />
            </View>
            <View style={this.state.index == 1 ? {} : styles.hidden}>
              <Comment />
            </View>
            <View style={this.state.index == 2 ? {} : styles.hidden}>
              <Info />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
  Toast = () => {
    Toast.info('添加成功',0.5)
  }
  closeOverlay = toValue => {
    Animated.timing(this.state.overlayOpacity, {
      toValue,
      duration: 500,
      useNativeDriver: 'false',
    }).start();
  };
  close = () => {
    this.setState({visible: !this.state.visible});
    this.closeOverlay(0);
  };
}
const styles = StyleSheet.create({
  carTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  overlay: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    display: 'flex',
  },
  btnText: {
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 40,
    fontWeight: 'bold',
  },
  Btn: {
    borderRadius: 10,
    borderColor: '#0ff',
    borderWidth: 1,
    height: 40,
    width: 120,
    marginTop: 10,
  },
  returnBar: {
    marginTop: 10,
    marginLeft: 15,
    backgroundColor: 'transparent',
    position: 'absolute',
    width: 30,
    height: 30,
    top: 30,
    zIndex: 100,
  },
  bottomBar: {
    height: 70,
    backgroundColor: '#f66',
    position: 'absolute',
    zIndex: 100,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  hidden: {
    display: 'none',
  },
  selected: {
    borderColor: '#00f',
  },
  leftCon: {
    position: 'absolute',
    right: -10,
    marginTop: 20,
  },
  Text: {
    textAlign: 'center',
    lineHeight: 50,
    color: '#fff',
    fontWeight: 'bold',
  },
  btn: {
    borderLeftWidth: 2,
    borderColor: '#fff',
    width: 70,
    height: 50,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: '#f99',
    margin: 10,
    elevation: 10,
  },
});
