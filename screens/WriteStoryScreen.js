import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet, KeyboardAvoidingView} from 'react-native';
import {Header} from 'react-native-elements';
import db from '../config'
import firebase from 'firebase'

export default class WriteStoryScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            text: '',
            title: '',
            author: '',
            story: ''
        }
    }
    submitStory = async () =>{
    var titleRef = await db.collection("title").where({'name': this.state.title})
    /*titleRef.docs.map((doc)=>{
        var title = doc.data()
    })*/

    var authorRef = await db.collection("author").where({'name': this.state.author})
    /*authorRef.docs.map((doc)=>{
        var author = doc.data()
    })*/

    var storyRef = await db.collection("story").add({'story': this.state.story})
    /*storyRef.docs.map((doc)=>{
        var story = doc.data()
    })*/
    var storySubmitted =  await this.submitStory()
    if(storySubmitted){
        Alert.alert("Story submitted successfully")
      }
}
    render(){
        return(
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <View>
           <View>
               <TextInput
               style={StyleSheet.inputBox}
               placeholder="Title of the Story"
                onChangeText={text => {
                    this.setState ({text: text})
                }}
               />
           </View> 
           <View>
               <TextInput
               multiline= {true}
               style={StyleSheet.inputBox}
               placeholder="Author of the Story"
                onChangeText={text => {
                    this.setState ({text: text})
                }}
               />
           </View>
           <View>
               <TextInput
               style={StyleSheet.inputBox}
               placeholder="Write Story"
                onChangeText={text => {
                    this.setState ({text: text})
                }}
               />
           </View>
           <View>
               <TouchableOpacity>
               style={styles.submitButton}
               onPress = {this.submitStory}
          <Text style={styles.submitButtonText}>Submit</Text>
               </TouchableOpacity>
           </View>
           </View>
           </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    displayText:{
      fontSize: 15,
      textDecorationLine: 'underline'
    },
    inputBox:{
        width: 200,
        height: 40,
        borderWidth: 1.5,
        borderRightWidth: 0,
        fontSize: 20
      },
        submitButton:{
    backgroundColor: '#FBC02D',
    width: 100,
    height:50
  },
  submitButton:{
    backgroundColor: '#FBC02D',
    width: 100,
    height:50
  },
  submitButtonText:{
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight:"bold",
    color: 'white'
  }
})