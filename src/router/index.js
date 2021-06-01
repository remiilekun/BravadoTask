import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@screens/Home';
import ViewUserScreen from '@screens/ViewUser';

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ViewUser" component={ViewUserScreen} />
    </Stack.Navigator>
  );
}

export default App;
