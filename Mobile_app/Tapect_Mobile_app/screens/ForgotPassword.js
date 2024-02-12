import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import COLORS from '../constants/color';

const ForgotPassword = ({ navigation }) => {
    const [email, setEmail] = useState('');

    const handleForgotPassword = () => {
        // Implement logic to send a password reset email
        // You may call an API or use a service for this purpose
        console.log(`Password reset email sent to ${email}`);
    };

    return (
        <LinearGradient
            colors={[COLORS.white, COLORS.deepSkyBlue]}
            style={{ flex: 1 }}
        >

            <View style={styles.container}>
                <Image
                    source={require('../assets/tapect.png')} // Replace with your image source
                    style={styles.logo}
                />
                <View style={styles.container}>
                    <Text style={styles.title}>Forgot Password</Text>
                    <View>
                        <Text style={styles.mess}>Enter your email,we will send you a verification code </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            secureTextEntry
                            onChangeText={{ setEmail }}
                            value={email}
                        />
                        <TouchableOpacity style={styles.loginButton} onPress={handleForgotPassword}>
                            <Text style={styles.loginButton}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </LinearGradient>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        // color: COLORS.secondary
        // color: COLORS.secondary
    },
    mess:{
        marginBottom: 16,
    },
    logo: {
        width: 250,
        height: 150,
        resizeMode: 'contain',
        top: 50,
        marginLeft: 40,
        justifyContent: 'center',
        alignItems: 'center',

    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 16,
        // textAlign: "center"
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 8,
        borderRadius: 10
    },
    link: {
        color: COLORS.primary,
        marginTop: 10,
        textAlign: "center"
    },
    loginButton: {
        color: COLORS.white,
        backgroundColor: COLORS.primary,
        paddingHorizontal: 30,
        padding: 5,
        borderRadius: 10,
        marginTop: 2,
        textAlign: "center"
    },
});

export default ForgotPassword;
