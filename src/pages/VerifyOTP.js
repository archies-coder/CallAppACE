import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const VerifyOTP = () => {
    const [otp, setOtp] = useState('')

    const verifyOTP = async () => {
        try {
            const resp = await verifyOTP(mobileNo, otp)
        } catch (error) {

        }
    }

    return (
        <View style={styles.viewContainer}>
            <Text style={{ fontSize: 30, textAlign: 'center' }}>OTP</Text>
            <TextInput
                label="enter OTP"
                // mode="outlined"
                style={styles.input}
                value={otp}
                onChangeText={text => {
                    setOtp(text);
                }}
                keyboardType="number-pad"
            />
            <Button title="    Enter OTP !     " onPress={verifyOTP} />
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

export default VerifyOTP
