import React, { Component } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import {SearchBar} from '@ant-design/react-native';

export default class Search extends Component {
  state = {
    searchValue: ''
  };
  render () {
    return (
      <View style={[styles.searchBar, { backgroundColor: this.props.tabBarBGC.replace('B3B3B3', 'ccc').replace('fff','f99').replace('FFEBCD','f99') , borderColor: this.props.tabBarBGC.replace('B3B3B3', '999').replace('fff','f77').replace('FFEBCD','f77') }]}>
        <TextInput
          style={{fontSize: 18, paddingLeft: 10 }}
          value={this.state.searchValue}
          placeholder="搜索"
          placeholderTextColor='#eee'
          onChangeText={(searchValue) => this.setState({searchValue})}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  searchBar:{
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 15,
    // transform: [{translateY : -40 }],
    marginTop: 40,
    borderWidth: 5,
    height: 60,
    // borderColor: '#f77',
    // backgroundColor: '#f99',
    elevation: 5
  }
})
