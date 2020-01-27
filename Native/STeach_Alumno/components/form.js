import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import { globalStyles } from '../styles/global'
import FlatButton from '../shared/flatButton'

export default class Form extends React.Component {
    render() {
        return (
            <View styles={globalStyles.container}>
                <TextInput
                    style={styles.inputBox}
                    placeholder='Email'
                    placeholderTextColor='#7C7C7C'
                    selectionColor='#fff'
                    keyboardType='email-address'
                    onSubmitEditing={() => this.password.focus()}
                />
                <TextInput
                    style={styles.inputBox}
                    placeholder='Password'
                    placeholderTextColor='#7C7C7C'
                    secureTextEntry={true}
                    ref={(input) => this.password = input}
                />
                <FlatButton text={this.props.type} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputBox: {
        // flex: 1,
        // flexDirection: 'row',
        marginVertical: 10,
        // borderWidth: 1,
        borderRadius: 8,
        width: 321,
        height: 52,
        margin: 16,
        paddingHorizontal: 16,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#B4B4B4',
        backgroundColor: '#fff',
    },
});