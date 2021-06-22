import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { addNewData } from '../api/data.api'


const AddData = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [stream, setStream] = useState('')
    const [company, setCompany] = useState('')
    const [location, setLocation] = useState('')
    const [assignTo, setAssignTo] = useState('')

    const handleSubmit = async () => {
        try {
            const resp = await addNewData({
                name,
                email_id: email,
                mobileNo: mobile,
                stream,
                company_name: company,
                location,
                assign_to: assignTo
            })
            console.log(resp)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View>
            <Text style={styles.title}>
                Add Data
            </Text>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={setName}
                    value={name}
                    placeholder="Name"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Email"

                />
                <TextInput
                    style={styles.input}
                    onChangeText={setMobile}
                    value={mobile}
                    placeholder="Mobile"

                />
                <TextInput
                    style={styles.input}
                    onChangeText={setStream}
                    value={stream}
                    placeholder="Stream"

                />
                <TextInput
                    style={styles.input}
                    onChangeText={setCompany}
                    value={company}
                    placeholder="Company"

                />
                <TextInput
                    style={styles.input}
                    onChangeText={setLocation}
                    value={location}
                    placeholder="Location"

                />
                <TextInput
                    style={styles.input}
                    onChangeText={setAssignTo}
                    value={assignTo}
                    placeholder="Assign To"

                />
                <Button
                    title="Submit"
                    onPress={handleSubmit}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 50,
        textAlign: 'center'
    },
    formContainer: {},
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
})

export default AddData
