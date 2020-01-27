import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export default function todoItem({ item, pressHandler }) {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key
        )}>
            <View style={styles.item}>
                <MaterialIcons name='delete' size={32} color='#bbb' />
                <Text style={styles.itemText}>{item.text}</Text>

            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    itemText: {
        marginLeft: 10,
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',

        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    }
})