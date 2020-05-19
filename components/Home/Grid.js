import React, {Component} from 'react';
import {Text, View, Dimensions, Image, StyleSheet} from 'react-native';

export default class Grid extends Component {
  render () {
    return (
      <View
        style={[
          styles.Grid,
          {
            backgroundColor: this.props.tabBarBGC.replace('B3B3B3', 'ddd'),
            width: Dimensions.get('window').width - 10,
          },
        ]}>
        <View style={styles.GridItem}>
          <View style={[styles.Item, styles.mRZero]}>
            <View style={[styles.Item, styles.bgWhite, {flexDirection: 'row'}]}>
              <View style={[styles.Item, styles.bgWhite]}>
                <Image
                  style={styles.Image}
                  source={{
                    uri: this.props.Source[0],
                  }}
                  resizeMode="cover"
                />
              </View>
              <View style={[styles.Item, styles.bgWhite]}>
                <Image
                  style={styles.Image}
                  source={{
                    uri: this.props.Source[1],
                  }}
                  resizeMode="cover"
                />
              </View>
            </View>
            {/* 第一个宫格左侧下面 */}
            <View style={[styles.Item, styles.bgWhite]}>
              <Image
                style={styles.Image}
                source={{
                  uri: this.props.Source[2],
                }}
                resizeMode="cover"
              />
            </View>
          </View>
          {/* 右侧大宫格 */}
          <View style={styles.Item}>
            <View style={[styles.Item, styles.bgWhite]}>
              <Image
                style={styles.Image}
                source={{
                  uri: this.props.Source[3],
                }}
                resizeMode="stretch"
              />
            </View>
          </View>
        </View>
        {/* 下面的宫格 */}
        <View style={[styles.GridItem, { marginBottom: 5 }]}>
          <View style={styles.Item}>
            <View style={[styles.Item, styles.bgWhite]}>
              <Image
                style={styles.Image}
                source={{
                  uri: this.props.Source[4],
                }}
                resizeMode="cover"
              />
            </View>
          </View>
          <View style={[styles.Item, styles.mRZero]}>
            <View style={[styles.Item, styles.bgWhite, {flexDirection: 'row'}]}>
              <View style={[styles.Item, styles.bgWhite]}>
                <Image
                  style={styles.Image}
                  source={{
                    uri: this.props.Source[5],
                  }}
                  resizeMode="cover"
                />
              </View>
              <View style={[styles.Item, styles.bgWhite]}>
                <Image
                  style={styles.Image}
                  source={{
                    uri: this.props.Source[6],
                  }}
                  resizeMode="cover"
                />
              </View>
            </View>
            <View style={[styles.Item, styles.bgWhite, {flexDirection: 'row'}]}>
              <View style={[styles.Item, styles.bgWhite]}>
                <Image
                  style={styles.Image}
                  source={{
                    uri: this.props.Source[7],
                  }}
                  resizeMode="cover"
                />
              </View>
              <View style={[styles.Item, styles.bgWhite]}>
                <Image
                  style={styles.Image}
                  source={{
                    uri: this.props.Source[8],
                  }}
                  resizeMode="cover"
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Image: {
    flex: 1,
    borderRadius: 3,
  },
  mRZero: {marginRight: 0},
  bgWhite: {backgroundColor: '#fffae5'},
  Item: {
    flex: 1,
    margin: 3,
    borderRadius: 5,
    elevation: 3,
    overflow: 'hidden',
  },
  GridItem: {
    flexDirection: 'row',
    // backgroundColor: '#aaa',
    flex: 1,
    margin: 2,
    marginBottom: 0,
  },
  Grid: {
    borderRadius: 5,
    height: 450,
    marginLeft: 5,
    marginRight: 5
  },
});
