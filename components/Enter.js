import React, {Component} from 'react';
import {
  View,
  Text,
  Animated,
  StyleSheet,
} from 'react-native';

//import Main from './Container.js'

export default class animated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontSize: new Animated.Value(50),
      fadeOut: new Animated.Value(1),
      fadeSwitch: new Animated.Value(0),
      showMain: 'none',
    };
  }

  animatedText = direction => {
    let Value, fade;
    if (direction) {
      Value = 500;
      fade = 1;

    } else {
      Value = 0;
      fade = 0;
      setTimeout(() => {
        this.props.navigation.navigate('Main')
        this.fade(this.state.fadeSwitch, 1);
        this.setState({showMain: 'flex'});
      }, 800);
    }
    Animated.timing(this.state.fontSize, {
      toValue: Value,
      duration: 800,
      useNativeDriver: false,
    }).start();
    this.fade(this.state.fadeOut, fade);
  };

  fade = (Value, fade) => {
    Animated.timing(Value, {
      toValue: fade,
      duration: 800,
      useNativeDriver: false,
    }).start();
  };

  componentDidMount() {
    this.animatedText(true);
  }

  render() {
    return (
      <View style={ this.props.centered }>
        {/* A字进入动画 */}
        <View>
          <Text onPress={this.animatedText.bind(this, false)}>
            <Animated.Text
              style={{
                fontSize: this.state.fontSize,
                color: '#fff',
                opacity: this.state.fadeOut,
              }}>
              A
            </Animated.Text>
          </Text>
        </View>
        {/* 主题淡入进场 */}
        {/* <Animated.View
          style={{
            opacity: this.state.fadeSwitch,
              display: this.state.showMain,
          }}>
          <Main {...this.props}/>
        </Animated.View> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Text: {
    color: '#fff',
    fontSize: 50,
  },
});
