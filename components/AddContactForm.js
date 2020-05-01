import React, { useState } from 'react'
import { Alert, Button, Keyboard, Modal, StyleSheet, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import Constants from 'expo-constants'


const AddContactForm = (props) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [key, setKey] = useState(2)
    
    const handleNameChange = name => setName(name)
    const handlePhoneChange = phone => {
        let formattedPhone = formatPhoneNumber(phone)
        setPhone(formattedPhone)
    }
    const formatPhoneNumber = text => {
        let cleaned = ("" + text).replace(/\D/g, "");
        let match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            let intlCode = match[1] ? "+1 " : "",
            number = [intlCode, "(", match[2], ") ", match[3], "-", match[4]].join(
                ""
            );
            return number;
        }
        return text;
    }
    const handleSubmit = () => {
        if (name.length <= 0 && phone.length <= 0){
            Alert.alert(
                'Slow down bucko...',
                'Looks like you forgot to add a name and phone number!'
            )
            return
        }
        if (name.length <= 0){
            Alert.alert(
                'Slow down bucko...',
                'Looks like you forgot to add a name!'
            )
            return
        }
        if (phone.length <= 0){
            Alert.alert(
                'Slow down bucko...',
                'Looks like you forgot to add a phone number!'
            )
            return
        }
        props.setContacts(prevContacts => [...prevContacts, {name, phone, key: `${key}`}])
        setKey(prevKey => prevKey + 1)
        setName('')
        setPhone('')
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
                            autoFocus={true}
                            required={true}

                        />
                        <TextInput 
                            style={styles.input} 
                            placeholder='phone'
                            value={phone} 
                            onChangeText={handlePhoneChange}
                            keyboardType='phone-pad'
                            onBlur={Keyboard.dismiss}
                            required={true}
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
        width: 300,
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