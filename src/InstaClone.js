import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class InstaClone extends Component {

    render(){
        return(
            <View style={{ flex:1, width: 100 + "%", height:100 + "%"}}>
                <View style={styles.tempNav}>
                    <Text>Not Instagram</Text>
                </View>
                <Image
                    style={{width: 100 + "%", height: 100}}
                    source={{
                        uri:
                            "https://www.thebrandbite.com/wp-content/media/2015/07/apple-7.jpg"
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tempNav: {
        width: 100+"%", 
        height: 70, 
        backgroundColor: "rgb(250,250,250)",
        borderBottomColor: "rgb(233,233,233)",
        borderBottomWidth: StyleSheet.hairlineWidth
    }
})

export default InstaClone;