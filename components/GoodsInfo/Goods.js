import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  Modal,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
  CameraRoll,
  StyleSheet,
  UIManager,
  findNodeHandle
} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Comment from './Comment'
import Info from './Info'

export default class GoodsInfo extends Component {
  state = {
    modalVisible: false,
    isLove: false,
  };
  screenWidth = Dimensions.get('window').width;
  screenHeight = Dimensions.get('window').height;
  componentDidMount(){
    this.FindNodeHandle()
  }
  render() {
    return (
      <View>
        <TouchableOpacity
          style={{
            width: 300,
            height: 300,
            marginLeft: 10,
            marginRight: 'auto',
            marginTop: 20,
            backgroundColor: '#ddd',
            elevation: 5,
          }}
          onPress={() => this.setState({modalVisible: true})}>
          <Image
            source={{uri: this.props.uri}}
            style={{
              width: 300,
              height: 300,
            }}
            resizeMode="cover"
          />
        </TouchableOpacity>
        {/* 商品缩略图 */}
        <Modal
          visible={this.state.modalVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={() => this.setState({modalVisible: false})}>
          <ImageViewer
            loadingRender={this.renderLoad}
            onSave={this.savePhoto} // 保存图片函数
            menuContext={{saveToLocal: '保存图片', cancel: '取消'}}
            imageUrls={[{url: this.props.uri}]}
          />
        </Modal>
        <View>
          <View
            style={[
              styles.Header,
              {width: this.screenWidth - 10, height: 120},
            ]}>
            <Text style={[styles.price]}>
              {isNaN(this.props.price) ? '' : '￥'}
              {this.props.price}
            </Text>
            <TouchableOpacity
              onPress={this.love}
              style={{position: 'absolute', top: 30, right: 30}}>
              <FontAwesome
                name={this.state.isLove ? 'heart' : 'heart-o'}
                size={25}
                color={this.state.isLove ? '#f22' : '#ddd'}
              />
            </TouchableOpacity>
            <Text style={[styles.title]}>{this.props.title}</Text>
          </View>
        </View>
        <View style={styles.YouHui}>
          <View style={{flexDirection: 'row'}}>
            <Text>参数</Text>
            <View
              style={[
                styles.YouHuiCard,
                {
                  width: 300,
                  paddingBottom: 5,
                  borderBottomColor: '#ccc',
                  borderBottomWidth: 1,
                  marginBottom: 5,
                },
              ]}>
              <Text style={{textAlign: 'right',marginRight: 10}}>
                <FontAwesome name="ellipsis-h" size={18} color='#666' />
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>优惠</Text>
            <View
              style={[
                styles.YouHuiCard,
                {
                  width: 300,
                  paddingBottom: 5,
                  borderBottomColor: '#ccc',
                  borderBottomWidth: 1,
                },
              ]}>
              <Text style={[styles.border, {width: 30, textAlign: 'center'}]}>
                满减
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text>活动</Text>
            <View style={styles.YouHuiCard}>
              <Text style={{fontSize: 12, lineHeight: 20}}>暂无</Text>
            </View>
          </View>
        </View>
        <Comment ref='comment' />
        <Info />
      </View>
    );
  }
  love = () => {
    this.setState({isLove: !this.state.isLove});
  };
  savePhoto = url => {
    console.log('不想骗你，这个需求做不了，自己截屏吧');
    // Toast.info('不想骗你，这个需求做不了，自己截屏吧')
    //android 要求url必须是本地地址 file://xxx.png , 不能是网络地址https://xxx
    // CameraRoll.saveToCameraRoll(url)
    //   .then(function(result) {
    //     alert('已保存到系统相册');
    //   })
    //   .catch(function(error) {
    //     alert('保存失败！\n' + error);
    //   });
  };
  renderLoad = () => {
    //这里是写的一个loading
    return (
      <View style={{marginTop: Dimensions.get('window').width / 2 - 20}}>
        <ActivityIndicator animating={this.state.animating} size={'large'} />
      </View>
    );
  };
  FindNodeHandle = () => {
    let NodeHandle = findNodeHandle(this.refs.comment);
    UIManager.measure(NodeHandle, (x, y, width, height, pageX, pageY) => {
      //console.log(x, y, width, height, pageX, pageY);
    });
  };
}
const styles = StyleSheet.create({
  border: {
    borderWidth: 1,
    borderColor: '#f88',
    borderRadius: 4,
    fontSize: 12,
    color: '#f88',
    padding: 1,
  },
  YouHuiCard: {
    marginLeft: 10,
  },
  YouHui: {
    elevation: 5,
    marginTop: 20,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom:10
  },
  Header: {
    marginLeft: 5,
    marginRight: 5,
    elevation: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginTop: 20,
  },
  price: {
    color: '#f00',
    fontWeight: 'bold',
    margin: 20,
    fontSize: 30,
    marginBottom: 10,
  },
  title: {
    marginLeft: 20,
    fontWeight: 'bold',
  },
  Main: {
    // backgroundColor: '#fffae5'
  },
});
