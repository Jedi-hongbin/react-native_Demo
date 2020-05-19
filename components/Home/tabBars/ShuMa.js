import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Grid from '../Grid'
import GoodsLists from '../GoodsLists'
const GridSource = [
  'https://img11.360buyimg.com/babel/s320x320_jfs/t1/21928/33/1065/321818/5c0f8898Ea4e7b42f/bb098f4d98a6167a.png!cc_320x320.webp',
  'https://img20.360buyimg.com/babel/s320x320_jfs/t1/105418/1/3954/46123/5de4c49cE8a2aee30/0816c8238f356b08.jpg!cc_320x320.webp',
  'https://img11.360buyimg.com/babel/s1580x840_jfs/t1/127070/8/1633/148744/5ebdfc6fE813c1bec/308853f88fc70d87.jpg!cc_1580x840.webp',
  'https://img13.360buyimg.com/aotucms/jfs/t1/66677/5/5451/26482/5d394cd6Efbf1708c/6a6410971aeba411.jpg',
  'https://img30.360buyimg.com/babel/s320x320_jfs/t1/102634/20/15545/118290/5e719146Ef7a36505/2b8d493cac2cf88a.jpg!cc_320x320.webp',
  'https://img12.360buyimg.com/jdcms/s300x300_jfs/t1/39428/21/3706/115528/5cc661e2E51d72c0c/0da027ba120bfdad.jpg.webp',
  'https://img30.360buyimg.com/jdcms/s300x300_jfs/t1/101999/1/1209/178631/5dbbd6d5E7cdab0c0/f89bc69b6e9811c6.jpg.webp',
  'https://img10.360buyimg.com/jdcms/s300x300_jfs/t1/101282/20/10829/181760/5e217d7aEc8650510/432f92e506eca44b.jpg.webp',
  'https://img11.360buyimg.com/jdcms/s300x300_jfs/t1/127031/17/1623/246176/5ebe58e0E1017f5a2/54c0df6c950ba481.jpg.webp'
]
const data = [
  {
    uri:
      'https://img12.360buyimg.com/n7/jfs/t1/127467/34/1487/235698/5ebd06baE45e4ea24/f5a2087b67a078f3.jpg',
    title: '一加OnePlus 8 5G旗舰 90Hz高清柔性屏',
    price: 3999.0,
  },
  {
    uri:
      'https://img12.360buyimg.com/n7/jfs/t1/127467/34/1487/235698/5ebd06baE45e4ea24/f5a2087b67a078f3.jpg',
    title: '一加OnePlus 8 5G旗舰 90Hz高清柔性屏',
    price: 3999.0,
  },
  {
    uri:
      'https://img12.360buyimg.com/n7/jfs/t1/127467/34/1487/235698/5ebd06baE45e4ea24/f5a2087b67a078f3.jpg',
    title: '一加OnePlus 8 5G旗舰 90Hz高清柔性屏',
    price: 3999.0,
  },
  {
    uri:
      'https://img12.360buyimg.com/n7/jfs/t1/127467/34/1487/235698/5ebd06baE45e4ea24/f5a2087b67a078f3.jpg',
    title: '一加OnePlus 8 5G旗舰 90Hz高清柔性屏',
    price: 3999.0,
  },
  {
    uri:
      'https://img12.360buyimg.com/n7/jfs/t1/127467/34/1487/235698/5ebd06baE45e4ea24/f5a2087b67a078f3.jpg',
    title: '一加OnePlus 8 5G旗舰 90Hz高清柔性屏',
    price: 3999.0,
  },
  {
    uri:
      'https://img12.360buyimg.com/n7/jfs/t1/127467/34/1487/235698/5ebd06baE45e4ea24/f5a2087b67a078f3.jpg',
    title: '一加OnePlus 8 5G旗舰 90Hz高清柔性屏',
    price: 3999.0,
  },
  {
    uri:
      'https://img12.360buyimg.com/n7/jfs/t1/127467/34/1487/235698/5ebd06baE45e4ea24/f5a2087b67a078f3.jpg',
    title: '一加OnePlus 8 5G旗舰 90Hz高清柔性屏',
    price: 3999.0,
  },
  {
    uri:
      'https://img12.360buyimg.com/n7/jfs/t1/127467/34/1487/235698/5ebd06baE45e4ea24/f5a2087b67a078f3.jpg',
    title: '一加OnePlus 8 5G旗舰 90Hz高清柔性屏',
    price: 3999.0,
  },
];
export default class ShuMa extends Component {
  render () {
    return (
      <View style={{marginBottom: 60}}>
        <Grid Source = {GridSource} tabBarBGC={this.props.tabBarBGC}/>
        <GoodsLists {...this.props} navigation={this.props.navigation} data={data} title='推荐好物' tabBarBGC={this.props.tabBarBGC} />
      </View>
    )
  }
}
