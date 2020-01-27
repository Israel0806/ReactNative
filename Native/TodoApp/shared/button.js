import React from 'react'
import { Alert, StyleSheet, TouchableOpacity, Text, View } from 'react-native'

export default function FlatButton({ text, onPress }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={() => {
                Alert.alert(`With these button you can add a new task to remember to do`)
            }}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        marginLeft: 16,
        marginRight: 16,
        backgroundColor: '#f01d71',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center',
    }
})