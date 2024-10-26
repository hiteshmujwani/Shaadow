// app-navigation/stack-navigation/MainStackNavigator.tsx
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainTabNavigator} from '../tab-navigation/MainTabNavigator';

const MainStack = createNativeStackNavigator();

export function MainStackNavigator() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="MainTabs"
        component={MainTabNavigator}
        options={{headerShown: false}}
      />
      {/* Other stack screens */}
    </MainStack.Navigator>
  );
}
