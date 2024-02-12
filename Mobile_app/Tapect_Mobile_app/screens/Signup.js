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
import COLORS from '../constants/color';
import { CheckBox } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
// import axios from 'axios';

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [full_name, setFullName] = useState('');
  const [organization_name, setOrganizationName] = useState('');
  const [c_password, setCPassword] = useState('');
  const [error, setError] = useState('');
  const [isValid, setValid] = useState(false);
  const [isChecked, setChecked] = useState(true);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isCPasswordVisible, setIsCPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const toggleCPasswordVisibility = () => {
    setIsCPasswordVisible(!isCPasswordVisible);
  };
  const validateForm = () => {
    if (
      full_name.trim() === '' ||
      email.trim() === '' ||
      password.trim() === '' ||
      organization_name.trim() === '' ||
      c_password.trim() === ''
    ) {
      setError('All fields are required');
      setValid(false);
    } else if (!isValidEmail(email)) {
      setError('Enter a valid email address');
      setValid(false);
    } else if (password.length < 8) {
      setError('Password must be at least 8 characters');
      setValid(false);
    } else if (password !== c_password) {
      setError('Passwords do not match');
      setValid(false);
    } else {
      setError('');
      setValid(true);
    }
  };

  const isValidEmail = (email) => {
    // Use a regex or any other validation method to check if the email is valid
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSignup = async () => {
    // Implement your signup logic here
    validateForm();
    if (isValid) {
      try {
        // Your registration logic here
        const response = await axios.post(
          'http://localhost:3000/api/register/',
          {
            full_name,
            email,
            organization_name,
            password,
            c_password,
          }
        );

        // Display a success message and redirect to the login screen
        navigation.navigate('Message', {
          message: 'User registered successfully',
          redirectScreen: 'Login',
        });
      } catch (error) {
        // Handle registration error
        setError('Registration failed. Please try again.');
      }
    }
  };

  return (
    <LinearGradient
      colors={[COLORS.white, COLORS.deepSkyBlue]}
      style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Create</Text>
        <Text style={styles.title}>your account</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Full name"
          onChangeText={setFullName}
          value={full_name}
        />
        <FontAwesome name={'user'} size={20} style={styles.fontIcon} />
        <TextInput
          style={styles.input}
          placeholder="Enter your Organization name"
          onChangeText={(text) => setOrganizationName(text)}
          value={organization_name}
        />
        <FontAwesome name={'user'} size={20} style={styles.fontIcon} />
        <TextInput
          style={styles.input}
          placeholder="Enter your Email"
          onChangeText={setEmail}
          value={email}
        />
        <FontAwesome name={'envelope'} size={15} style={styles.fontIcon} />
        <TextInput
          secureTextEntry={!isPasswordVisible}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
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
            style={{ top: 50 }}
          />
        </TouchableOpacity>
        <TextInput
          secureTextEntry={!isCPasswordVisible}
          style={styles.input}
          placeholder="Enter your Confirm Password"
          onChangeText={setCPassword}
          value={c_password}
        />
        <FontAwesome name={'lock'} size={20} style={styles.fontIcon} />
        <TouchableOpacity
          onPress={toggleCPasswordVisibility}
          style={{
            position: 'absolute',
            right: 40,
            flex: 1,
          }}>
          <FontAwesome
            name={isCPasswordVisible ? 'eye-slash' : 'eye'}
            size={20}
            style={{ top: 130 }}
            color="gray"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 25,
            }}>
            <CheckBox
              onPress={handleCheckboxChange}
              checked={isChecked}
              size={17}
              checkedColor="gray"
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
                I accept the{' '}
              </Text>
              <Text
                style={{ color: '#652DBF', fontSize: 18, fontWeight: 'normal' }}>
                Terms & Conditions
              </Text>
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={handleSignup}>
          <Text style={styles.loginButton}>Continue</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.link}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>
              <Text
                style={{
                  color: '#7C7C7C',
                  fontSize: 18,
                  fontWeight: 'normal',
                }}>
               Already have an account?{' '}
              </Text>
              <Text
                style={{ color: '#652DBF', fontSize: 18, fontWeight: 'normal' }}>
                Sign in
              </Text>
            </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'center',
    padding: 15,
    top:30,
    // color: COLORS.secondary
    // color: COLORS.secondary
  },
  fontIcon: {
      top: -43,
      left: 15,
      color: '#7C7C7C',
      padding: 0,
    },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    top:10,
  },
  input: {
   height: 50,
    borderColor: '#7C7C7C',
    borderWidth: 1,
    marginBottom: 6,
    paddingLeft: 45,
    borderRadius: 10,
    position: 'relative',
  },
  link: {
    color: COLORS.primary,
    marginTop: 10,
    textAlign: 'center',
    fontSize: 18,
  },
  loginButton: {
    color: COLORS.white,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 30,
    padding: 8,
    borderRadius: 10,
    marginTop: 2,
    textAlign: 'center',
    fontSize:16
  },
});

export default Signup;
