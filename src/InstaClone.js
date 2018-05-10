import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class InstaClone extends Component {

    render(){
        return(
            <View style={{ flex:1, width: 100 + "%", height:100 + "%"}}>
                <View style={styles.tempNav}>
                    <Text>Not_Instagram</Text>
                </View>
                <View style={styles.userBar}/>
                <View style={{ flexDirection: "row" }}>
                    <Image
                        style={{ width:40, height:40}} 
                        source ={{
                        uri:
                            "https://cdn1.iconfinder.com/data/icons/instagram-ui-glyph/48/Sed-09-128.png"
                        }}
                    />
                    <Text>User_Name</Text>
                </View>
                <View>

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
        height: 56,
        marginTop: 20, 
        backgroundColor: "rgb(250,250,250)",
        borderBottomColor: "rgb(233,233,233)",
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: "center",
        alignItems: "center"
    },

    userBar: {
        width: 100 + "%",
        height: 50,
        backgroundColor: "rgb(255,255,255)",
        flexDirection: "row"
    }
})

export default InstaClone;