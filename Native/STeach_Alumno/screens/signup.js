import React from 'react';
import { Image, StyleSheet, View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
import Form from '../components/form'

export default class Signup extends React.Component {
    render() {
        return (
            <TouchableWithoutFeedback
                onPress={() => Keyboard.dismiss()}>
                <View style={styles.image}>
                    <Image
                        style={{ width: 214, height: 214 }}
                        source={require('../images/logo.png')} />
                    <Form type='Register' />
                    <View style={styles.signupTextCont}>
                        <Text style={styles.signupText}> Already have an account? </Text>
                        <TouchableOpacity onPress={() => Actions.pop()}>
                            <Text style={styles.signupButton}>Log in</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback >
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        color: '#fff',
    },
    signupButton: {
        color: 'skyblue',
        fontSize: 18,
        fontWeight: '500',
    },
    signupText: {
        fontSize: 16,
    },
    signupTextCont: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        margin: 24,
        alignItems: 'center',
        // justifyContent: 'flex-start',
    },
})