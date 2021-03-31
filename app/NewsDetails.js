import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, Image, TouchableOpacity, ScrollView, ToastAndroid, FlatList, Pressable, StatusBar, Alert } from 'react-native';
import { Card, Left, CardItem, Item, Input, Icon, Label, Button, Right, Picker } from 'native-base';
import axios from 'axios'



const { height, width } = Dimensions.get('window');
// const apiKey = "eaec4b2416cc4336b085dc96896c40fa";

export default class NewsDetails extends Component {
    constructor() {
        super()
        this.state = {
            data: [],

           
    }
            
    
        };
      
        
    

    componentDidMount() {
        // this.getApiData();
    }

    getApiData = async () => {

        let response = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2021-02-26&sortBy=publishedAt&apiKey=eaec4b2416cc4336b085dc96896c40fa')
        // console.log(response.data.articles[11].title)
        this.setState({
            data: response.data.articles
        })

        // console.log(this.state.data)

    }

    list1 = () => {
        return this.state.data.map((item, index) => {

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
        return (
            <View>
          


                    <View style={styles.Upper}>
                       
                        <View style={{ width: '60%', marginTop: 18, }}>
                            <Text style={{ color: '#C70039', fontSize: 18, fontWeight: 'bold', marginLeft: 20 }}>All Info</Text>
                        </View>

                    </View>

                <ScrollView >

                    <View style={styles.viewCard}>
                        {this.list1()}
                    </View>


                </ScrollView>
            </View>

        )
    }
}



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
