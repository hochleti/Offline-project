import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from "@expo/vector-icons";

// change so it shows the timer screen, same for other screens these are placeholdesr until fully in implemented
function TimerScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function InfomationScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Timer" component={TimerScreen} />
        <Tab.Screen name="Infomation" component={InfomationScreen} />
        <Tab.Screen name="Leaderboard" component ={SettingsScreen}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route })=> ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;

                    if (route.name === 'Infomation') {
                        iconName = focused
                          ? 'ios-information-circle'
                          : 'ios-information-circle-outline';
                      } else if (route.name === 'Timer') {
                        iconName = focused ? 'ios-timer-outline' : 'ios-timer';
                      } else if(route.name === "Leaderboard") {
                          iconName = focused ? "ios-people-outline" : "ios-people";
                      }
                      return <Ionicons names = {iconName} size ={size} color = {color} />;
                },
                tabBarActiveTintColor: '#0290B2',
                tabBarInactiveTintColor:"gray",     
            })}>
        </Tab.Navigator>
      <MyTabs />
    </NavigationContainer>
  );
}
