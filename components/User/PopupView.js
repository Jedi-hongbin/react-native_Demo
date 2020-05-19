import React, {Component} from 'react';
import {
  TextInput,
  Text,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-crop-picker';
import {
  DatePicker,
  List,
  Provider,
  TextareaItem,
} from '@ant-design/react-native';
export default class PopupView extends Component {
  state = {
    name: '',
    email: '',
    value: new Date(),
    themeColor:this.props.darkColor.replace('000','ccc'),
  };
  onChange = value => {
    this.setState({value});
  };
  render() {
    return (
      <View style={{overflow: 'hidden', position: 'relative', flex: 1}}>
        {/* //取消图标 */}
        <TouchableOpacity
          onPress={() => this.props.Popup(1, 0, 400)}
          style={[styles.close,{backgroundColor:this.state.themeColor}]}>
          <FontAwesome name="times" size={50} color="#000" />
        </TouchableOpacity>
        {/* 选择头像 */}
        <View style={styles.HeaderImage}>
          <TouchableOpacity
            style={{
              overflow: 'hidden',
              borderRadius: 10,
              width: 150,
              height: 200,
              position: 'relative',
            }}
            onPress={this.changeHeaderImage}>
            <View style={[styles.mask,{backgroundColor:this.state.themeColor.replace('#ccc','#000').replace('#fff','transparent')}]}></View>
            <Image
              style={styles.changeImage}
              resizeMode="cover"
              source={this.props.HeaderImage}
            />
            <Text style={[styles.TextChange,{color:this.state.themeColor}]}>点击修改</Text>
          </TouchableOpacity>
        </View>
        {/* 修改用户名 */}
        <TextInput
          style={[styles.ipt,{borderBottomColor:this.state.themeColor}]}
          placeholder={this.props.userName}
          placeholderTextColor={this.state.themeColor}
          onChangeText={this.changeText}
          onBlur={() => this.props.changeUserName(this.state.name)}
        />
        <TextInput
          style={[styles.ipt,{borderBottomColor:this.state.themeColor}]}
          placeholder="您的邮箱"
          placeholderTextColor={this.state.themeColor}
          onChangeText={email => this.setState({email})}
        />
        {/* 日期选择器 */}
        <Provider>
          <View>
            <List>
              <DatePicker
                value={this.state.value}
                mode="date"
                defaultDate={new Date()}
                minDate={new Date(1990, 7, 6)}
                maxDate={new Date(2021, 1, 1)}
                onChange={this.onChange}
                format="YYYY-MM-DD">
                <List.Item style={{backgroundColor:this.state.themeColor.replace('ccc','fffeee')}}>
                  <Text style={{color: this.state.themeColor.replace('fff','f66')}}>让我们知道您的生日</Text>
                </List.Item>
              </DatePicker>
            </List>
          </View>
        </Provider>
        <View style={{position: 'absolute',top:500,width:Dimensions.get('window').width}}>
          <TextareaItem rows={6} placeholder="个人简介" style={{backgroundColor:this.state.themeColor}} />
        </View>
      </View>
    );
  }
  changeText = text => {
    this.setState({name: text});
  };
  //修改用户头像，注意要用 {uri:图片地址}
  changeHeaderImage = () => {
    ImagePicker.openPicker({
      width: 150,
      height: 200,
      cropping: true,
      cropperCircleOverlay: true,
    }).then(img => {
      this.props.changeUserHeaderIcon(JSON.stringify({uri: img.path}));
    });
  };
}
const styles = StyleSheet.create({
  TextChange: {
    position: 'absolute',
    bottom: 0,
    textAlign: 'center',
    width: 150,
    fontSize: 20,
    backgroundColor: '#eeeeee',
  },
  ipt: {
    borderBottomWidth: 1,
    color: '#fff',
    fontSize: 20,
    marginBottom: 30,
    paddingLeft: 10,
  },
  changeImage: {
    height: 200,
    width: 150,
  },
  mask:{
    position: 'absolute',
    opacity:0.5,
    height: 200,
    width: 150,
    zIndex:10,
    top: 0,
    left: 0
  },
  HeaderImage: {
    height: 200,
    width: 150,
    margin: 30,
    position: 'relative'
  },
  close: {
    position: 'absolute',
    width: 200,
    height: 300,
    alignSelf: 'flex-end',
    paddingLeft: 10,
    paddingTop: 20,
    justifyContent: 'center',
    transform: [{rotate: 200}, {translateX: 190}, {translateY: -30}],
    borderWidth: 1,
    borderColor: '#0ff',
  },
});
