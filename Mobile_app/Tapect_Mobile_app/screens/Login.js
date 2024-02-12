import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CheckBox } from 'react-native-elements';
import COLORS from '../constants/color';
import { FontAwesome } from '@expo/vector-icons';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setChecked] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
 const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };
  const handleLogin = () => {
    // Implement your login logic here WelcomeScreen
    console.log(
      `Logging in with username: ${username} and password: ${password}`
    );
  };
  return (
    <LinearGradient
      colors={[COLORS.white, COLORS.deepSkyBlue]}
      style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.title_one}>Sign in to</Text>
          <Text style={styles.title}>your account</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
          <FontAwesome name={'envelope'} size={15} style={styles.fontIcon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={!isPasswordVisible}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <FontAwesome name={'lock'} size={20} style={styles.fontIcon} />
          <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={{
            position: 'absolute',
            right: 40,
            flex: 1,
          }}>
          <FontAwesome
            name={isPasswordVisible ? 'eye-slash' : 'eye'}
            size={20}
            color="#7C7C7C"
            style={{ top: -18 }}
          />
        </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 20,
              }}>
              <CheckBox
                onPress={handleCheckboxChange}
                checked={isChecked}
                size={17}
                checkedColor="#7C7C7C"
                uncheckedColor="red"
                containerStyle={{
                  backgroundColor: 'transparent',
                  borderWidth: 0,
                  padding: 0,
                }}
              />
              <Text>
                <Text
                  style={{
                    color: '#7C7C7C',
                    fontSize: 18,
                    fontWeight: 'normal',
                  }}>
                  Keep me logged in
                </Text>
                
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.link}
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButton}>Sign in</Text>
          </TouchableOpacity>         
          
          <TouchableOpacity
          style={styles.link}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.link}>
              <Text
                style={{
                  color: '#7C7C7C',
                  fontSize: 18,
                  fontWeight: 'normal',
                }}>
               New hare?{' '}
              </Text>
              <Text
                style={{ color: '#652DBF', fontSize: 18, fontWeight: 'normal' }}>
                create an account
              </Text>
            </Text>
        </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'center',
    padding: 15,
    top:30
    // color: COLORS.secondary
    // color: COLORS.secondary
  },
  fontIcon: {
      top: -55,
      left: 15,
      color: '#7C7C7C',
      padding: 0,
    },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  title_one: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
   height: 50,
    borderColor: '#7C7C7C',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 45,
    borderRadius: 10,
    position: 'relative',
  },
  forgot:{
    marginBottom:15,
    marginTop:50,
    textAlign: 'center',
    fontSize:16
  },
  link: {
    color: COLORS.primary,
    marginTop: 10,
    textAlign: 'center',
  },
  loginButton: {
    color: COLORS.white,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 30,
    padding: 5,
    borderRadius: 10,
    marginTop: 2,
    textAlign: 'center',
  },
});

export default Login;
