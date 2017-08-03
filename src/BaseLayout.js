import React, {Component} from 'react';
import {
    Alert,
    AppRegistry,
    AppState,
    Text,
    Dimensions,
    View
} from 'react-native';

import styles from './styles';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import FingerprintPopup from './FingerprintPopup';
import QuickenData from './QuickenData';
export default class BaseLayout extends Component {
    previousAppState = '';

    constructor(props) {
        super(props);
        this.state = {
            showScreen: props.showScreen === undefined ? false : props.showScreen,
            errorMessage: undefined,
            popupShowed: props.popupShowed === undefined ? false : props.popupShowed,
            cancelTouchId: false,
            appState: AppState.currentState
        };
    }

    renderParent() {
        return (
            <View>
                {!this.state.showScreen && this.renderTopView()}
                {this.state.errorMessage && (
                    <Text style={styles.errorMessage}>
                        {this.state.errorMessage}
                    </Text>
                )}
                {this.state.popupShowed && (
                    <FingerprintPopup
                        style={styles.popup}
                        handlePopupDismissed={this.handleFingerprintDismissed}
                        handleCancelAction={this.handleCancelAction}
                    />
                )}
            </View>
        );
    }

    handleFingerprintShowed = () => {
        this.setState({popupShowed: true});
    };

    handleFingerprintDismissed = () => {
        this.setState({popupShowed: false, showScreen: true});
    };

    showTouchPopup() {
        FingerprintScanner
            .isSensorAvailable()
            .then(this.handleFingerprintShowed)
            .catch(error => {
                this.setState({errorMessage: error.message, showScreen: true})
            });
    }

    handleCancelAction = () => {
        Alert.alert(
            'You need to verify your Touch Id to proceed',
            '',
            [
                {text: 'OK', onPress: () => this.showTouchPopup()},
            ],
            {cancelable: false}
        )
    };

    componentWillMount() {
        if (this.state.showScreen == false) {
            this.showTouchPopup();
        }
    }

    componentDidMount() {
        QuickenData.getInstance().object = this;
        AppState.addEventListener('change', this._handleAppStateChange);
    }

    componentWillUnMount() {
        AppState.removeEventListener('change', this._handleAppStateChange);
    }

    _handleAppStateChange = (nextAppState) => {
        if(QuickenData.getInstance().object !== null && QuickenData.getInstance().object !== this) {
            return;
        }
        if (nextAppState === 'inactive' || nextAppState === 'background') {
            this.setState({
                showScreen: false,
                popupShowed: false
            });
            if (nextAppState === 'background') {
                this.previousAppState = nextAppState;
            }
        }
        else if (nextAppState === 'active' && this.previousAppState === 'background') {
            this.previousAppState = nextAppState;
            this.showTouchPopup();
        }
    }

    renderTopView() {
        return (
            <View style={styles.coveringView}/>
        );
    }

   render() {

        return (
            <View style={[styles.container]}>
                {this.renderParent()}
                {this.state.showScreen && this.renderContent()}
            </View>
        );
    }
}