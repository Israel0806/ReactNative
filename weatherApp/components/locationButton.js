import React from 'react'
import { Alert, Button, StyleSheet, View } from 'react-native';

export default class LocationButton extends React.Component {
    onPress() {
        navigator.geolocation.getCurrentPosition(
            initialPosition => {
                this.props.onGetCoords(
                    initialPosition.coords.latitude,
                    initialPosition.coords.longitude,
                );
            },
            error => {
                Alert.alert(error.message);
            },
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    }

    render() {
        return (
            <View>
                <Button
                    title='Use Current Location'
                    style={styles.button}
                    onPress={this.onPress.bind(this)}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        height: 100,
        padding: 32,
        backgroundColor: '#fff',
        opacity: 0.6,
    }
})