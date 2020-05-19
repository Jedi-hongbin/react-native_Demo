import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {HButton} from '../../components/HongUI/HongUI';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Button} from '@ant-design/react-native';
import {CheckBox} from 'react-native-elements';

export default class OptionMenu extends Component {
  state = {
    checked: 'one',
    styles: {},
  };
  render() {
    return (
      <LinearGradient
        style={[styles.border, {backgroundColor: this.props.bgc}]}
        colors={this.props.LinearGradientBG}>
        {/* 滚动按钮 */}
        <View style={styles.scrollView}>
          <ScrollView
            contentContainerStyle={styles.contentContainer}
            showsHorizontalScrollIndicator={false}
            // pagingEnabled={true} // 自动分页，不能随意拖动停放
            horizontal={true}>
            <View
              style={[
                styles.scrollInnerBox,
                {width: Dimensions.get('window').width - 150},
              ]}>
              <HButton
                LinearGradientStart={[0, 1]}
                LinearGradientEnd={[1, 1]}
                LinearGradientColor={this.props.linearGradientColor1}
                FontAwesomeName="bookmark-o"
                FontAwesomeSize={32}
                FontAwesomeColor="#68228B"
                Text="我的标记"
                TextStyle={this.props.TextStyle}
              />
            </View>
            <View
              style={[
                styles.scrollInnerBox,
                {width: Dimensions.get('window').width - 150},
              ]}>
              <HButton
                LinearGradientStart={[0, 1]}
                LinearGradientEnd={[1, 1]}
                LinearGradientColor={this.props.linearGradientColor2}
                FontAwesomeName="heart-o"
                FontAwesomeSize={32}
                FontAwesomeColor="#fff"
                Text="我的收藏"
                TextStyle={this.props.TextStyle}
                // onPress={this.Press.bind(this)}
              />
            </View>
            <View
              style={[
                styles.scrollInnerBox,
                {width: Dimensions.get('window').width - 150, marginRight: 40},
              ]}>
              <HButton
                LinearGradientStart={[0, 1]}
                LinearGradientEnd={[1, 0]}
                LinearGradientColor={this.props.linearGradientColor3}
                FontAwesomeName="calendar-check-o"
                FontAwesomeSize={32}
                FontAwesomeColor="#68228B"
                Text="全部订单"
                TextStyle={this.props.TextStyle}
              />
            </View>
            <LinearGradient
              colors={['#ffa', '#f00']}
              start={{
                x: 1,
                y: 0,
              }}
              end={{
                x: 0,
                y: 1,
              }}
              style={{borderRadius: 10, marginRight: 40, overflow: 'hidden'}}
              locations={[0.2, 1]}>
              <View style={styles.toggleTheme}>
                <CheckBox
                  title="样式一"
                  checked={this.state.checked == 'one'}
                  onPress={this.toggleTheme.bind(this, 'one')}
                />
                <CheckBox
                  title="样式二"
                  checked={this.state.checked == 'two'}
                  onPress={this.toggleTheme.bind(this, 'two')}
                />
              </View>
            </LinearGradient>
          </ScrollView>
        </View>
        {/* 功能卡片 */}
        <ScrollView
          style={{marginBottom: 110}}
          showsVerticalScrollIndicator={false}>
          <View style={[styles.cardWrap, this.state.styles, {marginTop: 20}]}>
            <TouchableOpacity
              onPress={this.aboutUs.bind(this,'我的钱包')}
              style={styles.card}>
              <FontAwesome name="credit-card" size={45} color="#cfc" />
              <Text
                style={[
                  styles.Text,
                  {color: this.props.bgc.replace('f55', 'fff')},
                ]}>
                我的钱包
              </Text>
            </TouchableOpacity>
          </View>
          
          <View style={[styles.cardWrap, this.state.styles]}>
            <TouchableOpacity
            onPress={this.aboutUs.bind(this,'优惠卷')}
             style={styles.card}>
              <FontAwesome name="money" size={45} color="#494" />
              <Text
                style={[
                  styles.Text,
                  {color: this.props.bgc.replace('f55', 'fff')},
                ]}>
                优惠卷
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.cardWrap, this.state.styles]}>
            <TouchableOpacity
              onPress={this.aboutUs.bind(this,'分享赚钱')}
              style={styles.card}>
              <FontAwesome name="paper-plane" size={45} color="#f88" />
              <Text
                style={[
                  styles.Text,
                  {color: this.props.bgc.replace('f55', 'fff')},
                ]}>
                分享赚钱
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={[
              styles.cardWrap,
              this.state.styles,
              {borderBottomLeftRadius: 0, borderBottomRightRadius: 0},
            ]}>
            <TouchableOpacity
              onPress={this.aboutUs.bind(this,'关于我们')}
              style={[styles.card,{marginBottom:20}]}>
              <FontAwesome name="users" size={45} color="#999" />
              <Text
                style={[
                  styles.Text,
                  {color: this.props.bgc.replace('f55', 'fff')},
                ]}>
                关于我们
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    );
  }
  aboutUs(pageName) {
    this.props.navigation.navigate('AboutUs', {
      hi: pageName,
      userName: this.props.userName,
      callback: () => this.routerJump(pageName),
    });
  }
  routerJump = (msg) => {
    console.log(msg);
  }
  toggleTheme = style => {
    if (style == 'two') {
      this.setState({
        checked: style,
        styles: {transform: [{translateX: 30}]},
      });
    } else {
      this.setState({
        checked: style,
        styles: {},
      });
    }
  };
  Press() {
    console.log('ok');
  }
}

const styles = StyleSheet.create({
  toggleTheme: {
    height: 70,
    flexDirection: 'row',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
  secondMenu: {
    marginTop: 0,
  },
  Text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    marginLeft: 20,
  },
  card: {
    height: 100,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 30,
  },
  toggle: {
    transform: [{translateX: 30}],
  },
  cardWrap: {
    justifyContent: 'center',
    // flex: 1,
    height: 120,
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
    // borderColor: '#f66',
    // borderWidth: 1,
    borderRadius: 30,
    marginTop: 10,
    elevation: 2,
    shadowColor: '#fff',
    shadowOffset: {h: 1, w: 1},
    shadowRadius: 1,
    shadowOpacity: 1,
    marginLeft: 5,
    marginRight: 5,
  },
  linearGradient: {
    borderRadius: 10,
    elevation: 10,
    shadowColor: '#ccc',
    shadowOffset: {h: 10, w: 10},
    shadowRadius: 5,
    shadowOpacity: 0.3,
  },
  scrollInnerBox: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  contentContainer: {
    paddingVertical: 20,
    // backgroundColor: '#ffe'
  },
  scrollView: {
    marginTop: 30,
    height: 100,
  },
  border: {
    flex: 1,
    minHeight: 700,
    transform: [{translateY: -20}, {scaleX: 1.01}],
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#f77',
    borderBottomWidth: 0,
  },
});
