import * as React from 'react';
import { Platform, StyleSheet, View, Button, Text } from 'react-native';
import { color } from 'react-native-reanimated';


export default class main extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {//화면
        return (
            <div>


                <View style={{
                    top: 30,
                    width: 83,
                    height: 61,
                    borderRadius: 6,
                    backgroundColor: "#ffffff",
                    shadowColor: "rgba(10, 31, 68, 0.12)",
                    shadowOffset: {
                        width: 0,
                        height: 18
                    },
                    shadowRadius: 18,
                    shadowOpacity: 1,
                    borderStyle: "solid",
                    borderWidth: 1,
                    borderColor: "#707070"

                }}>
                    <View style={styles.buttonOuterLayout}>

                        <View style={styles.buttonLayout}>
                            <Button title="경고음 " />
                        </View>

                        <View style={styles.buttonLayout}>
                            <Button title="음성등록 " />
                        </View>


                        <View style={styles.buttonLayout}>
                            <Button title="텍스트" />
                        </View>

                        <View style={styles.buttonLayout}>
                            <Button title="전체화면 키우기" />
                        </View>

                    </View>

                
                </View>
            </div>


        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',

    },
    headerText: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        fontWeight: "bold"
    },
    buttonOuterLayout: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonLayout: {
        marginBottom: 10

    }
});