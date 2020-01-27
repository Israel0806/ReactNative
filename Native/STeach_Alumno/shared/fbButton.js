import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

export default class FlatButton extends React.Component {
    render() {
        return (
            <TouchableOpacity
                style={styles.button}>
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        margin: 16,
        width: 172,
        padding: 16,
        alignSelf: 'center',
        borderRadius: 16,
        backgroundColor: '#E7A51A',
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center',
    }
})