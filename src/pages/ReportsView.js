import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { getAllReports } from '../api/reports.api'
import TabLayout from './views/TabLayout'

const ReportsView = () => {
    const [reports, setReports] = useState({
        callbacks: [],
        interested: [],
        notinterested: [],
        sample: [],
    })

    const fetchReports = async () => {
        const data = await getAllReports()
        setReports({
            callbacks: data.callbacks,
            interested: data.interested,
            notinterested: data.notinterested,
            sample: data.sample
        })
    }

    useEffect(() => {
        fetchReports()
    }, [])

    const { callbacks, interested, notinterested, sample } = reports

    console.log(reports)
    return (
        <View>
            {/* <TabLayout /> */}
            <Text>Hi</Text>
        </View>
    )
}

export default ReportsView

const styles = StyleSheet.create({})
