import React, { useCallback, useEffect, useState } from 'react';
import { View, Image, Animated, Easing,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import * as SplashScreen from 'expo-splash-screen';
import SignupScreen from './screens/Signup';
import WelcomeScreen from './screens/Welcome';
import LoginScreen from './screens/Login';
import MessageScreen from './screens/MessageScreen';
import ForgotPassword from './screens/ForgotPassword';
import { LinearGradient } from 'expo-linear-gradient';

import COLORS from './constants/color';
const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  const [showSecondSplash, setShowSecondSplash] = useState(false);
  // const fadeInOpacity = new Animated.Value(0);
  const fadeInOpacity1 = new Animated.Value(0);

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise(resolve => setTimeout(resolve, 4000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);

        // Fade in animation
        // Animated.timing(fadeInOpacity, {
        //   toValue: 1,
        //   duration: 5000, // 1 second
        //   easing: Easing.linear,
        //   useNativeDriver: true,
        // }).start();

        // Simulate a second splash screen after 10 seconds
        setTimeout(() => {
          setShowSecondSplash(true);
        }, 10000);
        Animated.timing(fadeInOpacity1, {
          toValue: 1,
          duration: 3000, // 3 second
          easing: Easing.linear,
          useNativeDriver: true,
        }).start();

      }
    }

    prepare();
  }, [fadeInOpacity1]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady && showSecondSplash) {
      await new Promise(resolve => setTimeout(resolve, 5000));
      await SplashScreen.hideAsync();
    }
  }, [appIsReady, showSecondSplash]);

  if (!appIsReady) {
    return (
      <LinearGradient colors={[COLORS.white, COLORS.deepSkyBlue]} style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', padding: 15, marginLeft: 100 }}>
          <Animated.Image
            source={require('./assets/tapect.png')}
            // style={{ opacity: fadeInOpacity }}
          />
        </View>
      </LinearGradient>
    );
  }

  if (!showSecondSplash) {
    return (
      <LinearGradient colors={[COLORS.white, COLORS.deepSkyBlue]} style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', padding: 0, marginLeft: 0 }}>
          <Animated.Image
            source={require('./assets/CARD.png')}
            style={{ opacity: fadeInOpacity1,width: 400,
        height: 200,
        resizeMode: 'contain',
        top: -10 }}
          />
         
        </View>
      </LinearGradient>
    );
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Welcome" component={WelcomeScreen} options={{
          headerShown:false
        }}/>
          <Stack.Screen name="Signup" component={SignupScreen} options={{
          headerShown:false
        }} />
          <Stack.Screen name="Login" component={LoginScreen} options={{
          headerShown:false
        }} />
          <Stack.Screen name="Message" component={MessageScreen} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{
          headerShown:false
        }}/>
        </Stack.Navigator>
      </NavigationContainer>
      
    </View>
  );
};

export default App;
