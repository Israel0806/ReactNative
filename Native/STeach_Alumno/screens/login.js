import React from 'react';
import { Image, StyleSheet, View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import globalStyles from '../styles/global'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
import Form from '../components/form'

export default class Login extends React.Component {
    render() {
        return (
            <TouchableWithoutFeedback
                onPress={() => Keyboard.dismiss()}>
                <View style={styles.image}>
                    <Image
                        style={{ width: 224, height: 214 }}
                        source={require('../images/logo.png')} />
                    <Form type='Ingresar' />
                    <View style={styles.signupTextCont}>
                        <Text style={styles.signupText}> Don't you have an accout yet? </Text>
                        <TouchableOpacity onPress={() => Actions.Signup()}>
                            <Text style={styles.signupButton}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
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