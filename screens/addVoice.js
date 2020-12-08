import * as React from 'react';
import { Platform, StyleSheet, View, Button, Text } from 'react-native';
import { color } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { back } from 'react-native/Libraries/Animated/src/Easing';


export default class main extends React.Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: '두 번째 페이지',
    };

    render() {//화면
        const { navigate } = this.props.navigation;

        return (
            <View>
                <Text>Second Screen</Text>
                <Text>{this.props.navigation.getParam('data', 'DEFAULT_VALUE')}</Text>
            </View>
        );

    }
}




//style
const styles = StyleSheet.create({

});