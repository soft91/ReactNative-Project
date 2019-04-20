import * as React from 'react';
import { View, Animated, TouchableOpacity, StyleSheet, ToastAndroid, BackHandler } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import GsRouter from './Component/gs/gs';
import SevenRouter from './Component/seven/seven';
import { Constants, Font } from 'expo';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);

const FirstRoute = () => (
  <GsRouter></GsRouter>
);
const SecondRoute = () => (
  <SevenRouter></SevenRouter>
);

export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'CU/GS' },
      { key: 'second', title: 'SEVEN' },
    ],
  };

  componentDidMount() {
    // 버튼 뒤로가기 이벤트 등록
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    // 버튼 뒤로가기 이벤트 해제
    this.exitApp = false;
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  // 버튼 뒤로가기 이벤트 동작
  handleBackButton = () => {
    // 2000(2초) 안에 back 버튼을 한번 더 클릭 할 경우 앱 종료
    if (this.exitApp == undefined || !this.exitApp) {
        ToastAndroid.show('한번 더 누르시면 종료됩니다.', ToastAndroid.SHORT);
        this.exitApp = true;

        this.timeout = setTimeout(
            () => {
                this.exitApp = false;
            },2000    // 2초
        );
    } else {
        clearTimeout(this.timeout);
        BackHandler.exitApp();  // 앱 종료
    }
    return true;
  } 

  _handleIndexChange = index => this.setState({ index });

  _renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const color = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map(
              inputIndex => (inputIndex === i ? '#0087DB' : '#aeaeae') // 탭이 바뀔때 마다 글씨 색상이 바뀜
            ),
          });
          return (
            <TouchableOpacity
              key = {route.key}
              style={styles.tabItem}
              onPress={() => this.setState({ index: i })}>
              <Animated.Text style={{ color, fontSize : 20, fontWeight: 'bold' }}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
      >
      </TabView>
    );
  }
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 1,
  },
  banner: {
    flex: 1,
    alignItems : 'center'
  }
});
