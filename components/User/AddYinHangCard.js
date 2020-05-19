import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button, InputItem, List } from '@ant-design/react-native'

export default class AddYinHangCard extends Component {
  state = {
    value:'',
    YinHangCard:''
  }
  render () {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff'}}>
        <Text style={[styles.Text, { fontSize: 25, fontWeight: 'bold', marginTop: 100, marginBottom: 30 }]}>添加银行卡</Text>
        <Text style={[styles.Text, {marginBottom: 10, fontSize: 22 }]}>请绑定持卡人本人的银行卡</Text>
        <View style={{marginLeft: 10, marginRight: 20}}>
          <InputItem
              clear
              value={this.state.value}
              onChange={value => {
                this.setState({
                  value,
                });
              }}
              extra=""
              placeholder={this.props.navigation.state.params.userName}
              editable={false}
            >
              持卡人
          </InputItem>
          <Text></Text>
          <InputItem
              clear
              type="number"
              value={this.state.YinHangCard}
              onChange={YinHangCard => {
                this.setState({
                  YinHangCard,
                });
              }}
              extra=""
              placeholder='持卡人本人银行卡号'
            >
              卡号
          </InputItem>
        </View>
        <Button type="ghost" style={{marginLeft: 70, marginRight:70, marginTop: 40}}>下一步</Button>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  Text: {
    textAlign: 'center'
  }
})