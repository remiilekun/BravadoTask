import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@screens/Home';
import ViewPostScreen from '@screens/ViewPost';

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ViewPost" component={ViewPostScreen} />
    </Stack.Navigator>
  );
}

export default App;
