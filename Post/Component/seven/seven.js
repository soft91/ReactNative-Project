import React from 'react';
import { View, Text, StyleSheet, Picker, Linking } from 'react-native';
import { AdMobBanner } from 'expo';

class SevenRouter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            price: ['  ?  ', '  ?  ', '  ?  '],
            sevenPrice : [
              { name : "중량 선택" , price : ['  ?  ', '  ?  ', '  ?  '], value : 0},
              { name : "소형(10kg/120cm이하)" , price : ['4,000', '5,000', '7,000'], value : 1},
              { name : "중형(20kg/140cm이하)" , price : ['5,000', '6,000', '8,000'], value : 2},              
              { name : "대형(25kg/160cm이하)" , price : ['6,000', '7,000', '9,000'], value : 3},
            ]
        }
    }
  
    onChangeResult = (price) => {
      this.setState({
        price : price 
      })
    }
  
    render() {
      return (
        <View style={Styles.container}>
          <View style={Styles.contents}>
            <View style={Styles.contentsTitle}>
              <Text style={Styles.title}>중량을 선택하세요.</Text>
              <View style={Styles.contentsSelect}>
              <Picker style = {Styles.menu} selectedValue={this.state.price} onValueChange={this.onChangeResult} itemStyle={{height: 20}}>
                {
                  this.state.sevenPrice.map( (contents, i) => {
                    return(
                      <Picker.Item label={contents.name} value={contents.price} key = {i} />
                    );
                  })
                }
              </Picker>
            </View>
            </View>
          </View>
          <Text style={Styles.title}>검색 결과</Text>
          <View style={Styles.resultContainer}>
            <View>
              <Text style={Styles.resultTitle}>동일권</Text>
              <Text style={Styles.resultTitle}>타권</Text>
              <Text style={Styles.resultTitle}>제주권</Text>
            </View>
            <View>
              <Text style={Styles.resultTitle}>{this.state.price[0]}원</Text>
              <Text style={Styles.resultTitle}>{this.state.price[1]}원</Text>
              <Text style={Styles.resultTitle}>{this.state.price[2]}원</Text>
            </View>
          </View>
          <View style={Styles.helpContainer}>
            <View>
                <Text style={Styles.title}>주의 사항</Text>
                <Text style={Styles.helpTitle}>● 배송하는 물건에 따라 가격 변동이 있을 수 있습니다.</Text>
                <Text style={Styles.helpTitle}>
                    ● 자세한 사항은 
                  <Text style={Styles.linkTitle} onPress={() => Linking.openURL('https://www.lotteglogis.com/home/reservation/feeinfo/write')}>
                    택배 요금 링크
                  </Text>
                    를 확인 해 주십시오.{'\n'}
                </Text>
            </View>
          </View>
          <AdMobBanner
            style = {Styles.banner}
            bannerSize="smartBannerPortrait"
            adUnitID="ca-app-pub-9774351071699436/5920602100"
            didFailToReceiveAdWithError={this.bannerError} />
        </View>
      );
    }
  }
  
  const Styles = StyleSheet.create({
    container: {
      flex: 1
    },
    contents: {
        flex: 1,
        flexDirection: 'row',
        justifyContent : 'center',
        borderWidth : 1,
        borderTopColor : '#fff',
        borderLeftColor : '#fff',
        borderRightColor : '#fff',
        borderBottomColor: '#bbb',
        paddingBottom : 30,
    },
    contentsTitle : {
      flex: 1,
    },  
    contentsSelect : {
      borderWidth: 1,
      marginLeft: 10,
      marginRight: 10
    },
    title: {
      fontSize: 20,
      padding : 10,
      color: 'rgba(240, 125, 0, 1)'
    },
    menu: {
      borderWidth: 1,
    },
    resultContainer : {
      flex : 1,
      flexDirection : 'row',
      alignItems: 'center',
      justifyContent : 'space-around',
      paddingTop : 35,
      paddingLeft : 10,
      paddingRight: 10,
      paddingBottom: 55
    },
    resultTitle : {
      fontSize : 40,
      color: 'rgba(27, 147, 42, 1)'
    },
    helpContainer : {
      flex: 1,
      borderWidth : 1,
      borderTopColor : '#bbb',
      borderLeftColor : '#fff',
      borderRightColor : '#fff',
      borderBottomColor: '#fff'
    },
    helpTitle : {
      paddingLeft: 10,
      color : '#EB3232'
    },
    linkTitle : {
      color : 'blue',
      textDecorationLine: "underline",
      paddingLeft : 10,
      paddingRight: 10,
      textAlign : 'right',
      fontSize: 15
    },
    banner : {
      flex: 1,
      justifyContent: 'flex-end',
      marginTop: 30
    }
  });

export default SevenRouter;


