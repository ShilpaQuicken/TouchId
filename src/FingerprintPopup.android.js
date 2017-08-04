import React, { Component, PropTypes } from 'react';
import {
  Alert,
  Image,
  Text,
  TouchableOpacity,
  View,
  ViewPropTypes
} from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';

import ShakingText from './ShakingText';
import styles from './styles';
class FingerprintPopup extends Component {

  constructor(props) {
    super(props);
      this.state = { errorMessage: undefined };
  }

  componentWillMount() {
     FingerprintScanner
      .authenticate({ onAttempt: this.handleAuthenticationAttempted })
      .then(() => {
        this.props.handlePopupDismissed();
        Alert.alert('Fingerprint Authentication', 'Authenticated successfully');
      })
      .catch((error) => {
          if(error.message.indexOf(`canceled by the user`) != -1) {
              this.props.handleCancelAction();
          }
      });
  }

  componentWillUnmount() {
      FingerprintScanner.release();
  }

  handleAuthenticationAttempted = (error) => {
    this.setState({ errorMessage: error.message });
    this.description.shake();
  };

  render() {
    const { errorMessage } = this.state;
    const { style, handlePopupDismissed } = this.props;

    return (
      <View style={[styles.popContainer, {zIndex:1}]}>
        <View style={[styles.contentContainer, style]}>

          <Image
            style={styles.logo}
            source={require('./Resources/finger_print.png')}
          />

          <Text style={styles.heading}>
            Fingerprint{'\n'}Authentication
          </Text>
          <ShakingText
            ref={(instance) => { this.description = instance; }}
            style={[styles.description, {color: errorMessage ? '#ea3d13' : '#a5a5a5'}]}>
            {errorMessage || 'Scan your fingerprint on the\ndevice scanner to continue'}
          </ShakingText>
        </View>
      </View>
    );
  }
}

FingerprintPopup.propTypes = {
  style: ViewPropTypes.style,
  handlePopupDismissed: PropTypes.func.isRequired,
  handleCancelAction: PropTypes.func.isRequired,
};

export default FingerprintPopup;
