import React, { Component } from "react";
import { Text, View, StyleSheet,TouchableOpacity,Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default class RecipeScreen extends React.Component {
  render(){
  return(
     <View style = {styles.container}>
     <Text style = {styles.appTitleText}>Today's Recipe</Text>
     <TouchableOpacity style = {styles.buttonStyle}>
     <Text style = {styles.sub1Text}>1</Text>
     <Text style = {styles.sub2Text}>Yogurt With Blueberries And Walnuts</Text>
     <Image source={require('../assets/Yogurt.jpg')} style = {styles.icon1Image}></Image>
     </TouchableOpacity>

     <Text style = {styles.sub3Text}>Ingredients</Text>
     <Text style = {styles.sub4Text}>---- 1 cup cashews</Text>
     <Text style = {styles.sub5Text}>---- 2 large ripe bananas</Text>
     <Text style = {styles.sub6Text}>---- 2-3 tbsp lemon juice</Text>
     <Text style = {styles.sub7Text}>---- 1 pinch salt</Text>
     <Text style = {styles.sub8Text}>---- 1/2 cup water</Text>
     <Text style = {styles.sub9Text}>---- 1 cup fresh blueberries</Text>
     <Text style = {styles.sub10Text}>---- A few chopped walnuts</Text>
     <Text style = {styles.sub11Text}>Directions</Text>
     <Text style = {styles.sub12Text}>--puree all things in blender </Text>
     <Text style = {styles.sub13Text}>--pour it into bowl </Text>
     <Text style = {styles.sub14Text}>--top it with blueberries and cashews</Text>
     </View>
  );
  }
}



const styles = StyleSheet.create({

  container:{
     flex:1,
     backgroundColor:"steelblue",
  },
appTitleText: {
    marginTop:39,
    color: 'black',
    textAlign: 'center',
    fontSize: RFValue(50),
    fontFamily: 'cursive',
  },

  sub1Text: {
    marginLeft:-5,
    marginTop:2,
    color: 'white',
    textAlign: 'center',
    fontSize: RFValue(30),
    fontFamily: 'cursive',
  },

  sub2Text: {
    marginTop:2,
    marginRight:-303,
    color: 'black',
    textAlign: 'center',
    fontSize: RFValue(20),
    fontFamily: 'cursive',
  },

  sub3Text: {
    marginTop:200,
    marginRight:199,
    color: 'black',
    textAlign: 'center',
    fontSize: RFValue(20),
    fontFamily: 'cursive',
  },

  sub4Text: {
    marginTop:2,
    marginRight:20,
    color: 'black',
    textAlign: 'center',
    fontSize: RFValue(20),
    fontFamily: 'cursive',
  },

  sub5Text: {
    marginTop:2,
    marginRight:-26,
    color: 'black',
    textAlign: 'center',
    fontSize: RFValue(20),
    fontFamily: 'cursive',
  },

  sub6Text: {
    marginTop:2,
    marginRight:-29,
    color: 'black',
    textAlign: 'center',
    fontSize: RFValue(20),
    fontFamily: 'cursive',
  },

  sub7Text: {
    marginTop:2,
    marginRight:40,
    color: 'black',
    textAlign: 'center',
    fontSize: RFValue(20),
    fontFamily: 'cursive',
  },

    sub8Text: {
    marginTop:2,
    marginRight:20,
    color: 'black',
    textAlign: 'center',
    fontSize: RFValue(20),
    fontFamily: 'cursive',
  },

   sub9Text: {
    marginTop:2,
    marginRight:-50,
    color: 'black',
    textAlign: 'center',
    fontSize: RFValue(20),
    fontFamily: 'cursive',
  },

   sub10Text: {
    marginTop:2,
    marginRight:-46,
    color: 'black',
    textAlign: 'center',
    fontSize: RFValue(20),
    fontFamily: 'cursive',
  },

  sub11Text: {
    marginTop:2,
    marginRight:196,
    color: 'black',
    textAlign: 'center',
    fontSize: RFValue(20),
    fontFamily: 'cursive',
  },

  sub12Text: {
    marginTop:2,
    marginRight:20,
    color: 'black',
    textAlign: 'center',
    fontSize: RFValue(18),
    fontFamily: 'cursive',
  },

  sub13Text: {
    marginTop:2,
    marginRight:88,
    color: 'black',
    textAlign: 'center',
    fontSize: RFValue(18),
    fontFamily: 'cursive',
  },

   sub14Text: {
    marginTop:2,
    marginRight:-41,
    color: 'black',
    textAlign: 'center',
    fontSize: RFValue(18),
    fontFamily: 'cursive',
  },

   buttonStyle: {
    marginTop: 57,
    marginLeft: 4,
    width: RFValue(37),
    height: RFValue(37),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: 'black',
    borderRadius: RFValue(200),
    backgroundColor: 'black',
  },

  icon1Image: {
    position: 'absolute',
    height: 190,
    width: 140,
    resizeMode: 'contain',
    right: -197,
    top: 40,
  },

  
})