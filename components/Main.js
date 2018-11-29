import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

class Main extends Component {
  static navigationOptions = {
    title: 'Chatter'
  };

  state = {
    name: ''
  };

  onPress = () =>
    this.props.navigation.navigate('Chat', { name: this.state.name});

  onChangeText = name =>
    this.setState({ name });

  render() {
    return (
      <View>
        <Text style={styles.title}>Ingresa tu nombre:</Text>
        <TextInput
          style={styles.nameInput}
          placeHolder="Alejandro Hernández"
          onChangeText={this.onChangeText}
          value={this.state.name}
        />
        <TouchableOpacity onPress={this.onPress}>
          <Text style={styles.buttonText}>Siguiente</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const offset = 24;
const styles = StyleSheet.create({
  title: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
  },
  nameInput: {
    height: offset * 2,

    margin: offset,
    paddingHorizontal: offset,
    borderColor: '#111111',
    borderWidth: 1,
  },
  buttonText: {
    marginLeft: offset,
    fontSize: offset,
  },
});

export default Main;