import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import 'react-native-gesture-handler';

import Login from './screens/login'
import { globalStyles } from './styles/global';
import Signup from './screens/signup';
import Routes from './routes/routes'

export default class App extends React.Component {
  render() {
    return (
      <View style={globalStyles.container} >
        <StatusBar
          backgroundColor='#1c313a'
          barStyle='light-content' />
        <Routes />
      </ View>
    )
  }
}

// const App = () => {
//   return (
//     <View style={globalStyles.container}>
//       <Routes />
//     </View>
//   )
// }

// export default App;
