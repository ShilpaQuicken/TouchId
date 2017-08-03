import React, {Component} from 'react';
import {
    AppRegistry,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import styles from './styles';
import BaseLayout from "./BaseLayout";
import {Actions} from 'react-native-router-flux';
import QuickenData from "./QuickenData";

export default class FirstScreen extends BaseLayout {
    constructor(props) {
        super(props);
        QuickenData.getInstance().array = [this];
        QuickenData.getInstance().object = this;
    }

    componentWillMount() {
        super.componentWillMount();
    }

    showSecondScreen() {
        Actions.secondScreen({
            showScreen: this.state.showScreen,
            popupShowed: this.state.popupShowed
        });
    }

    renderContent() {
        return (<View>
            <Text style={styles.heading}>
                React Native Fingerprint Scanner
            </Text>
            <Text style={styles.subheading}>
                https://github.com/hieuvp/react-native-fingerprint-scanner
            </Text>

            <TouchableOpacity
                style={{
                    height: 30,
                    alignSelf: 'center',
                    backgroundColor: '#000000'
                }}
                onPress={this.showSecondScreen.bind(this)}
            >
                <Text style={{
                    color: 'white',
                    margin: 10
                }}>
                    Show Second
                </Text>
            </TouchableOpacity>
        </View>);
    }
}
AppRegistry.registerComponent('FirstScreen', () => FirstScreen);