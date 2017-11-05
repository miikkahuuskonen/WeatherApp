import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.fetchWeather = this.fetchWeather.bind(this);
    this.state = {
      weather: [],
      temp: 0,
      url: '',
      text: '',
    };
  }

  renderTitle() {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>Weather</Text>
      </View>
    );
  }


  fetchWeather() {
    console.log('fetching...');
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+ this.state.text +'fi&APPID=bd0b860872e0a1bd7adc0f263dbff87a&units=metric')
    .then(result => result.json())
    .then(result => this.setState({
          city: this.state.text,
          weather: result.weather[0],
          temp: result.main.temp,
      })
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          {this.renderTitle()}
          <TextInput style={styles.textInput} value={this.state.value} placeholder="City name" onChangeText={(text) => this.setState({text})} />
          <Button onPress={this.fetchWeather} title="Send" />
        </View>
        <View style={styles.bottom}>
          <Text style={styles.bottomText}>City: {this.state.text} </Text>
          <Text style={styles.bottomText}>Temperature: {this.state.temp} Celsius</Text>
          <Text style={styles.bottomText}>Weather:  {this.state.weather.main}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  header: {
    borderBottomWidth: 0.5,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#F9F9F9',
  },

  title: {
    alignSelf: 'center',
    fontWeight: '600',
  },

  textInput: {
    alignSelf: 'center',
    height: 40,
    width: 200,
    marginTop: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },

  top: {
    flex: 1,
  },

  bottom: {
    flex: 2,
  },

  bottomText: {
    fontSize: 24,
    alignSelf: 'center',
  },

});
