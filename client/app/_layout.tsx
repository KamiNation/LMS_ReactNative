import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import { View, Text } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import { Stack } from 'expo-router';
import { PersistGate } from 'redux-persist/integration/react'


// Custom import
import { persistor, RootState, store } from '@/store/configureStore';



export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) {
      console.error(error)
      throw error;
    }
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RootLayoutNav />
      </PersistGate>
    </Provider>
  );
}

function RootLayoutNav() {


  const isLoggedIn = useSelector((state: RootState) => state.authentication.isLoggedIn)

  return (
    <>{
      isLoggedIn
        ?
        <View><Text>Login there</Text></View>
        :
        (
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name='index' />
            <Stack.Screen name='(routes)/welcome-intro/index' />
            <Stack.Screen name='(routes)/login/index' />
          </Stack>
        )

    }
    </>)


}
