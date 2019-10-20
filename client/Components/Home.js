import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-paper';

export default class Home extends React.Component {
    static navigationOptions = {
        title: 'Home',
        headerTitleStyle: {

            flexGrow: 1,
            textAlign: 'center',
            alignSelf: "center"
        },
        headerTintColor: 'white',
        headerStyle: {


            backgroundColor: '#00806b',
        },
    };
    render() {
        return (
            <View style={styles.container}>
                
                <Text>home after tab here.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});