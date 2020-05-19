import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  Animated,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import OptionMenu from './OptionMenu';
import {Overlay } from 'react-native-elements';
import PopupView from './PopupView.js'

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
      barStyle: 'default',
      barStyleIconName: 'ios-sunny',
      barStyleIconColor: '#fff',
      bgc: '#f55',
      linearGradientColor1: ['#f66', '#dff'],
      linearGradientColor2: ['#0ff', '#00f'],
      linearGradientColor3: ['#fffae5', '#0f0'],
      bgImgBorderMaskOpacity: 0,
      TextColor: '#fff',
      textShadowRadius: 0,
      LinearGradientBG: ['#f44', '#EEC591', '#fff'],
      visible:false,
      borderRadius: new Animated.Value(0),
      PopupOpacity: new Animated.Value(400)
    };
  }

  render() {
    return (
      <Animated.View
        style={[
          styles.wrapper,
          {backgroundColor: this.state.barStyleIconColor.replace('000', '999'),borderRadius :this.state.borderRadius}
        ]}>
        <View style={styles.bgImgBorder}>
          <View style={[styles.bgImgBorderMask,{height: 250, width: Dimensions.get('window').width,opacity: this.state.bgImgBorderMaskOpacity}]}></View>
          <Image
            style={{height: 250, width: Dimensions.get('window').width}}
            source={require('../../assets/images/other/user_bg.png')}
            resizeMode="cover"
          />
        </View>
        <View style={styles.HeadIconBorder}>
          <Image
            style={[
              styles.headIcon,
              {backgroundColor: this.state.barStyleIconColor},
            ]}
            source={this.props.userHeadIcon}
            resizeMode="cover"
          />
          <View
            style={[
              styles.mask,
              {
                position:
                  this.state.barStyleIconColor == '#000'
                    ? 'absolute'
                    : 'relative',
              },
            ]}
          />
        </View>
        <View style={styles.LingDang}>
          <FontAwesome
            name="pencil-square-o"
            size={26}
            color={this.state.barStyleIconColor.replace('fff', 'ff0')}
            onPress={this.Popup.bind(this,0.91,10,0)}
          />
          <Icon
            onPress={this.nightMode}
            name={this.state.barStyleIconName}
            size={30}
            color={this.state.barStyleIconColor.replace('fff', '0ff')}
          />
          <StatusBar
            hidden={this.state.hidden}
            barStyle={this.state.barStyle}
            backgroundColor="transparent"
            translucent={true}
          />
          <FontAwesome
            name="commenting-o"
            size={26}
            color={this.state.barStyleIconColor.replace('fff', '0f0')}
          />
        </View>
        <Text style={[styles.Hi, {color: this.state.barStyleIconColor}]}>
          Hi!
        </Text>
        <Text style={[styles.UserName, {color: this.state.barStyleIconColor}]}>
          {this.props.userName}
        </Text>

        <View
          style={[styles.border, {width: Dimensions.get('window').width - 20}]}
        />
        {/* 头像下面渐变区域 */}
        <OptionMenu
          navigation={this.props.navigation}
          bgc={this.state.bgc}
          LinearGradientBG={this.state.LinearGradientBG}
          linearGradientColor1={this.state.linearGradientColor1}
          linearGradientColor2={this.state.linearGradientColor2}
          linearGradientColor3={this.state.linearGradientColor3}
          TextStyle={{
            color: this.state.TextColor,
            textShadowOffset:{width:1,height:1},
            textShadowRadius:this.state.textShadowRadius,
            textShadowColor:'#000'
            }}
            userName={this.props.userName}
          ref='OptionMenu'
        />
        {/* 弹窗，修改信息 */}
        <Overlay
          isVisible={this.state.visible}
          fullScreen={true}
          overlayStyle={[styles.overlayStyle,{width:Dimensions.get('window').width-10}]}
          backdropStyle={{
            backgroundColor:this.state.barStyleIconColor,
            opacity:0.1}}
          onBackdropPress={this.Popup.bind(this,1,0,400)}>
          <Animated.View
           style={[styles.overlayInnerView,{transform:[{translateY:this.state.PopupOpacity}],backgroundColor:this.state.barStyleIconColor.replace('fff','f55').replace('000','aaa')}]}>
            <PopupView
              darkColor={this.state.barStyleIconColor}
              HeaderImage={this.props.userHeadIcon}
              userName={this.props.userName}
              Popup={this.Popup.bind(this)}
              changeUserName={this.props.changeUserName}
              changeUserHeaderIcon={this.props.changeUserHeaderIcon} />
          </Animated.View>
        </Overlay>
      </Animated.View>
    );
  }
  Popup (toValue,borderRadius,PopupOpacity) {
    this.props.scalePage(toValue)
    this.setState({
      visible: toValue !== 1
    })
    Animated.timing(this.state.borderRadius,{
      toValue:borderRadius,
      duration:300,
      useNativeDriver:false
    }).start()
    if(PopupOpacity == 0){
      Animated.timing(this.state.PopupOpacity,{
        toValue:0,
        duration:400,
        useNativeDriver:false
      }).start()
    }else{
      Animated.timing(this.state.PopupOpacity,{
        toValue:400,
        duration:0,
        useNativeDriver:false
      }).start()
    }
  }
  nightMode = () => {
    this.setState(
      {
        barStyleIconName:
          this.state.barStyleIconName == 'ios-sunny' ? 'ios-moon' : 'ios-sunny',
        barStyleIconColor:
          this.state.barStyleIconColor == '#000' ? '#fff' : '#000',
        barStyle: this.state.barStyle == 'default' ? 'dark-content' : 'default',
        bgc: this.state.bgc == '#f55' ? '#B3B3B3' : '#f55',
        linearGradientColor1: this.changeLinearGradientColor(
          this.state.linearGradientColor1,
          ['#f66', '#dff'],
          ['#ccc', '#999'],
        ),
        linearGradientColor2: this.changeLinearGradientColor(
          this.state.linearGradientColor2,
          ['#0ff', '#00f'],
          ['#ccc', '#666'],
        ),
        linearGradientColor3: this.changeLinearGradientColor(
          this.state.linearGradientColor3,
          ['#fffae5', '#0f0'],
          ['#ccc', '#333'],
        ),
        bgImgBorderMaskOpacity: this.state.bgImgBorderMaskOpacity == 0 ? 0.5 : 0,
        TextColor:this.state.TextColor == '#fff' ? '#EDEDED' : '#fff',
        textShadowRadius: this.state.textShadowRadius == 0 ? 1 : 0,
        LinearGradientBG:this.changeLinearGradientColor(
          this.state.LinearGradientBG,
          ['#f44', '#EEC591', '#fff'],
          ['#333', '#666','#999' ],
        )
      },
      () => {
        this.props.changeTabBarBGC(this.state.bgc.replace('f55', 'fff'));
      },
    );
  };
  changeLinearGradientColor = (a,colors, toColors) => {
    if (a.join(',') == toColors.join(',')){
      return colors
    }else{
      return toColors
    }
  };
}
const styles = StyleSheet.create({
  overlayInnerView:{borderTopLeftRadius:15,borderTopRightRadius:15,flex:1},
  overlayStyle:{
    flex:1,
    backgroundColor:'transparent',//弹层背景为透明
    elevation:0, //透明后清除阴影
    padding:0,
    marginTop:15,
    overflow: 'hidden',
  },
  border: {
    height: 800,
    position: 'absolute',
    top: 210,
    borderRadius: 5,
  },
  LingDang: {
    position: 'absolute',
    width: 30,
    height: 120,
    right: 30,
    top: 40,
    display: 'flex',
    flexDirection: 'column-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  UserName: {
    fontWeight: '600',
    position: 'absolute',
    fontSize: 30,
    left: 160,
    top: 170,
    textDecorationLine: 'underline',
  },
  Hi: {
    fontWeight: 'bold',
    position: 'absolute',
    fontSize: 40,
    left: 170,
    top: 110,
  },
  HeadIconBorder: {
    display: 'flex',
    width: 120,
    height: 150,
    // backgroundColor: '#000',
    position: 'relative',
    marginLeft: 30,
    marginTop: 80,
    zIndex: 99,
    borderRadius: 20,
    overflow: 'hidden',
    borderBottomWidth: 0.5,
    // borderColor: '#ccc',
  },
  mask: {
    width: 120,
    height: 150,
    backgroundColor: '#000',
    zIndex: 10,
    opacity: 0.5,
  },
  headIcon: {
    width: 120,
    height: 150,
    // position: 'absolute',
  },
  bgImgBorderMask:{
    position: 'absolute',
    backgroundColor: '#000',
    zIndex: 1
  },
  bgImgBorder: {
    flex: 1,
    position: 'absolute',
    height: 300,
    overflow: 'hidden',
  },
  wrapper: {
    flex: 1,
    position: 'relative',
    display: 'flex',
    overflow: 'hidden',
  },
});
