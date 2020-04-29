import React, { useState } from 'react'
import { Button, Keyboard, StyleSheet, TextInput, View } from 'react-native'

const AddContactForm = (props) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [key, setKey] = useState(2)
    const handleNameChange = name => setName(name)
    const handlePhoneChange = phone => setPhone(phone)
    const handleSubmit = () => {
        console.log('submitting')
        props.setContacts(prevContacts => [...prevContacts, {name, phone, key: `${key}`}])
        setKey(prevKey => prevKey + 1)
    }

    return(
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
    )
}

const styles = StyleSheet.create({
    formContainer: {
        borderBottomColor: '#ccc',
        width: '50%'
    }, 
    input: {
        borderBottomColor: 'darkblue',
        borderBottomWidth: 1,
    }
})

export default AddContactForm