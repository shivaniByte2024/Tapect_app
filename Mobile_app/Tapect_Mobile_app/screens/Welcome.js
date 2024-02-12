import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import COLORS from '../constants/color';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const Screen1 = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Screen 1 Content</Text>
  </View>
);

const Screen2 = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Screen 2 Content</Text>
  </View>
);

const Screen3 = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Screen 3 Content</Text>
  </View>
);

const Screen4 = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Screen 4 Content</Text>
  </View>
);

const Screen5 = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Screen 5 Content</Text>
  </View>
);

const Welcome = ({ navigation }) => {
  return (
    <LinearGradient colors={[COLORS.white, COLORS.deepSkyBlue]} style={{ flex: 1 }}>
      <Tab.Navigator
        initialRouteName="Card"
        barStyle={{ backgroundColor: '#652DBF' }}>
        <Tab.Screen
          name="Card"
          component={Screen5}
          options={{
            tabBarLabel: 'Card',
            tabBarIcon: ({ color }) => (
              <Icon name="card" color={color} size={30} />
            ),
            tabBarColor: '#652DBF',
            activeTintColor: '#7C7C7C',
          }}
        />
        <Tab.Screen
          name="Share"
          component={Screen2}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="share" color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="Scan"
          component={Screen3}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="qrcode-scan" color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="Contact"
          component={Screen4}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="phone" color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={Screen1}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="home" color={color} size={30} />
            ),
          }}
        />
      </Tab.Navigator>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({});

export default Welcome;
