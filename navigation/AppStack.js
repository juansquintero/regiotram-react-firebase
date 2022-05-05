//import * as React from 'react';
import React, { useState, useContext, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthenticatedUserContext } from '../providers';
import { HomeScreen } from '../screens';
import { AdminScreen, UserScreen, CashierScreen } from '../screens';

const Stack = createStackNavigator();

export const AppStack = () => {
  const { user } = useContext(AuthenticatedUserContext);
  if (user.rol === 1) {
    return (
      <Stack.Navigator>
        <Stack.Screen name='Admin' component={AdminScreen} />              
      </Stack.Navigator>
    );
  }else{
      <Stack.Navigator>
        <Stack.Screen name='User' component={UserScreen} />      
      </Stack.Navigator>
  }
  return (      
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />       
      </Stack.Navigator>
  );
};
