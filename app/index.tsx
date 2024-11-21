import { Text, View } from "react-native";
import { StyleSheet } from 'react-native';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
    const [message, setMessage] = useState('Loading...');

    useEffect(() => {
        // Replace with your VM's public IP or ngrok URL
        const url = 'http://<VM_PUBLIC_IP>:3000';
        axios.get(url)
            .then((response) => {
                setMessage(response.data);
            })
            .catch((error) => {
                console.error(error);
                setMessage('Error connecting to the server');
            });
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{message}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    text: { fontSize: 20 },
});

export default App;

