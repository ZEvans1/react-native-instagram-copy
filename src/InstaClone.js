import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class InstaClone extends Component {

    render(){
        return(
            <View style={{ flex:1, width: 100 + "%", height:100 + "%"}}>
                <View style={styles.tempNav}>
                    <Text>Not_Instagram</Text>
                </View>
                <View style={styles.userBar}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image
                            style={styles.userPic} 
                            source ={{
                            uri:
                                "https://cdn1.iconfinder.com/data/icons/instagram-ui-glyph/48/Sed-09-128.png"
                            }}
                        />
                        <Text style={{ marginLeft: 10 }}>User_Name</Text>
                        </View>
                    <View>
                        <Text style={{ fontSize: 36 }}>...</Text>
                    </View>
                </View>
                <Image
                    style={{width: 100 + "%", height: 100}}
                    source={{
                        uri:
                            "https://www.in.gov/dnr/images/dnr-6498.jpg"
                    }}
                />
            </View>
        );
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
        flexDirection: "row",
        paddingHorizontal: 10,
        justifyContent: "space-between"
    },

    userPic: {
        height: 40,
        width: 40,
        borderRadius: 20
    }
})

export default InstaClone;