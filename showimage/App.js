import React, {Component} from 'react';

import {BackHandler} from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
import {
  SafeAreaView,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from 'react-native';
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from 'react-native-cards';
// import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
// import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from 'react-navigation-stack';
// const Stack = createStackNavigator();
console.disableYellowBox = true;
const DATA = [
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Mumbai_Aug_2018_%2843397784544%29.jpg/1200px-Mumbai_Aug_2018_%2843397784544%29.jpg',
    name: 'TajHotel',
    title:
      'Taj Hotels is a chain of luxury hotels and a subsidiary of the Indian Hotels Company Limited, headquartered at Express Towers, Nariman Point in Mumbai. Incorporated by the founder of the Tata Group, Jamsetji Tata, in 1903, the company is a part of the Tata Group, one of India largest business conglomerates',
  },
  {
    url: 'https://content3.jdmagicbox.com/comp/delhi/l1/011pxx11.xx11.111116102233.h8l1/catalogue/red-fort-red-fort-delhi-tourist-attraction-2thf09i.jpg?clr=1d493a',
    name: 'Red fort',
    title:
      'The Red Fort is a historic fort in the city of Delhi in India that served as the main residence of the Mughal Emperors. Emperor Shah Jahan commissioned construction of the Red Fort on 12 May 1638, when he decided to shift his capital from Agra to Delhi.',
  },
  {
    url: 'https://c.ndtvimg.com/qutub-minar-650_625x300_1530453081066.jpg',
    name: 'Qutum minar',
    title:
      'The Qutb Minar, also spelled as Qutub Minar and Qutab Minar, is a minaret and "victory tower" that forms part of the Qutb complex. It is a UNESCO World Heritage Site in the Mehrauli area of New Delhi, India.',
  },
  {
    url: 'https://media.easemytrip.com/media/Blog/India/637116640324801740/637116640324801740fHrmt3.jpg',
    name: 'AksharDham',
    title:
      'Swaminarayan Akshardham (New Delhi) is a Hindu temple, and spiritual-cultural campus in New Delhi, India. The temple is close to the border with Noida. Also referred to as Akshardham Temple or Akshardham Delhi, the complex displays millennia of traditional and modern Hindu culture, spirituality, and architecture.',
  },
  {
    url: 'https://cdn.britannica.com/86/170586-050-AB7FEFAE/Taj-Mahal-Agra-India.jpg',
    name: 'Taj -Mahal',
    title:
      'The Taj Mahal, originally the Rauza-i-munawwara is an ivory-white marble mausoleum on the southern bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself.',
  },
];

// console.disableYellowBox = true;
export default class app extends Component {
  constructor() {
    super();
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    (this.page = false), (this.notAvilable = false);
    
    this.state = {
      page: true,
      url: '',
      title: '',
    };
  }
  handleBackButtonClick() {
    this.setState({
      page:true,
    })
    return true;
}
  componentWillMount() {
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
  }

  componentWillUnmount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
  }
  renderItem = item => {
    // console.warn('object', item);
    console.log('object', this.state.page);
    return this.state.page == true ? (
      <>
        <View
          style={{
            // height: Dimensions.get('window').height / 8,
            width: '80%',
          }}>
          <TouchableOpacity
            onPress={() => {
              (this.page = false), console.warn(this.state.page);
              this.setState({
                page: false,
                url: item.item.url,
                title: item.item.title,
                name: item.item.name,
              });
              // {()=>console.warn("sss",this.state.page)}
            }}>
            <Text style={{}}>{
            // item.item.name
            }</Text>

            <Image
              source={{uri: item.item.url}}
              style={{width: 400, height: 400, resizeMode: 'cover'}}
            />
          </TouchableOpacity>
        </View>
      </>
    ) : (
      <></>
    );
  };
  componentDidMount() {
    // this.callApi();
  }
  render() {
    return this.state.page == true ? (
      <>
        <View
          style={{
            height: Dimensions.get('window').height,
            width: Dimensions.get('window').width,
            backgroundColor: '#fff',
          }}>
          {this.notAvilable == false ? (
            <FlatList style={{}} data={DATA} renderItem={this.renderItem} />
          ) : (
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                Data not Avilable
              </Text>
            </View>
          )}
        </View>
        <View
          style={{
            height: 40,
            position: 'absolute',
            width: Dimensions.get('window').width,
            // backgroundColor: 'orange',
            bottom: 80,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}></View>
      </>
    ) : (
      <>
        <View
          style={{
            flex: 1,
            //  backgroundColor: 'red'
          }}>
          <Card>
            <CardImage
              source={{uri: this.state.url}}
              resizeMode={`cover`}
              style={{flexDirection: 'column'}}
              // resizeMethod="resize"
              title={this.state.name}
            />
            <CardTitle subtitle={this.state.title} />
          </Card>
        </View>
   
      </>
    );
  }
}
