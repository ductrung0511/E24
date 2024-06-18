import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {  Redirect, Tabs } from 'expo-router';

import { useClientOnlyValue } from '@/src/components/useClientOnlyValue';
import Colors from '@/src/constants/Colors';
import { useAuth } from '@/src/provider/AuthProvider';

export default function TabLayout() {
  const {session} = useAuth();
    if(!session) {
        return <Redirect href={'/'}/>
    }

  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: Colors.light.background,
      tabBarInactiveBackgroundColor: 'gainsboro',
      tabBarStyle: {
        backgroundColor: Colors.light.green,
      },    
      // Disable the static render of the header on web
      // to prevent a hydration error in React Navigation v6.
      headerShown: useClientOnlyValue(false, true),
    }}>
      <Tabs.Screen name='index' options={{href:null}}/>
      <Tabs.Screen
        name="menu"
        options={{
          title: 'Menu',
          headerShown: false,
          tabBarIcon: () => <></>,
        }}
      />
      <Tabs.Screen
        name="order"
        options={{
          title: 'orderss',
          headerShown : false,
          tabBarIcon: () => <></>,
          // tabBarIcon: ({ color }) => <TabBarIcon name='list' color={color} />,
        }}
      />
    </Tabs>
  );
}
