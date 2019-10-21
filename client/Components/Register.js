import React from 'react';
import {
  ScrollView,
  Text,
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
import DropdownMenu from 'react-native-dropdown-menu';
import {Dropdown} from 'react-native-material-dropdown';
import DatePicker from 'react-native-datepicker';
import axios from 'axios';
//import{ScrollView} from 'react-native-gesture-handler'

export default class Register extends React.Component {
  static navigationOptions = {
    title: 'Lots of features here',
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      username: '',
      phoneNumber: ' ',
      address: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
    this.registerNewUser = this.registerNewUser.bind(this);
  }

  async registerNewUser() {
    try {
      console.log('Registering new user');
      const res = await axios.post('http://192.168.100.6:3001/post', {
        Fullname: this.state.name,
        Username: this.state.username,
        Address: this.state.address,
        PhoneNumber: this.state.phoneNumber,
        Email: this.state.email,
        Password: this.state.password,
        ConfirmPassword: this.state.confirmPassword,
      });
      this.props.navigation.navigate('SignIn');
    } catch (err) {
      alert(err.message);
    }
  }

  render() {
    return (
      <ScrollView style={[{backgroundColor: '#60a370'}]}>
        <View style={styles.container}>
          <View style={[styles.container1]}>
            <Image style={[styles.image]} source={require('./createacc.png')} />
            <Text style={[styles.text]}> create yor account</Text>
          </View>
          {/* <View style={styles.container}>
            {this.state.name &&
               <Text> name : {this.state.name}</Text>
            }
            </View> */}

          <View style={[styles.container2]}>
            <TextInput
              style={[styles.inputbox, {marginTop: 10}]}
              placeholder="Enter your Name"
              numberOfLines={1}
              borderBottomColor="#3e3a42"
              onChangeText={name => this.setState({name})}
            />
            <TextInput
              style={[styles.inputbox, {marginTop: 10}]}
              placeholder="Enter username"
              numberOfLines={1}
              borderBottomColor="#3e3a42"
              onChangeText={username => this.setState({username})}
            />
            <TextInput
              style={[styles.inputbox, {marginTop: 10}]}
              placeholder="Enter Address"
              numberOfLines={1}
              borderBottomColor="#3e3a42"
              onChangeText={address => this.setState({address})}
            />
            <TextInput
              style={[styles.inputbox, {marginTop: 10}]}
              placeholder="Enter Phone no."
              numberOfLines={1}
              borderBottomColor="#3e3a42"
              onChangeText={phoneNumber => this.setState({phoneNumber})}
            />
            <TextInput
              style={[styles.inputbox, {marginTop: 10}]}
              placeholder="Enter E-mail"
              numberOfLines={1}
              borderBottomColor="#3e3a42"
              onChangeText={email => this.setState({email})}
            />
            <TextInput
              style={[styles.inputbox, {marginTop: 10}]}
              placeholder="Enter your password"
              numberOfLines={1}
              borderBottomColor="#3e3a42"
              onChangeText={password => this.setState({password})}
            />
            <TextInput
              style={[styles.inputbox, {marginTop: 10}]}
              placeholder="confirm password"
              numberOfLines={1}
              borderBottomColor="#3e3a42"
              onChangeText={confirmPassword => this.setState({confirmPassword})}
            />
          </View>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={this._registerPage}>
            <Text>Submit</Text>
          </TouchableOpacity>

          <View style={[styles.horizontalFlex]}>
            <Text>Already have an account??</Text>
            <TouchableOpacity onPress={this._registerPage}>
              <View>
                <Text style={[styles.text, {marginLeft: 15}]}>Sign In</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }

  _homePage = async () => {
    // await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('Home');
  };
  _registerPage = async () => {
    console.log(this.state);
    this.registerNewUser();
    // await AsyncStorage.setItem('userToken', 'abc');
    // this.props.navigation.navigate('SignIn');
  };
}

const styles = StyleSheet.create({
  text: {
    color: '#4d5454',
    fontWeight: 'bold',
    fontSize: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontalFlex: {
    //    flex:1,
    display: 'flex',
    flexDirection: 'row',
    height: 30,
    width: '100%',
    marginTop: 0,
    justifyContent: 'center',
    alignItems: 'baseline',
  },
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    width: '100%',
    //  borderBottomColor:'#079126',
    backgroundColor: '#819986',
  },
  dropwowncontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100',
    // width:'60%',
    //  borderBottomColor:'#079126',
    backgroundColor: '#ffffff',
  },
  image: {
    width: 90,
    height: 90,
  },
  loginButton: {
    marginTop: 10,
    width: 220,
    height: 45,
    borderRadius: 20,
    marginLeft: 0,
    backgroundColor: '#7d8077',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    backgroundColor: '#60a370',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // height:300,
    width: '100%',
    //  borderBottomColor:'#079126',
    //  backgroundColor:'70#60a370'
  },
  container3: {
    backgroundColor: '#60a370',
    flex: 1,
    //  alignItems: 'center',
    //  justiyContent: 'center',
    height: 280,
    marginTop: 5,
    width: '70%',
    //  borderBottomColor:'#079126',
    //  backgroundColor:'#60a370'
  },
  inputbox: {
    width: 250,
    height: 40,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    textDecorationLine: 'underline',
  },
});
