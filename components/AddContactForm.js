import React, { useState } from 'react'
import { Button, Keyboard, StyleSheet, TextInput, View } from 'react-native'

const AddContactForm = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    const handleNameChange = name => setName(name)
    const handlePhoneChange = phone => setPhone(phone)
    const handleSubmit = () => {
        console.log(submitting)
    }

    return(
        <View style={styles.formContainer}>
            <TextInput 
                style={styles.input}
                placeholder='name'
                value={name} 
                onChangeText={handleNameChange}
            />
            <TextInput 
                style={styles.input} 
                placeholder='phone'
                value={phone} 
                onChangeText={handlePhoneChange}
                keyboardType='numeric'
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
    }, 
    input: {
        borderBottomColor: 'darkblue',
        borderBottomWidth: 1,
    }
})

export default AddContactForm