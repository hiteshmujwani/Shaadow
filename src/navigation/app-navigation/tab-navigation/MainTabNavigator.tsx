// app-navigation/tab-navigation/MainTabNavigator.tsx
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../../screens/HomeScreen';

const Tab = createBottomTabNavigator();

export function MainTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      {/* Other tab screens */}
    </Tab.Navigator>
  );
}
