import React, {Component} from 'react';
import { View, Text, TouchableOpacity, TextInput, Button, StyleSheet } from 'react-native';

class Register extends Component {

    constructor(){
        super()
        this.state = {
            credentials: {
                login: '',
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

    register() {
        alert(JSON.stringify(this.state.credentials));
        // this.props.navigation.navigate('main');
    }

    render(){
        return (
            <View style={{ 
                height: 100+'%', 
                width: 100+'%', 
                flex:1, 
                justifyContent:'center',
                alignItems:'center'
                }}
                onPress={()=> {
                    this.register();
                }}>
                <Text>register screen</Text>
                <TextInput 
                autoCorrect={false}
                value={this.state.login}
                onChangeText={text => this.updateText(text, 'login')}
                placeholder='Username' 
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
                <Button onPress={()=>{this.register()}} title='Signup'>
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        width: 100+'%',
        paddingHorizontal: 50,
        marginBottom: 10
    }
});

export default Register;