import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Carousel} from '@ant-design/react-native';
import CarouselView from './CarouselView'
export default class carousel extends Component {
  state = {
    carouselIndex: 0
  }
  render () {
    return (
      <View style={{ elevation: 5 , overflow: 'hidden'}}>
        <Carousel
          autoplay
          infinite
          // dotStyle={{borderRadius: 0}}
          dotActiveStyle={{backgroundColor: '#fff'}}
          selectedIndex={this.state.carouselIndex}
          afterChange={this.onHorizontalSelectedIndexChange}>
          <CarouselView
            ImageURI={{
              uri:
                'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3697767565,3455479415&fm=15&gp=0.jpg',
            }}
          />
          <CarouselView
            ImageURI={{
              uri:
                'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2427129279,3461656510&fm=26&gp=0.jpg',
            }}
          />
          <CarouselView
            ImageURI={{
              uri:
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589615677372&di=65b1cfd6423f489b91fe97d218397af3&imgtype=0&src=http%3A%2F%2Fi1.ileehoo.com%2Fupload%2Fimages%2F2012-05%2F20120528170403138.jpg',
            }}
          />
          <CarouselView
            ImageURI={{
              uri:
                'https://img.alicdn.com/bao/uploaded/i3/368880029/O1CN01eZoL3A1C5K3Cx6ldb_!!0-saturn_solar.jpg_.webp',
            }}
          />
        </Carousel>
      </View>
    );
  }
  onHorizontalSelectedIndexChange = (carouselIndex) => {
    this.setState({
      carouselIndex
    })
  }
}
