import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'

export default function Task({ item, pressHandler }) {

    return (
        <TouchableOpacity
            onPress={() => pressHandler(item)}>
            <View style={styles.task}>
                <Image
                    source={require('../images/trashCan.png')}
                />
                <Text style={{ paddingLeft: 10, }}>{item.task}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    task: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#bbb',
        borderStyle: 'dashed',
        borderRadius: 10,
        padding: 20,
        marginLeft: 30,
        marginRight: 30,
        margin: 15,
    }
})