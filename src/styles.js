import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e0e0e0'
    },
    coveringView: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: 'black',
        zIndex: 1
    },
    heading: {
        color: '#ffffff',
        fontSize: 22,
        marginTop: 30,
        marginBottom: 5,
    },
    subheading: {
        color: '#ffffff',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 30,
    },
    fingerprint: {
        padding: 20,
        marginVertical: 30,
    },
    errorMessage: {
        color: '#ea3d13',
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 10,
        marginTop: 30,
    },
    popup: {
        width: width * 0.8,
    },
    popContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'black',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    logo: {
        marginVertical: 45,
    },
    heading: {
        textAlign: 'center',
        color: '#00a4de',
        fontSize: 21,
    },
    description: {
        textAlign: 'center',
        height: 65,
        fontSize: 18,
        marginVertical: 10,
        marginHorizontal: 20,
    },
    buttonContainer: {
        padding: 20,
    },
    buttonText: {
        color: '#8fbc5a',
        fontSize: 15,
        fontWeight: 'bold',
    },
});
