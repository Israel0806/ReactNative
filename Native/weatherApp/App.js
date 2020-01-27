import React, { useState } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  StatusBar,
  TextInput,
  Alert,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';
import { Formik } from 'formik'
import * as yup from 'yup'
import Forecast from './components/forecast'
import OpenWeatherMap from "./components/fetchWeather";
import LocationButton from './components/locationButton';

function fetchForecastZip(zip) {
  this._getForecast(
    `${API_STEM}q=${zip}&units=imperial&APPID=${WEATHER_API_KEY}`);
}

function getForecastCoords(lat, lon) {
  this._getForecast(
    `${API_STEM}lat=${lat}&lon=${lon}&units=imperial&APPID=${WEATHER_API_KEY}`);
}

function getForecast(url, cb) {
  return fetch(url)
    .then((response) => response.json())
    .then((responseJSON) => {
      return {
        main: responseJSON.weather[0].main,
        description: responseJSON.weather[0].description,
        temp: responseJSON.main.temp
      };
    })
    .catch((error) => {
      console.warn(error);
    });
}

// export default function App() {
const App = () => {
  const [zip, setZip] = useState('')
  const [main, setMain] = useState('')
  const [description, setDescription] = useState('')
  const [temp, setTemp] = useState('')

  handleTextChange = event => {
    setZip(event.nativeEvent.text);
    // Alert.alert('zip: ' + zip);
    // let zip = event.nativeEvent.text;
    OpenWeatherMap.fetchForecast(zip).then(forecast => {
      // this.setState({ forecast: forecast });
      setMain(forecast.main);
      setDescription(forecast.description);
      setTemp(forecast.temp);
      // Alert.alert('Main: ' + main);
    });
  };

  let content = null;
  if (main != '') {
    content = <Forecast main={main} description={description} temp={temp} />
  }


  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./images/flowers.png')}
        style={{ width: '100%', height: '100%' }}
        resizeMode='cover'
      >
        <View style={styles.overlay}>
          <View style={styles.row}>
            <Text style={styles.mainText}>Current weather for</Text>
            <View>
              <TextInput
                keyboardType='numeric'
                style={styles.input}
                placeholder='ZIP CODE'
                placeholderTextColor='#fff'
                underlineColorAndroid="transparent"
                onSubmitEditing={handleTextChange} />
            </View>
          </View>
          <LocationButton onGetCoords={this.getForecastCoords} />

          {content}
        </View>
      </ImageBackground>
    </View>
  )
}

export default App;

const baseFontSize = 16;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  backdrop: { flex: 1, flexDirection: "column" },
  overlay: {
    paddingTop: 5,
    backgroundColor: "#000000",
    opacity: 0.5,
    flexDirection: "column",
    alignItems: "center"
  },
  row: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "flex-start",
    padding: 30
  },
  input: {
    marginHorizontal: 5,
    borderBottomColor: '#fff',
    color: '#fff',
    fontSize: 20,
    borderBottomWidth: 2,
    padding: 2,
    height: 40,
    width: 100,
    textAlign: "center"
  },
  mainText: {
    fontSize: baseFontSize,
    color: "#FFFFFF",
    margin: 6,
  }
});
