import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet, SafeAreaView} from 'react-native';
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
    submitStory = () =>{
        db.collection("stories").add({
            title: this.state.title,
            author: this.state.author,
            story: this.state.story
        })
        this.setState({author: '', story: '', title: ''})
}
    render(){
        return(
            <SafeAreaView>
            <View>
                <Header
                backgroundColor= {"pink"}
                centerComponent= {{
                    text: "Story Hub",
                    style: {
                        color: 'white',
                        fontSize: 20,
                        justifyContent: 'center'
                    }
                }}
                />
           <View>
               <TextInput
               style={styles.inputBox}
               placeholder="Title of the Story"
                onChangeText={text => {
                    this.setState ({title: text})
                }}
                value = {this.state.title}
               />
           </View> 
           <View>
               <TextInput
               multiline= {true}
               style={styles.inputBox}
               placeholder="Author of the Story"
                onChangeText={text => {
                    this.setState ({author: text})
                }}
                value = {this.state.author}
               />
           </View>
           <View>
               <TextInput
               style={styles.inputBox}
               placeholder="Write Story"
                onChangeText={text => {
                    this.setState ({story: text})
                }}
                value = {this.state.story}
               />
           </View>
           <View>
               <TouchableOpacity>
               style={styles.submitButton}
               onPress = {()=>{
                   this.submitStory()
               }} 
          <Text style={styles.submitButtonText}>Submit</Text>
               </TouchableOpacity>
           </View>
           </View>
           </SafeAreaView>
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