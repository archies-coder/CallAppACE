import * as React from 'react';
import { Dimensions, StatusBar, StyleSheet, Text, View } from 'react-native';
import { SceneMap, TabView, TabViewAnimated } from 'react-native-tab-view';

const FirstRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#ff4081' }]} >
        <Text>Hello</Text>
    </View>
);

const SecondRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

const initialLayout = { width: Dimensions.get('window').width };

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
});

export default function TabLayout(props) {
    const [index, setIndex] = React.useState(0);
    const [routes, setRoutes] = React.useState([
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
    ]);

    return (
        <View style={styles.view}>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
                style={styles.container}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    // view: { flex: 1 },
    container: {
        marginTop: StatusBar.currentHeight,
    },
    scene: {
        flex: 1,
    },
});
