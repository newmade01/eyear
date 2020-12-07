import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class main extends React.Component{

    constructor(props){
        super(props);
    }

    render(){//화면
        return(
            <View style={styles.container}>
                <Text>Login Screen</Text>
            </View>

        )
    }

}