import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {Stepper} from '@ant-design/react-native';
export default class AddShoppingCar extends Component {
  state = {
    checked: 1,
    num: 1,
  };
  render() {
    return (
      <View style={{padding: 5}}>
        <Image
          style={styles.Image}
          source={{uri: this.props.uri}}
          resizeMode="cover"
        />
        <Text>尺寸</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.selectedText}>大</Text>
          <Text style={styles.selectedText}>中</Text>
          <Text style={styles.selectedText}>小</Text>
        </View>
        <Text>数量</Text>
        <View style={{margin:20,marginLeft:5,width:100,height:30}}>
          <Stepper
            key="0"
            max={10}
            min={1}
            defaultValue={1}
            inputStyle={{fontSize:13}}
            onChange={num => this.setState({num})}
          />
        </View>

        <Text>可选服务</Text>
        <View>
          <CheckBox
            title="三个月换新"
            checked={this.state.checked == 1}
            onPress={() => this.setState({checked: 1})}
          />
          <CheckBox
            title="一年保修"
            checked={this.state.checked == 2}
            onPress={() => this.setState({checked: 2})}
          />
          <CheckBox
            title="全国联保"
            checked={this.state.checked == 3}
            onPress={() => this.setState({checked: 3})}
          />
        </View>
        {/* 按钮 */}
        <View style={styles.bottomBtn}>
          <TouchableOpacity
            onPress={this.props.close}
            style={[styles.btn, {backgroundColor: '#ccc'}]}>
            <Text style={{textAlign: 'center'}}>取消</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.success}
            style={[styles.btn, {backgroundColor: '#cfc'}]}>
            <Text style={{textAlign: 'center'}}>确定</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  success = () => {
    this.props.close();
    // 添加商品
    this.props.Toast();
    let goods = {
      title: this.props.title,
      price: this.props.price,
      count: this.state.num,
      uri: this.props.uri,
      id: +new Date()
    }
    this.props.addShoppingCar(goods)
  };
}
const styles = StyleSheet.create({
  btn: {
    borderWidth: 1,
    justifyContent: 'center',
    margin: 10,
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    zIndex: 10,
  },
  bottomBtn: {
    flexDirection: 'row',
    position: 'absolute',
    top: 500,
    paddingLeft: 30,
    paddingRight: 30,
  },
  selectedText: {
    borderWidth: 1,
    borderColor: '#666',
    padding: 1,
    textAlign: 'center',
    borderRadius: 3,
    paddingLeft: 5,
    paddingRight: 5,
    margin: 5,
  },
  Image: {width: 70, height: 70, margin: 10},
});
