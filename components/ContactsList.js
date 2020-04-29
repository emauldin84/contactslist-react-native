import React from 'react'
import {FlatList, StyleSheet, Text, View} from 'react-native'

import Contact from './Contact'

const ContactsList = (props) => {
    return(
        <View style={styles.listContainer}>
            <FlatList
            data={[...props.contacts]}
            renderItem={({item}) => <Contact {...item}/>}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        alignSelf: 'flex-start',
        marginHorizontal: 15,
        width: '90%',
        backgroundColor: 'lightblue'

    }
})

export default ContactsList