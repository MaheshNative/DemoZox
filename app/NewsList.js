import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestApiData } from "../src/actions";
import Style from './NewListStyles'
import { View, Text, StyleSheet, Dimensions, TextInput, Image, TouchableOpacity, ScrollView, ToastAndroid, FlatList, Pressable, StatusBar, Alert } from 'react-native';
import { Card, Left, CardItem, Item, Input, Icon, Label, Button, Right, Picker } from 'native-base';


const { height, width } = Dimensions.get('window');

class NewsChannel extends React.Component {
  componentDidMount() {
    this.props.requestApiData();
  }

  list1 = () => {
    return this.props.data.map((item, index) => {

      // console.log("list", item)
      return (

        <View key={index}>
          <Card style={{ backgroundColor: '#EAFAF1', marginVertical: 10 }}>


            <View style={{ width: width - 60, alignSelf: 'center', marginVertical: 5, }}>
              <Text style={Style.head}>Author :- </Text>
              <Text style={{ color: '#4D5656', }}>{item.author} </Text>
            </View>

            <View style={{ width: width - 60, alignSelf: 'center', marginVertical: 5, }}>
              <Text style={Style.head}>Published At:-</Text>
              <Text style={{ color: '#4D5656' }} numberOfLines={4}>{item.publishedAt} </Text>
            </View>

            <View style={{ width: width - 60, alignSelf: 'center', marginVertical: 5 }}>
              <Text style={Style.head}>Description:-  </Text>
              <Text style={{ color: '#4D5656' }} numberOfLines={4}>{item.description} </Text>
            </View>

            <View style={{ width: width - 60, alignSelf: 'center', marginVertical: 5 }}>
              <Text style={{  }}>Content:- </Text>
              <Text style={{ color: '#4D5656' }} numberOfLines={4}>{item.content} </Text>
            </View>

          </Card>
        </View>


      );
    });
  };



  render() {
    // const { results = [] } = this.props.data;

    console.log('data on props', this.props.data)
    return (
      <View>
        <View style={{ margin: 20 }}>
          <Text style={Style.t1}>Flash News!!</Text>
        </View>

        <ScrollView style={{}} >
          <View style={Style.viewCard}>
            {this.list1()}
          </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('state.data.infosssss', state.data.infos)

  return {

    data: state.data.infos

  }


}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NewsChannel);


