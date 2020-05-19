import React, {Component} from 'react';
import {View, Dimensions, StyleSheet, Button} from 'react-native';

import HightMode from './HightMode.js';
import PickerComponent from './PickerComponent.js';
import FetchComponent from './FetchComponent.js';


export default class main extends Component {
  constructor (props) {
    super(props);
    this.state = {
      backgroundColor: '#fff',
      switchValue: false,
      thumbColor: '#fff',
      hidden: false,
      barStyle: 'default',
      pickerList: [
        {label: '请选择性别', value: ''},
        {label: '男', value: 'male'},
        {label: '女', value: 'female'},
        {label: '其他', value: 'other'}, 
      ],
      pickerValue: ''
    }
  }

  render () {
    return (
      <View
        style={[
          {
            width: Dimensions.get('window').width,
            backgroundColor: this.state.backgroundColor,
          },
          styles.wrap
        ]}>
        <FetchComponent />
        <PickerComponent value={this.state.pickerValue} data={this.state.pickerList} selectValue={this.selectValue} />
        <HightMode changeBGC={this.changeBGC} />
        <Button title="跳转到Fetch" onPress={ () => this.props.navigation.navigate('Main') }/>
      </View>
    )
  }

  // switch切换背景颜色
  changeBGC = (color) => {
    this.setState({backgroundColor: color})
  }
  //设置picker选择的值
  selectValue = (value) => {
    this.setState({pickerValue: value})
  }
}
const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    transform: [{translateY:-1}],
  },
});
