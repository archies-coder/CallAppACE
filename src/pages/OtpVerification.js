import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import { requestOTP } from '../api/auth.api'

const OtpVerification = () => {
    const [mobile, setMobile] = useState('')

    const GetOTP = async () => {
        try {
            const resp = await requestOTP(mobile)
            debugger
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <View style={styles.viewContainer}>
            <Text style={{ fontSize: 30, textAlign: 'center' }}>Mobile Number</Text>
            <TextInput
                label="enter mobile number"
                // mode="outlined"
                style={styles.input}
                value={mobile}
                onChangeText={text => {
                    setMobile(text);
                }}
                keyboardType="number-pad"
            />
            <Button title="     Get OTP !     " onPress={GetOTP} />
        </View>
    )
}

const styles = StyleSheet.create({
    viewContainer: {
        padding: 20,
        borderRadius: 10,
        marginTop: 30,
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
})

export default OtpVerification
