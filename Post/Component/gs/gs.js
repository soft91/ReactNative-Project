import React from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';
import { AdMobBanner } from 'expo';

class GsRouter extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
          price: ['  ?  ', '  ?  ', '  ?  '],
          gsPrice : [
            { name : "중량 선택"    , price : ['  ?  ', '  ?  ', '  ?  '], value : 0},
            { name : "0g ~ 350g"   , price : ['2,600', '3,100', '5,800'], value : 1},
            { name : "350g ~ 400g" , price : ['2,800', '3,300', '6,000'], value : 2},
            { name : "400g ~ 450g" , price : ['2,900', '3,400', '6,100'], value : 3},
            { name : "450g ~ 500g" , price : ['3,100', '3,600', '6,300'], value : 4},
            { name : "500g ~ 600g" , price : ['3,300', '3,800', '6,800'], value : 5},
            { name : "600g ~ 700g" , price : ['3,400', '3,900', '6,900'], value : 6},
            { name : "700g ~ 800g" , price : ['3,500', '4,000', '7,000'], value : 7},
            { name : "800g ~ 900g" , price : ['3,600', '4,100', '7,100'], value : 8},
            { name : "900g ~ 1kg"  , price : ['3,700', '4,200', '7,200'], value : 9},
            { name : "1kg ~ 1.5kg" , price : ['3,800', '4,300', '7,300'], value : 10},
            { name : "1.5kg ~ 2kg" , price : ['4,100', '4,600', '7,600'], value : 11},
            { name : "2kg ~ 3kg"   , price : ['4,300', '4,800', '7,800'], value : 12},
            { name : "3kg ~ 4kg"   , price : ['4,400', '4,900', '7,900'], value : 13},
            { name : "4kg ~ 5kg"   , price : ['4,600', '5,100', '8,100'], value : 14},
            { name : "5kg ~ 10kg"  , price : ['5,000', '6,000', '9,000'], value : 15},
            { name : "10kg ~ 20kg" , price : ['6,000', '7,000', '10,000'], value : 16},
            { name : "20kg ~ 30kg" , price : ['7,000', '8,000', '11,000'], value : 17},
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
            <Picker style = {Styles.menu} selectedValue={this.state.price} onValueChange={this.onChangeResult}>
              {
                this.state.gsPrice.map( (contents, i) => {
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
            <Text style={Styles.title}>주의 사항{'\n'}</Text>
            <Text style={Styles.helpTitle}>● 착불배송시 일부 구간(0~2kg까지) 착불 수수료(300원) 부과</Text>
            <Text style={Styles.helpTitle}>● 도서지역으로 배송시 4,000원 부과</Text>
            <Text style={Styles.helpTitle}>● 고액상품(50만원초과) 배송시 2,000원 부과</Text>
          </View>
        </View>
        <View style={Styles.banner}>
          <AdMobBanner
            bannerSize="smartBannerPortrait"
            adUnitID="ca-app-pub-9774351071699436/5920602100"
            didFailToReceiveAdWithError={this.bannerError} />
        </View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
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
      paddingBottom : 30
  },
  contentsTitle : {
    flex: 1,
    alignSelf: 'stretch'
  },  
  contentsSelect : {
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 30
  },
  title: {
    fontSize: 20,
    padding : 10,
    color: 'rgba(27, 147, 42, 1)'
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
    color: '#BA55D3'
  },
  helpContainer : {
    flex: 1,
    borderWidth : 1,
    borderTopColor : '#bbb',
    borderLeftColor : '#fff',
    borderRightColor : '#fff',
    borderBottomColor: '#fff',
  },
  helpTitle : {
    paddingLeft: 10,
    color: '#EB3232'
  },
  banner : {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: 30
  }
});

export default GsRouter;
