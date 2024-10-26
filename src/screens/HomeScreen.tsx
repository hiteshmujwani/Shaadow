import {View, Text, StatusBar} from 'react-native';
import React from 'react';

const HomeScreen = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <StatusBar backgroundColor={'#787878'} />
      <Text className="text-4xl font-extrabold">Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
