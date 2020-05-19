import React, {Component} from 'react';
import {
  Text,
  View,
  Button,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import SearchBar from './SearchBar';
import HomePage from './tabBars/HomePage';
import ShuMa from './tabBars/ShuMa';
import MaleClothes from './tabBars/MaleClothes';
import FemaleClothes from './tabBars/FemaleClothes';
const screenWidth = Dimensions.get('window').width;
const selected = {
  borderBottomWidth: 2,
  borderColor: '#fff',
  color: '#fff',
  fontWeight: 'bold',
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HomePage: {...selected},
      ShuMa: {},
      MaleClothes: {},
      FemaleClothes: {},
      ZhuBao: {},
      DianQi: {},
      Fruits: {},
      Books: {},
      currentPage: 'HomePage',
    };
  }

  componentDidMount() {
    // console.log(this.refs.HomePage)
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={[
            styles.Title,
            {
              backgroundColor: this.props.tabBarBGC
                .replace('fff', 'f66')
                .replace('B3B3B3', 'ddd')
                .replace('FFEBCD', 'f66'),
              width: screenWidth + 40,
            },
          ]}
        />
        <View style={styles.Body}>
          <SearchBar
            navigation={this.props.navigation}
            tabBarBGC={this.props.tabBarBGC}
          />
          <ScrollView
            style={{
              maxHeight: 120,
              marginVertical: 10,
              zIndex: 10,
              backgroundColor: this.props.tabBarBGC
                .replace('fff', 'f66')
                .replace('B3B3B3', 'ddd')
                .replace('FFEBCD', 'f66'),
            }}
            showsHorizontalScrollIndicator={false}
            horizontal={true}>
            <Text
              onPress={this.selected.bind(this, 'HomePage')}
              style={[styles.TabBar, this.state.HomePage]}>
              首页
            </Text>
            <Text
              onPress={this.selected.bind(this, 'ShuMa')}
              style={[styles.TabBar, this.state.ShuMa]}>
              数码
            </Text>
            <Text
              onPress={this.selected.bind(this, 'MaleClothes')}
              style={[styles.TabBar, this.state.MaleClothes]}>
              男装
            </Text>
            <Text
              onPress={this.selected.bind(this, 'FemaleClothes')}
              style={[styles.TabBar, this.state.FemaleClothes]}>
              女装
            </Text>
            <Text
              onPress={this.selected.bind(this, 'ZhuBao')}
              style={[styles.TabBar, this.state.ZhuBao]}>
              珠宝
            </Text>
            <Text
              onPress={this.selected.bind(this, 'DianQi')}
              style={[styles.TabBar, this.state.DianQi]}>
              电器
            </Text>
            <Text
              onPress={this.selected.bind(this, 'Fruits')}
              style={[styles.TabBar, this.state.Fruits]}>
              果蔬
            </Text>
            <Text
              onPress={this.selected.bind(this, 'Books')}
              style={[styles.TabBar, this.state.Books]}>
              书籍
            </Text>
          </ScrollView>
          <ScrollView
            style={{
              paddingTop: 60,
              transform: [{translateY: -60}],
              marginBottom: -60,
            }}
            showsVerticalScrollIndicator={false}>
            <View
              style={{
                display:
                  this.state.currentPage === 'HomePage' ? 'flex' : 'none',
              }}>
              <HomePage
                navigation={this.props.navigation}
                tabBarBGC={this.props.tabBarBGC}
                {...this.props}
              />
            </View>

            <View
              style={{
                display: this.state.currentPage === 'ShuMa' ? 'flex' : 'none',
              }}>
              <ShuMa
                navigation={this.props.navigation}
                tabBarBGC={this.props.tabBarBGC}
                {...this.props}
              />
            </View>

            <View
              style={{
                display:
                  this.state.currentPage === 'MaleClothes' ? 'flex' : 'none',
              }}>
              <MaleClothes
                navigation={this.props.navigation}
                tabBarBGC={this.props.tabBarBGC}
                {...this.props}
              />
            </View>

            <View
              style={{
                display:
                  this.state.currentPage === 'FemaleClothes' ? 'flex' : 'none',
              }}>
              <FemaleClothes
                navigation={this.props.navigation}
                tabBarBGC={this.props.tabBarBGC}
                {...this.props}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }

  selected(selectedName) {
    this.setState(
      {
        HomePage: {},
        ShuMa: {},
        MaleClothes: {},
        FemaleClothes: {},
        ZhuBao: {},
        DianQi: {},
        Fruits: {},
        Books: {},
        currentPage: selectedName,
      },
      () => {
        switch (selectedName) {
          case 'HomePage':
            this.setState({HomePage: {...selected}});
            break;
          case 'ShuMa':
            this.setState({ShuMa: {...selected}});
            break;
          case 'MaleClothes':
            this.setState({MaleClothes: {...selected}});
            break;
          case 'FemaleClothes':
            this.setState({FemaleClothes: {...selected}});
            break;
          case 'ZhuBao':
            this.setState({ZhuBao: {...selected}});
            break;
          case 'DianQi':
            this.setState({DianQi: {...selected}});
            break;
          case 'Fruits':
            this.setState({Fruits: {...selected}});
            break;
          case 'Books':
            this.setState({Books: {...selected}});
            break;
        }
      },
    );
  }
}

const styles = StyleSheet.create({
  TabBar: {
    fontSize: 20,
    color: '#fffae5',
    marginLeft: 20,
    marginRight: 20,
    alignSelf: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    marginTop: 20,
    marginBottom: 20,
  },
  Title: {
    backgroundColor: '#f66',
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    position: 'absolute',
    height: 280,
    marginLeft: -15,
  },
  Body: {
    flex: 1,
  },
});

function mapStateToProps(state) {
  return state;
  // return {action: state.action};
}

function mapDispatchToProps(dispatch) {
  return {
    changeAction: (type,data) =>
      dispatch({
        type,
        data
      }),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
