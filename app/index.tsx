import {
  Image,
  SafeAreaViewComponent,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  ActivityIndicator,
  Avatar,
  Badge,
  MD2Colors,
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";

export default function Index() {
  return (
    <SafeAreaView className="p-3 flex-1">
      <View>
        <View className="flex flex-row gap-2 justify-between items-center">
          <View className="flex flex-row gap-3">
            <TouchableOpacity className="h-[50px] w-[50px] rounded-2xl overflow-hidden">
              <Image
                className="h-full w-full"
                source={require("../assets/images/image5.jpeg")}
              />
            </TouchableOpacity>
            <View className="flex">
              <Text className="text-lg font-medium text-black/50">Hello,</Text>
              <Text className="text-xl font-bold text-black">
                Hitesh Mujwani
              </Text>
            </View>
          </View>
          <View>
            <TouchableOpacity className="relative">
              <Icon name="notifications-outline" size={30} color={"#000000"} />
              <Badge className="!bg-orange-500 font-bold absolute top-[-5px] right-[-5px]">
                5
              </Badge>
            </TouchableOpacity>
          </View>
        </View>
        <View></View>
      </View>
    </SafeAreaView>
  );
}
