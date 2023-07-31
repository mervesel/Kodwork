import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import JobsDetail from './pages/JobsDetail/JobsDetail';
import Jobs from './pages/Jobs/Jobs';
import FavoritedJobs from './pages/FavoritedJobs/FavoritedJobs';
import {persistStore} from 'redux-persist';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store from './redux/store';

let persistor = persistStore(store);

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const JobsScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Jobs"
        component={Jobs}
        options={{
          headerTitleAlign: 'center',
          headerTintColor: '#FFBA1B',
        }}
      />
      <Stack.Screen
        name="JobsDetail"
        component={JobsDetail}
        options={{
          headerTitleAlign: 'center',
          headerTintColor: '#FFBA1B',
        }}
      />
    </Stack.Navigator>
  );
};

const FavoritedScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorited"
        component={FavoritedJobs}
        options={{
          headerTitleAlign: 'center',
          headerTintColor: '#FFBA1B',
        }}
      />
         <Stack.Screen
        name="JobsDetail"
        component={JobsDetail}
        options={{
          headerTitleAlign: 'center',
          headerTintColor: '#FFBA1B',
        }}
      />
    </Stack.Navigator>
  );
};

const Router = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{headerShown: false, tabBarActiveTintColor: 'red'}}>
            <Tab.Screen name="JobsScreen" component={JobsScreen} />
            <Tab.Screen name="FavoritedScreen" component={FavoritedScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default Router;
