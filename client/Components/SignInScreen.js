import React from 'react';
import {
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';

export default  class SignInScreen extends React.Component {
    static navigationOptions = {
      title: 'Please sign in',
      header:null
    };
    state = {
      //   user:'',
         username: '',
         password: '',
      //   isLoggingIn: false,
      //   message: ''
       };
    
      
  
    render() {
      return (
        <ScrollView style={[{backgroundColor:'#60a370'}]}>
        <View style={styles.container}>
          <View style={[styles.container1]}>
             <Image
                style={[styles.image]}
                source={require('./mainlogo.jpg')}
                />
            </View>
            <View style={[styles.container2]}>
              <TextInput style={[styles.inputbox,{marginTop:30}]}
                placeholder="Enter your Name"
                //    underlineColorAndroid="transparent"                        
                  numberOfLines = {1}
                  borderBottomColor='#3e3a42'
                  onChangeText={(username) => this.setState({ username })}
                />
                <TextInput style={[styles.inputbox,{marginTop:15}]}
                placeholder="Enter your password"
                secureTextEntry={true}
                //    underlineColorAndroid="transparent"                        
                  numberOfLines = {1}
                  onChangeText={(username) => this.setState({ username })}
                />
             
              <TouchableOpacity style={styles.loginButton} onPress={this._homePage}>
                          
                            <Text >login</Text>
                           
              </TouchableOpacity>
              <View style={[styles.horizontalFlex]}>
                <Text>Havent registered yet??</Text>
                <TouchableOpacity onPress={this._registerPage}>
                            <View >
                              <Text style={[styles.text,{marginLeft:15}]}>Sign Up</Text>
                              </View>
                </TouchableOpacity>
              </View>
          </View>
        </View>
        </ScrollView>
      );
    }
    _homePage = async () => {
      // await AsyncStorage.setItem('userToken', 'abc');
      this.props.navigation.navigate('App');
    };
    _registerPage = async () => {
      // await AsyncStorage.setItem('userToken', 'abc');
      this.props.navigation.navigate('Register1');
    };
  
  
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#60a370',
      height:'100%',
      width:'100%'
    },
    verticalFlex:{
      //    flex:1,
          display:'flex',
          flexDirection:"column",
      //    height:20
      },    
  horizontalFlex:{
  //    flex:1,
      display:'flex',
      flexDirection:"row",
      height:60,
      width:'100%',
      marginTop:0,
      justifyContent:'center',
      alignItems:'baseline'          
          },
    image:{
      width:120,
      height:120
    },
    text: {
      color: '#4d5454',
      fontWeight: 'bold',
      fontSize: 20
     
     },
    container1: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height:230,
      width:'100%',
    //  borderBottomColor:'#079126',
      backgroundColor:'#819986', 
      marginBottom: 0
    },
    container2: {
      flex: 1,
      marginTop:0,
      alignItems: 'center',
      justifyContent: 'center',
      height:300,
      width:'100%',
    //  borderBottomColor:'#079126',
    //  backgroundColor:'70#60a370'
    },    
    inputbox:{
      width:250,
      height:40,
      backgroundColor:'#ffffff' ,
      borderRadius:20,
      textDecorationLine:'underline' ,          
    },
    loginButton:{         
      marginTop:30,
      width:220,
      height:45,
      borderRadius:20,
      marginLeft:0,
      backgroundColor:'#7d8077',
      justifyContent:'center',
      alignItems:'center'
  },
  position2: {
    marginLeft:0,
    fontSize:20

  }
  
  });