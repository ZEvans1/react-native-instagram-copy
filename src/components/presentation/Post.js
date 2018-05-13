import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import config from "../../config";

class Post extends Component {

    constructor() {
        super();
        this.state = {
            liked: false,
            screenWidth: Dimensions.get("window").width
        };
    }

    likeToggled() {
        this.setState({
            liked: !this.state.liked
        })
    }

    render(){
        const heartIconColor = this.state.liked ? "rgb(252,61,57)" : null;
        
        const imageSelection = this.props.item % 2 === 0 ? "https://www.in.gov/dnr/images/dnr-6498.jpg" : "https://images.pexels.com/photos/247600/pexels-photo-247600.jpeg?cs=srgb&dl=nature-water-forest-247600.jpg&fm=jpg"

        return(
            <View style={{ flex: 1, width: 100 + "%"}}>
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
                    <View style={{ alignItems: "center" }}>
                        <Text style={{ fontSize: 30 }}>...</Text>
                    </View>
                </View>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => {
                        this.likeToggled();
                    }}
                    >
                <Image
                    style={{ width: this.state.screenWidth, height: 400 }}
                    source={{
                        uri:
                            imageSelection
                    }}
                />
                </TouchableOpacity>
                <View style={styles.iconBar}>
                    <Image 
                    style={[styles.icon, {tintColor: heartIconColor}]} 
                    source={config.images.heartIcon}/>
                    <Image style={styles.icon} source={config.images.bubbleIcon}/>
                    <Image style={styles.icon} source={config.images.arrowIcon}/>
                </View>
                <View style={styles.iconBar}>
                    <Image 
                        style={[styles.icon]} 
                        source={config.images.heartIcon}/>
                    <Text>100 likes</Text>
                </View>
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
        height: config.styleConstants.rowHeight,
        backgroundColor: "rgb(255,255,255)",
        flexDirection: "row",
        paddingHorizontal: 10,
        justifyContent: "space-between"
    },

    userPic: {
        height: 40,
        width: 40,
        borderRadius: 20
    },

    iconBar: {
        height: config.styleConstants.rowHeight,
        width: 100 + "%",
        borderColor: "rgb(233,233,233)",
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderTopWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems: "center"
    },
    icon: {
        height: 30,
        width: 30,
        marginLeft: 5
    }
})

export default Post;