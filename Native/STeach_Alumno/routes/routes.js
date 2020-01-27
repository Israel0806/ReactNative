import React from 'react'
import { Router, Stack, Scene } from 'react-native-router-flux'
import Login from '../screens/login'
import Signup from '../screens/signup'

export default class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Stack key='root' hideNavBar={true} >
                    <Scene key='Login' component={Login} title='Login' initial={true} />
                    <Scene key='Signup' component={Signup} title='Signup' />
                </Stack>
            </Router >
        )
    }
}