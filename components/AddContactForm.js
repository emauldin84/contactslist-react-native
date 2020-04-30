import React, { useState } from 'react'
import { Button, Keyboard, Modal, StyleSheet, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import Constants from 'expo-constants'


const AddContactForm = (props) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [key, setKey] = useState(2)
    const handleNameChange = name => setName(name)
    const handlePhoneChange = phone => setPhone(phone)
    const handleSubmit = () => {
        props.setContacts(prevContacts => [...prevContacts, {name, phone, key: `${key}`}])
        setKey(prevKey => prevKey + 1)
        props.handleCloseModal()
    }

    return(
        <Modal visible={props.modalVisible} animationType='slide'>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.modalContainer}>
                    <AntDesign 
                        name="close" 
                        size={35}
                        style={{...styles.modalClose}} 
                        onPress={props.handleCloseModal} 
                    />
                    <View style={styles.formContainer}>
                        <TextInput 
                            style={styles.input}
                            placeholder='name'
                            value={name} 
                            onChangeText={handleNameChange}
                            onBlur={Keyboard.dismiss}
                        />
                        <TextInput 
                            style={styles.input} 
                            placeholder='phone'
                            value={phone} 
                            onChangeText={handlePhoneChange}
                            keyboardType='numeric'
                            onBlur={Keyboard.dismiss}
                        />
                        <Button 
                            title='Add Contact' 
                            color="darkblue"
                            onPress={handleSubmit}
                            />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    modalClose:{
        alignSelf: 'flex-end',
        marginRight: 20
    },
    formContainer: {
        flex: 1,
        borderBottomColor: '#ccc',
        width: '50%',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: -Constants.statusBarHeight,
    }, 
    input: {
        fontSize: 24,
        borderBottomColor: 'darkblue',
        borderBottomWidth: 1,
    }
})

export default AddContactForm