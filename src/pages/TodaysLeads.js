import React, { Fragment, useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet, StatusBar } from 'react-native'
import { getAllCallLogs } from '../api/call-logs.api'

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

const TodaysLeads = () => {
    const [callLogs, setCallLogs] = useState([
        {
            call: "9131795385",
            id: '9131795385',
            time: "Wed Jun 23 2021 05:27:53 GMT+0000 (Coordinated Universal Time)"
        },
        {
            call: "7995562204",
            id: '79955',
            time: "Wed Jun 23 2021 05:38:51 GMT+0000 (Coordinated Universal Time)"
        }
    ])

    const fetchCallLogs = async () => {
        try {

            const resp = await getAllCallLogs()
            console.log(resp)
            if (resp.result.length > 0) {
                const data = resp.result.map((el, i) => ({ ...el, id: i.toString() }))
                // setCallLogs(data)
            }
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        fetchCallLogs()
    }, [])

    const renderProductItem = ({ item }) => (
        <View key={item.id}>
            <Text>{item.call}</Text>
        </View>
    );

    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );


    return (
        <View>
            <Text>

                <FlatList data={callLogs}
                    // keyExtractor={keyExtractor}
                    renderItem={renderProductItem} />
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

export default TodaysLeads
