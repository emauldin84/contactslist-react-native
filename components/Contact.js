import React from 'react'
import {StyleSheet, Text, View} from 'react-native'


const Contact = (props) => {
    console.log(props)
    return(
        <View style={styles.contactContainer}>
            <Text>{props.name}</Text>
            <Text>{props.phone}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    contactContainer: {
        padding: 5,
    }
})

export default Contact