import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useFonts } from 'expo-font';

export default function DummyScreen() {
    const [fontsLoaded] = useFonts({ 'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf') })

    return (
        <View style={styles.screen}>
            <Text style={styles.text}>You can LogOut!</Text>
            <Text style={styles.phoneNumber}>{auth().currentUser.phoneNumber}</Text>
            <View style={{ marginTop: 30 }}>
                <Button title="Signout" onPress={() => auth().signOut()} />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderWidth: 2,
        borderColor: 'lightblue',
        width: 300,
        marginVertical: 30,
        fontSize: 25,
        padding: 10,
        borderRadius: 8,
    },
    text: {
        fontSize: 25,
        fontFamily: "Bubblegum-Sans"
    },
    phoneNumber: {
        fontSize: 21,
        marginTop: 20,
        fontFamily: "Bubblegum-Sans"
    },
});
