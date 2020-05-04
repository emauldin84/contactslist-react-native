import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants'
import { AntDesign } from '@expo/vector-icons';

import AddContactForm from './components/AddContactForm'
import ContactsList from './components/ContactsList'

export default function App() {
  const [contacts, setContacts] = useState([
      {name: 'Eric Mauldin', phone: '(800) 555-5555', key: '0'},
      {name: 'Caitlin Cirou', phone: '(800) 666-6666', key: '1'},
    ])
  const [modalVisible, setModalVisible] = useState(false)

  const handleCloseModal = () => {
    setModalVisible(false)
  }
  const handleOpenModal = () => {
    setModalVisible(true)
  }

  return (
      <View style={styles.container}>
        <AntDesign 
          name="plus" 
          size={35}
          style={{...styles.modalOpen}} 
          onPress={handleOpenModal}
        />
        <AddContactForm setContacts={setContacts} modalVisible={modalVisible} handleCloseModal={handleCloseModal}/>
        <ContactsList contacts={contacts}/>
      </View>
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
  modalOpen:{

  }
});
