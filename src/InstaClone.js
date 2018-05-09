import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class InstaClone extends Component {

    render(){
        return(
            <View style={{ flex:1, width: 100 + "%", height:100 + "%"}}>
                <Text>Hello</Text>
                <Image
                    style={{width: 100 + "%", height: 100 + "%"}}
                    source={{
                        uri:
                            "https://www.thebrandbite.com/wp-content/media/2015/07/apple-7.jpg"
                    }}
                />
            </View>
        )
    }
}

export default InstaClone;