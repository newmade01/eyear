import * as React from 'react';
import { Platform, StyleSheet, View, Button, Text } from 'react-native';
import { color } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { back } from 'react-native/Libraries/Animated/src/Easing';


export default class main extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {//화면
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.head}>
                    <View style={styles.scrollBT}>
                        <Button title="언어선택" />
                    </View>

                    <View style={styles.headName}>
                        LOE
                    </View>
                    <View style={styles.set}>
                        set
                    </View>
                </View>

                <View style={styles.center}>
                    <view style={styles.centerText}>
                        해당 앱 백그라운드 사용을 허가하시겠습니까?
                    </view>

                    <view >
                        <View style={styles.centerBT}>
                            <button title="나중에하기" />
                        </View>
                        <View style={styles.centerBT}>
                            <button title="확인" />
                        </View>

                    </view>
                </View>

                <View style={styles.bottom}>
                    <View style={styles.mainBT}>
                        <Button title="경고음 " />
                    </View>
                    <View style={styles.mainBT}>
                        <Button title="음성등록" />
                    </View>
                    <View style={styles.mainBT}>
                        <Button title="텍스트" />
                    </View>
                    <View style={styles.mainBT}>
                        <Button title="전체화면보기" />
                    </View>
                </View>

            </SafeAreaView>
        );
    }

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'blue',
    },

    headName: {
        flex: 1,
        flexDirection: 'row',
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
        flex: 1,
        width: 61,
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
        flex: 1,
        flexDirection: 'row',
        width: 70,
        height: 21,
        borderRadius: 4,
        backgroundColor: "#5d9295"
    },

    center: {
        alignSelf: 'center',
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
        flex: 1,
        flexDirection: 'row',
        width: 24.8,
        height: 25.5,
        backgroundColor: "#ffffff",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "rgba(255, 255, 255, 0)"
    },

    bottom: {
        flex: 1,
        flexDirection: 'row',
        width:'100%'
    },

    head: {
        flex: 1,
        flexDirection: 'row',
    },

    centerBT: {
        width: 140,
        height: 68,
        borderRadius: 6,
        backgroundColor: "#5d9295",
        shadowColor: "rgba(10, 31, 68, 0.12)",
        shadowOffset: {
            width: 0,
            height: 18
        },
        shadowRadius: 18,
        shadowOpacity: 1


    },
    




});