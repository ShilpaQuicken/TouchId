import React, {Component} from 'react';
import {
    AppRegistry,
    Dimensions,
    Text,
    View
} from 'react-native';

import styles from './styles';
import ShakingText from "./ShakingText";
import BaseLayout from "./BaseLayout";
import QuickenData from "./QuickenData";

export default class SecondScreen extends BaseLayout {
    constructor(props) {
        super(props);
        QuickenData.getInstance().array.push(this);
        QuickenData.getInstance().object = this;
    }

    renderContent() {
        return (
            <View>
                <Text>
                    Hello, welcome to second screen
                </Text>
            </View>
        );
    }
}
AppRegistry.registerComponent('SecondScreen', () => SecondScreen);
SecondScreen.navigationOptions = {
    title: 'SecondScreen',
};