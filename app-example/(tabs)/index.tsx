import { View, Text } from "react-native";
import React from "react";
import "../../global.css";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  return (
    <SafeAreaView>
      <View className="flex h-full w-screen justify-center items-center">
        <Text className="text-white text-3xl font-extrabold">index</Text>
      </View>
    </SafeAreaView>
  );
};

export default index;
