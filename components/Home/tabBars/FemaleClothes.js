import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Grid from '../Grid'
import GoodsLists from '../GoodsLists'
const GridSource = [
  'https://img10.360buyimg.com/jdcms/s300x300_jfs/t1/66310/27/8087/136131/5d5fc938E73358e1f/a7ec15c0e58a4dce.jpg.webp',
  'https://img20.360buyimg.com/jdcms/s300x300_jfs/t1/103996/31/18001/163065/5e8f124cE6483cf57/e1b979f97a9088d4.jpg.webp',
  'http://p1.global.jmstatic.com/product/005/017/5017840_std/5017840_dx_640_400.jpg',
  'https://img30.360buyimg.com/babel/s580x740_jfs/t1/126922/35/147/30270/5eb3a4f3E983ed94a/a99952687870e42d.jpg!cc_290x370.webp',
  'https://img13.360buyimg.com/babel/s580x740_jfs/t1/115701/10/3500/198423/5ea8eed5E4e8a3630/4efaad28998615eb.jpg!cc_290x370.webp',
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
];
export default class FamaleClothes extends Component {
  render () {
    return (
      <View style={{marginBottom: 60}}>
        <Grid Source = {GridSource} tabBarBGC={this.props.tabBarBGC}/>
        <GoodsLists {...this.props} data={data} title='推荐好物' tabBarBGC={this.props.tabBarBGC} />
      </View>
    )
  }
}
