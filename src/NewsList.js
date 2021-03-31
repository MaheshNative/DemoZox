import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestApiData } from "./actions";

import { View, Text, StyleSheet, Dimensions, TextInput, Image, TouchableOpacity, ScrollView, ToastAndroid, FlatList, Pressable, StatusBar, Alert } from 'react-native';
import { Card, Left, CardItem, Item, Input, Icon, Label, Button, Right, Picker } from 'native-base';


const { height, width } = Dimensions.get('window');

class NewsList extends React.Component {
  componentDidMount() {
    this.props.requestApiData();
  }

  list1 = () => {
    return this.props.data.map((item, index) => {

        // console.log("list", item)
        return (

            <View key={index}>
                <Card style={{ backgroundColor: '#fff', marginVertical: 10 }}>


                    <View style={{ width: width - 60, alignSelf: 'center', marginVertical: 5, }}>
                        <Text style={{ color:'#C70039',fontWeight:'bold' }}>Author :- </Text>
                        <Text style={{ color:'#CD6155' ,}}>{item.author} </Text>
                    </View>

                    <View style={{ width: width - 60, alignSelf: 'center', marginVertical: 5, }}>
                        <Text style={{ color:'#C70039',fontWeight:'bold' }}>Published At:-</Text>
                        <Text style={{ color:'#CD6155' }} numberOfLines={4}>{item.publishedAt} </Text>
                    </View>

                    <View style={{ width: width - 60, alignSelf: 'center', marginVertical: 5 }}>
                        <Text style={{ color:'#C70039',fontWeight:'bold' }}>Description:-  </Text>
                        <Text style={{ color:'#CD6155' }} numberOfLines={4}>{item.description} </Text>
                    </View>

                    <View style={{ width: width - 60, alignSelf: 'center', marginVertical: 5 }}>
                        <Text style={{ color:'#C70039',fontWeight:'bold' }}>Content:- </Text>
                        <Text style={{ color:'#CD6155' }} numberOfLines={4}>{item.content} </Text>
                    </View>

                  

                    
                </Card>
            </View>


        );
    });
};



  render() {
    // const { results = [] } = this.props.data;
    
console.log('MMMMMMM',this.props.data)
    return (
      <View>
        <ScrollView >

<View style={styles.viewCard}>
    {this.list1()}
</View>


</ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) =>{
  console.log('state.data.infosssss',state.data.infos)

  return{

    data: state.data.infos
    
 }
 

}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);


const styles = StyleSheet.create({

    mainview: {
        // flex: 1,
        // backgroundColor: '#E7E7E7'

    },

    viewCard: {
        // marginTop:25,
        marginVertical: 8,
        justifyContent: 'center',
        width: width - 30,
        alignSelf: 'center',

    },
    Upper: {
        backgroundColor: '#FDFDFD',
        height: 60,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
        elevation: 5
        // marginHorizontal: 15,
        // marginTop: 15,

        // marginVertical:5
    },

})
