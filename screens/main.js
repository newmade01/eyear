import * as React from 'react';
import { Platform, StyleSheet, View, Button, Text } from 'react-native';
import { color } from 'react-native-reanimated';
import { back } from 'react-native/Libraries/Animated/src/Easing';


export default class main extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {//화면
        return (
            <view style={styles.container}>
                <View style={styles.head}>
                    <View style={styles.scrollBT}>
                        <Button title="언어선택" />
                    </View>

                    <View style={styles.headName}>
                        LOE
                    </View>
                    <View style={styles.set}>
                        설정
                    </View>
                </View>

                <View style={styles.center}>
                    백그라운드에서 사용하나요?
                </View>

                <View style={styles.bottom}>
                    <View style={styles.mainBT}>
                        <Button title="경고음 " />
                    </View>
                    <View style={styles.mainBT}>
                        <Button title="음성등록" />
                    </View>
                    <View style={styles.mainBT}>
                        <Button title="음성등록" />
                    </View>
                </View>

            </view>
        );
    }

}

const styles = StyleSheet.create({


    headName: {
        width: 69,
        height: 53,
        fontFamily: "SFUIDisplay",
        fontSize: 40,
        fontWeight: "900",
        fontStyle: "normal",
        lineHeight: 45,
        letterSpacing: 0.71,
        textAlign: "left",
        color: "#ffffff"
    },

    mainBT: {
        width: 80,
        height: 61,
        borderRadius: 6,
        backgroundColor: "#ffffff",
        shadowColor: "rgba(10, 31, 68, 0.12)",
        shadowOffset: {
            width: 0,
            height: 18
        },
        shadowRadius: 18,
        shadowOpacity: 1
    },

    scrollBT: {
        width: 70,
        height: 21,
        borderRadius: 4,
        backgroundColor: "#5d9295"
    },

    center: {
        width: 291,
        height: 255,
        borderRadius: 6,
        backgroundColor: "#ffffff",
        shadowColor: "rgba(10, 31, 68, 0.12)",
        shadowOffset: {
            width: 0,
            height: 18
        },
        shadowRadius: 18,
        shadowOpacity: 1
    },

    set: {
        width: 24.8,
        height: 25.5,
        backgroundColor: "#ffffff",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "rgba(255, 255, 255, 0)"
    },

    bottom:{
        flex: 1,
        flexDirection: 'row',  
    },

    head:{
        flex: 1,
        flexDirection: 'row',
    }



});