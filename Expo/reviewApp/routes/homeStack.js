import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Review_Details from '../screens/reviewDetails';
import React from 'react'
import Header from '../shared/header'

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='GameZone' />,
            }
        }
    },
    ReviewDetails: {
        screen: Review_Details,
        navigationOptions: {
            title: 'Review Details',
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: {
            backgroundColor: 'skyblue',
            // height: 60,
        }
    }
});

export default HomeStack;