import React from 'react'
import {SectionList, StyleSheet, Text, View} from 'react-native'

import Contact from './Contact'

const renderItem = ({item}) => <Contact {...item}/>
const renderSectionHeader = ({section}) => <Text>{section.title}</Text>

const ContactsList = (props) => {
    const contactsByLetter = props.contacts.reduce((obj, contact) => {
        const firstLetter = contact.name[0].toUpperCase()
        return {
            ...obj,
            [firstLetter]: [...(obj[firstLetter] || []), contact]
        }
    }, {})
    // console.log('contactsByLetter', contactsByLetter)

    const sections = Object.keys(contactsByLetter).sort().map(letter => ({
        data: contactsByLetter[letter],
        title: letter,
    }))
    console.log('sections', sections)

    return(
        <View style={styles.listContainer}>
            <SectionList
            sections={sections}
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
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

    }
})

export default ContactsList