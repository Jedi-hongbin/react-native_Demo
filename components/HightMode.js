import React, {Component} from 'react';
import {View, Text, Switch, StyleSheet, StatusBar} from 'react-native';

export default class main extends Component {
  constructor (props) {
    super(props);
    this.state = {
      switchValue: false,
      thumbColor: '#fff',
      hidden: false,
      barStyle: 'dark-content',
      switch2Value: false,
      thumbColor2: '#fff',
    };
  }

  render () {
    return (
      <View>
        <View style={styles.wrap}>
          <Text>夜晚模式</Text>
          <Switch
            value={this.state.switchValue}
            onValueChange={this.ValueChangeBarStyle.bind(this)}
            thumbColor={this.state.thumbColor}
            trackColor={{false: '#ccc', true: '#333'}}
          />
        </View>
        <StatusBar hidden={this.state.hidden} barStyle={this.state.barStyle} />
        <View style={styles.wrap}>
          <Text>全屏模式</Text>
          <Switch
            value={this.state.switch2Value}
            onValueChange={this.ValueChangeHidden.bind(this)}
            thumbColor={this.state.thumbColor2}
            trackColor={{false: '#ccc', true: '#333'}}
          />
        </View>
        <StatusBar
          hidden={this.state.hidden}
          barStyle={this.state.barStyle}
          backgroundColor='transparent'
          translucent={ true }
        />
      </View>
    );
  }

  ValueChangeBarStyle (boolean) {
    this.setState({
      switchValue: boolean,
      // barStyle: boolean ? 'dark-content' : 'light-content',
      thumbColor: boolean ? '#000' : '#fff',
    });
    if (boolean) this.props.changeBGC('#999');
    else this.props.changeBGC('#fff');
  }

  ValueChangeHidden (boolean) {
    this.setState({
      switch2Value: boolean,
      hidden: boolean,
      thumbColor2: boolean ? '#000' : '#fff',
    });
  }
}
const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 40,
    borderTopColor: '#ccc',
    borderTopWidth: 1
  }
});
