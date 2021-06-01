import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@screens/Home';

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default App;
