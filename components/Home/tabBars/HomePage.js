import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import Carousel from '../Carousel';
import {ScrollView} from 'react-native-gesture-handler';
import Card from '../Card';
import Grid from '../Grid'
import GoodsLists from '../GoodsLists'

const GridSource = [
  'https://img11.360buyimg.com/babel/s240x240_jfs/t1/119465/40/5555/604228/5ebe9505E7bcf4cd8/1c133b11c9287e3b.jpg!cc_120x120.webp',
  'https://img11.360buyimg.com/mobilecms/s200x200_jfs/t1/99859/13/18625/110223/5e95607cE27726c4b/3e4ae787b88642e3.jpg.webp',
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
      'https://img20.360buyimg.com/babel/s320x320_jfs/t1/49752/36/7321/82300/5d4ce47fEc8a6835a/633245d4aa900e6f.jpg!cc_320x320.webp',
    title: '韩国进口 AHC 透明质酸神仙水乳礼盒套装',
    price: 3999.0,
  },
  {
    uri:
      'https://img11.360buyimg.com/n2/jfs/t1/35476/20/5941/102134/5cc17ec0E20c57316/eda414b167308e82.jpg!q80.webp',
    title: '卡帝乐鳄鱼(CARTELO)行李箱女 轻便耐磨拉杆箱',
    price: '暂无报价',
  },
  {
    uri:
      'https://m.360buyimg.com/babel/jfs/t1/83370/31/7293/104625/5d53cbecEc942fef5/fee03bcd29d3b1fc.jpg!q90',
    title: '圣罗兰(YSL)小金条口红细管哑光雾',
    price: 249,
  },
  {
    uri:
      'https://img12.360buyimg.com/n7/jfs/t1/127467/34/1487/235698/5ebd06baE45e4ea24/f5a2087b67a078f3.jpg',
    title: '一加OnePlus 8 5G旗舰 90Hz高清柔性屏',
    price: 3999.0,
  },
  {
    uri:
      'https://img20.360buyimg.com/babel/s320x320_jfs/t1/49752/36/7321/82300/5d4ce47fEc8a6835a/633245d4aa900e6f.jpg!cc_320x320.webp',
    title: '韩国进口 AHC 透明质酸神仙水乳礼盒套装',
    price: 3999.0,
  },
  {
    uri:
      'https://img11.360buyimg.com/n2/jfs/t1/35476/20/5941/102134/5cc17ec0E20c57316/eda414b167308e82.jpg!q80.webp',
    title: '卡帝乐鳄鱼(CARTELO)行李箱女 轻便耐磨拉杆箱',
    price: '暂无报价',
  },
  {
    uri:
      'https://m.360buyimg.com/babel/jfs/t1/83370/31/7293/104625/5d53cbecEc942fef5/fee03bcd29d3b1fc.jpg!q90',
    title: '圣罗兰(YSL)小金条口红细管哑光雾',
    price: 249,
  },
];

export default class HomePage extends Component {
  render () {
    return (
      <View style={{marginBottom: 60}}>
        <View style={styles.swiper}>
          {/* 轮播图 */}
          <Carousel />
        </View>
        {/* 活动卡片 */}
        <ScrollView
          contentContainerStyle={styles.contentContainerStyle}
          showsHorizontalScrollIndicator={false}
          horizontal={true}>
          <Card
            Source={{
              uri:
                'https://img10.360buyimg.com/pop/s1180x940_jfs/t1/116985/24/6823/92960/5ebd1885E7acad40f/e5db1df43ba48a2e.jpg.webp',
            }}
          />
          <Card
            Source={{
              uri:
                'https://img14.360buyimg.com/pop/s1180x940_jfs/t1/123000/29/1170/93474/5eba20d9Ef2a9ac3b/ad4e2c6c34991d43.jpg.webp',
            }}
          />
          <Card
            Source={{
              uri:
                'https://img14.360buyimg.com/pop/s1180x940_jfs/t1/98780/13/17230/80459/5e830be6E2768a3b3/6e6bd8a164238744.jpg.webp',
            }}
          />
          <Card
            Source={{
              uri:
                'https://imgcps.jd.com/ling/6533301/56m66LCD5paw5qy-6YCf6YCS/5Lq65rCU55av5oqi5Zeo57-75aSp/p-5bd8253082acdd181d02f9f2/8b8c340f/590x470.jpg',
            }}
          />
        </ScrollView>
        {/* 宫格商品汇总 */}
        <Grid Source={GridSource} tabBarBGC={this.props.tabBarBGC} />
        {/* 推荐商品 */}
        <GoodsLists {...this.props} navigation={this.props.navigation} data={data} title='推荐好物' tabBarBGC={this.props.tabBarBGC} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  swiper: {
    height: 170,
    borderRadius: 15,
    marginLeft: 10,
    marginRight: 10,
    padding: 0,
    backgroundColor: '#fff',
    overflow: 'hidden',
    elevation: 4,
  },
});
