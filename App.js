import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { RootNavigator } from './navigation/RootNavigator';
import { AuthenticatedUserProvider } from './providers';
import { auth, db} from './config';
import { setDoc, doc, getDoc} from 'firebase/firestore';



const App = () => {
  const [user, setUser] = useState(null);
  
  const getRol = async () => {
    const docRef = doc(db, `users/${uid}`);
    const docCrypt = await getDoc(docRef);
    const expoInfo = docCrypt.data().rol;
    return expoInfo;
  }
  return (
    <AuthenticatedUserProvider>
      <SafeAreaProvider>        
        <RootNavigator>         
        </RootNavigator>
      </SafeAreaProvider>
    </AuthenticatedUserProvider>
  );
};

export default App;
