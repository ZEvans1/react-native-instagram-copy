import React, {Component} from 'react';
import { View, Text, TouchableOpacity, TextInput, Button } from 'react-native';
import firebase from 'react-native-firebase';

class Login extends Component {
    constructor(){
        super()
        this.state = {
            credentials: {
                email: '',
                password: ''
            }
        };
    }

    updateText(text, field) {
        let newCredentials = Object.assign(this.state.credentials);
        newCredentials[field] = text;
        this.setState({
            credentials: newCredentials
        });
    }

    login() {
        const {email, password} = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {

            })
            .catch((error) => {
                const {code, message} = error;
            })
        this.props.navigation.navigate('register');
    }

    render(){
        return (
            <View style={{ 
                height: 100+'%', 
                width: 100+'%', 
                flex:1, 
                justifyContent:'center',
                alignItems:'center'
                }}>
                <Text>login screen</Text>
                <TextInput 
                autoCorrect={false}
                value={this.state.email}
                onChangeText={text => this.updateText(text, 'email')}
                placeholder='Email' 
                style={styles.input}>
                </TextInput>
                <TextInput 
                autoCorrect={false}
                value={this.state.password}
                onChangeText={text => this.updateText(text, 'password')}
                secureTextEntry
                placeholder='Password' 
                style={styles.input}>
                </TextInput>
                <Button onPress={()=>{this.login()}} title='Signup'>
                </Button>
            </View>
        )
    }
}

export default Login;