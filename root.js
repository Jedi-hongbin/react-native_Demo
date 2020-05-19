import React, {Component} from 'react';
import {StyleSheet, View, Animated} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

// import Icon from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Home from './components/Home/Home';
import ShoppingCar from './components/ShoppingCar/ShoppingCar';
import User from './components/User/User';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

const initialState = {
  action: [],
}

const reducer = ( state = initialState, action ) => {
  //console.log(action)
  switch (action.type){
    case 'changeAction' :
      state.action.unshift(action.data)
      return state
      // return {action: action.data }
    default : 
      return state
  }
}

const store = createStore(reducer)

const dataSource = [
  {
    icon: 'home',
    selectedIcon: 'home',
    tabPage: 'Home',
    tabName: '首页',
    component: Home,
    color: '#1C86EE',
    selectedColor: '#9A32CD',
  },
  {
    icon: 'shopping-cart',
    selectedIcon: 'shopping-cart',
    tabPage: 'ShoppingCar',
    tabName: '购物🚗',
    component: ShoppingCar,
    color: '#1C86EE',
    selectedColor: '#9A32CD',
  },
  {
    icon: 'user',
    selectedIcon: 'user',
    tabPage: 'User',
    tabName: '个人中♥',
    component: User,
    color: '#1C86EE',
    selectedColor: '#9A32CD',
  },
];

var navigation = null;

class Root extends Component {
  constructor(props) {
    super(props);
    navigation = this.props.navigation;
    this.state = {
      selectedTab: 'Home',
      tabBarBGC: '#FFEBCD',
      scale: new Animated.Value(1)
    };
  }

  changeTabBarBGC = color => {
    this.setState({tabBarBGC: color});
  };
  render() {
    let tabViews = dataSource.map((item, i) => {
      return (
        <TabNavigator.Item
          title={item.tabName}
          selected={this.state.selectedTab === item.tabPage}
          titleStyle={{color: '#00f', fontSize: 13}}
          selectedTitleStyle={{color: '#9A32CD'}}
          renderIcon={() => (
            <FontAwesome
              style={styles.tabIcon}
              name={item.icon}
              color={item.color}
            />
          )}
          renderSelectedIcon={() => (
            <FontAwesome
              style={styles.tabIcon}
              name={item.selectedIcon}
              color={item.selectedColor}
            />
          )}
          tabStyle={{
            alignSelf: 'center',
            backgroundColor: this.state.tabBarBGC.replace('B3B3B3', '999').replace('fff','FFEBCD')
          }}
          onPress={() => {
            this.setState({selectedTab: item.tabPage});
          }}
          key={i}>
          <item.component
            changeTabBarBGC={this.changeTabBarBGC}
            scalePage={this.scalePage}
            navigation={navigation}
            tabBarBGC={this.state.tabBarBGC}
          />
        </TabNavigator.Item>
      );
    });
    return (
      <Provider store = {store}>
      <Animated.View ref="root" style={{flex: 1, backgroundColor: this.state.tabBarBGC.replace('fff','fffeee'), transform:[{scale:this.state.scale}]}}>
        <TabNavigator
         tabBarStyle={styles.tab}
         hidesTabTouch={false}>
          {tabViews}
        </TabNavigator>
      </Animated.View>
      </Provider>
    );
  }
  scalePage = (toValue) => {
    Animated.timing(this.state.scale,{
      toValue,
      duration:400,
      useNativeDriver:false
    }).start()
  }
}

export default Root

const styles = StyleSheet.create({
  tab: {
    height: 60,
    backgroundColor: '#fff'
  },
  container: {
    flex: 1,
  },
  tabIcon: {
    fontSize: 30,
    marginTop: 20,
  },
});
