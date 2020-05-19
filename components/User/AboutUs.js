import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Linking,
  TouchableOpacity,
} from 'react-native';
import {Card, Button} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const users = [
  {
    name: 'Hongbin',
    avatar:
      'https://img-blog.csdnimg.cn/20200424145707969.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3ByaW50Zl9oZWxsbw==,size_16,color_FFFFFF,t_70',
  },
];

export default class AboutUs extends Component {
  state = {
    params: this.props.navigation.state.params,
  };
  open = () => {
    let url = 'http://www.hongbin.xyz';
    Linking.canOpenURL(url)
      .then(supported => {
        if (!supported) {
          console.log("Can't handle url: " + url);
          Alert.alert('提示', "Can't handle url: " + url, [
            {text: 'OK', onPress: () => {}},
          ]);
        } else {
          return Linking.openURL(url);
        }
      })
      .catch(err => {
        console.log('An error occurred', err);
        Alert.alert('提示', 'An error occurred: ' + err, [
          {text: 'OK', onPress: () => {}},
        ]);
      });
  };
  render() {
    //console.log(this.props);
    return (
      <View style={{ flex: 1, backgroundColor: '#fff'}}>
        {/* 我的钱包 */}
        <View
          style={this.state.params.hi !== '我的钱包' ? styles.displayNone : {}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('AddYinHangCard',{userName:this.state.params.userName})}>
            <View style={styles.addCar}>
              <FontAwesome name="plus" size={25} />
              <Text style={{fontSize: 22, marginLeft: 20}}>添加银行卡</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* 优惠卷 */}
        <View
          style={this.state.params.hi !== '优惠卷' ? styles.displayNone : {}}>
          <Text style={styles.Text}>
            暂无优惠卷可用，可关注官方公众号，领取大额优惠卷
          </Text>
          <Card title="Hi Friends">
            {users.map((u, i) => {
              return (
                <View key={i} style={styles.user}>
                  <Image
                    style={styles.image}
                    resizeMode="contain"
                    source={{uri: u.avatar}}
                  />
                  <Text style={styles.name} onPress={this.open}>
                    {u.name} 点击去我们的网站看看
                  </Text>
                </View>
              );
            })}
          </Card>
        </View>
        {/* 关于我们 */}
        <View
          style={this.state.params.hi !== '关于我们' ? styles.displayNone : {}}>
          <Card title="Hi Friends">
            {users.map((u, i) => {
              return (
                <View key={i} style={styles.user}>
                  <Image
                    style={styles.image}
                    resizeMode="contain"
                    // source={require('../../assets/images/other/6.jpg')}
                    source={{uri: u.avatar}}
                  />
                  <Text style={styles.name} onPress={this.open}>
                    {u.name} 点击去我们的网站看看
                  </Text>
                </View>
              );
            })}
          </Card>
        </View>

        {/* <Button
          title="CallBack"
          onPress={() => {
            this.props.navigation.state.params.callback();
          }}
        /> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  addCar: {
    justifyContent: 'flex-start',
    paddingLeft: 40,
    flexDirection: 'row',
    height: 80,
    alignItems: 'center',
    borderRadius: 10,
    margin: 20,
    backgroundColor: '#fff',
    elevation: 5,
    shadowRadius: 10,
    shadowOpacity: 5,
  },
  Text: {
    textAlign: 'center',
  },
  image: {
    height: 200,
  },
  displayNone: {
    display: 'none',
  },
});
