import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  findNodeHandle,
  UIManager,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
export default class Comment extends Component {
  screenWidth = Dimensions.get('window').width;
  screenHeight = Dimensions.get('window').height;

  state = {
    userHeadIcon: '',
  };
  componentDidMount() {
    this.getUserHeaderIcon();
  }
  render() {
    return (
      <View style={{}}>
        <View style={{marginTop:10,height:this.screenHeight}}>
          <View style={[styles.Header, {width: this.screenWidth - 10}]}>
            <View style={styles.title}>
              <LinearGradient
                colors={['#0f0', '#fff']}
                start={{
                  x: 0,
                  y: 0,
                }}
                end={{
                  x: 0,
                  y: 1,
                }}
                locations={[0.2, 1]}
                style={{width: 5, height: 20, marginRight: 5}}
              />
              <Text>
                评论 <Text style={{fontSize: 12, color: '#999'}}>3+</Text>
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.container,
              {width: this.screenWidth - 10, paddingBottom: 50},
            ]}>
            <View style={styles.select}>
              <TouchableOpacity style={styles.selectState}>
                <Text style={styles.Text}>物流飞块</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.selectState}>
                <Text style={styles.Text}>质量超好</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.selectState}>
                <Text style={styles.Text}>服务态度超好</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.selectState}>
                <Text style={styles.Text}>物流飞块</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.selectState}>
                <Text style={styles.Text}>质量超好</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.selectState}>
                <Text style={styles.Text}>服务态度超好</Text>
              </TouchableOpacity>
            </View>
            <View>
              <View style={styles.commentCard}>
                <View style={styles.commentInner}>
                  <Image
                    source={this.state.userHeadIcon || ''}
                    style={styles.userHeaderIcon}
                    resizeMode="cover"
                  />
                  <Text style={styles.userName}>匿名用户</Text>
                </View>
                <View style={styles.content}>
                  <Text>好东西，干了，兄弟们</Text>
                </View>
              </View>
              <View style={styles.commentCard}>
                <View style={styles.commentInner}>
                  <Image
                    source={this.state.userHeadIcon || ''}
                    style={styles.userHeaderIcon}
                    resizeMode="cover"
                  />
                  <Text style={styles.userName}>匿名用户</Text>
                </View>
                <View style={styles.content}>
                  <Text>奥力给，干就完了，兄弟们</Text>
                </View>
              </View>
            </View>
            {/* 评论按钮 */}
            <TouchableOpacity style={styles.commentBtn}>
              <Text style={{textAlign: 'center'}}>购买后评论</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  // 从asyncStorage中获取用户头像，虽然没什么卵用
  getUserHeaderIcon = async () => {
    try {
      const value = await AsyncStorage.getItem('userHeadIcon');
      if (value !== null) {
        this.setState({userHeadIcon: JSON.parse(value)});
      }
    } catch (error) {
      console.log(error);
    }
  };
}

const styles = StyleSheet.create({
  commentBtn: {
    borderWidth: 1,
    borderColor: '#0f9',
    padding: 10,
    borderRadius: 10,
    marginLeft: 100,
    marginRight: 100,
    marginTop: 20,
  },
  commentCard: {
    marginTop: 10,
  },
  content: {
    marginLeft: 15,
    marginRight: 5,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    minHeight: 50,
  },
  userName: {
    lineHeight: 20,
    marginLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    width: 200,
  },
  commentInner: {
    padding: 10,
    backgroundColor: '#fffff9',
    borderRadius: 1,
    flexDirection: 'row',
  },
  userHeaderIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  Text: {
    textAlign: 'center',
    lineHeight: 18,
    color: '#666',
    marginLeft: 1,
    marginRight: 1,
  },
  selectState: {
    borderRadius: 7,
    borderWidth: 1,
    maxHeight: 20,
    borderColor: '#999',
    marginLeft: 20,
    marginTop: 10,
  },
  select: {
    marginTop: 30,
    minHeight: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 10,
    position: 'absolute',
    zIndex: -10,
    margin: 5,
  },
  title: {
    margin: 5,
    flexDirection: 'row',
  },
  Header: {
    margin: 5,
    elevation: 5,
    backgroundColor: '#fffeee',
    borderRadius: 5,
    position: 'absolute',
  },
});
