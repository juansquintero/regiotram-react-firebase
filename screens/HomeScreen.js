import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { signOut } from 'firebase/auth';

import { auth } from '../config';
import { AuthenticatedUserContext } from '../providers';

export const HomeScreen = (navigation) => {
  const { user } = useContext(AuthenticatedUserContext);  

  const handleLogout = () => {
    signOut(auth).catch(error => console.log('Error logging out: ', error));
  };
  return (        
    <View style={styles.container}>      
      <View style={styles.row}>
        <Text style={styles.title}>Welcome {user.email}!</Text>
        <Button title='Cerrar sesion' onPress={handleLogout} />
      </View>
      <Text style={styles.text}>Your UID is: {user.uid} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 50,
    paddingHorizontal: 12
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff1234'
  },
  text: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#fff1234'
  }
});
