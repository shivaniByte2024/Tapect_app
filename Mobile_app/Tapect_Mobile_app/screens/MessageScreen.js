// MessageScreen.js
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

const MessageScreen = ({ route, navigation }) => {
    const { message, redirectScreen } = route.params;

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigation.navigate(redirectScreen);
        }, 3000); // Redirect after 3 seconds, adjust as needed

        return () => clearTimeout(timeout);
    }, [navigation, redirectScreen]);

    return (
        <View>
            <Text>{message}</Text>
        </View>
    );
};

export default MessageScreen;
