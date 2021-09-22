import 'react-native-gesture-handler';
import React from 'react';
import MainNavigation from './navigation/navigation';
import { Provider } from 'react-redux';
import { store } from './stores';
import { enableScreens } from 'react-native-screens';
import {Provider as PaperProvider} from 'react-native-paper';
enableScreens()

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PaperProvider>
        <MainNavigation />
        </PaperProvider>
      </Provider>
    </>
  )
}

export default App
