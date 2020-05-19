import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Button, Overlay, CheckBox } from 'react-native-elements';

export default class FetchComponent extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      data: [],
    };
  }

  render() {
    return (
      <View>
        <Button
          title="发送Fetch请求"
          type="outline"
          buttonStyle={{
            width: 300,
            marginTop: 20,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          onPress={this.toggleOverlay.bind(this, true)}
        />

        <Overlay
          isVisible={this.state.visible}
          fullScreen={true}
          overlayStyle={{width: 350, height: 500}}
          onBackdropPress={this.toggleOverlay.bind(this, false)}>
          <View style={{backgroundColor: '#fff'}}>
            {this.state.data.map((item, index) => (
              <View key={index}>
                <Text>id: {item.id} </Text>
                <Text>title: {item.title} </Text>
                <Text>completed: {(item.completed).toString()} </Text>
              </View>
            ))}
            <CheckBox title='JSONPlaceHolder' checked={true} />
          </View>
        </Overlay>
      </View>
    );
  }

  toggleOverlay (isSend) {
    this.setState({ visible: !this.state.visible })
    if (isSend) {
      setTimeout(()=>{this.fetchData()},0)
    }
  }
  fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(res => {
      const data = [];
      data.push(res);
      this.setState({data})
    })
    .catch(err => console.log(err))

  }
}
