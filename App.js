import React from 'react';
import { Keyboard, StyleSheet, TouchableWithoutFeedback, Text, View } from 'react-native';
import Constants from 'expo-constants'


import AddContactForm from './components/AddContactForm'

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <AddContactForm />

      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop: Constants.statusBarHeight
  },
});
