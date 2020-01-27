import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global'

export default function TaskHeader({ title }) {
    return (
        <Text style={globalStyles.SLHeader}>{title}</Text>
    )
}