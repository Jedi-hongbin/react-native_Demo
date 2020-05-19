import React, {Component} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


import Header from './Header.js';

export default class ShoppingCar extends Component {
  state = {
    userHeadIcon:require('../../assets/images/other/6.jpg'),
    userName:'Hello Hongbin'
  }

  _storeData = async (key,value) => {
    try {
      await AsyncStorage.setItem(key, value);
    }
    catch (error) {
      console.log(error)
    }
  }

  _retrieveData = async (key) => { 
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        if(key == 'userName'){
          this.setState({userName:value})
        }else if(key== 'userHeadIcon'){
          this.setState({userHeadIcon:JSON.parse(value)})
        }
      }else{
        if(key == 'userName'){
          this.setState({userName:'Hello'})
        }else if(key== 'userHeadIcon'){
          this.setState({userHeadIcon:require('../../assets/images/other/6.jpg')})
        }
      }
     } catch (error) {
       console.log(error)
     }
  }
  componentDidMount = () => {
    this._retrieveData('userName')
    this._retrieveData('userHeadIcon')
  }
  
  render () {
    return (
      <View
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}>
        <Header
          {...this.props}
          userHeadIcon={this.state.userHeadIcon}
          changeUserHeaderIcon={this.changeUserHeaderIcon}
          changeUserName={this.changeUserName}
          userName={this.state.userName}
        />
      </View>
    );
    
  }
  changeUserHeaderIcon = (image) => {
    this._storeData('userHeadIcon',image)
    this._retrieveData('userHeadIcon')
  }
  changeUserName=(userName)=>{
    this._storeData('userName',userName)
    this._retrieveData('userName')
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBarIcon: {
    width: 23,
    height: 23,
  },
});
