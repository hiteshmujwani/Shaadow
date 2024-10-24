import { useState } from "react";
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  Badge,
  Searchbar,
} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import services from "@/constants/Services";

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <SafeAreaView className="p-3 flex-1">
      <View>
        {/* Header  */}
        <View className="flex flex-row gap-2 justify-between items-center">
          <View className="flex flex-row gap-3">
            <TouchableOpacity className="h-[50px] w-[50px] rounded-2xl overflow-hidden bg-red-400 ">
              <Image
                className="h-full w-full"
                source={require("../assets/images/avtar.png")}
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
              <Icon name="notifications-outline" className="" size={30} color={"#000000"} />
              <Badge className="!bg-orange-500 font-bold absolute top-[-5px] right-[-5px]">
                5
              </Badge>
            </TouchableOpacity>
          </View>
        </View>
        {/* Search And Filter Section */}
        <View className="flex flex-row items-center gap-2 mt-4">
          <View className="flex-1 !bg-white rounded-xl overflow-hidden">
          <Searchbar
            className="!bg-white"
            placeholder="Search"
            placeholderTextColor={"#000000"}
            iconColor="#000000"
            onChangeText={(e) => setSearchQuery(e)}
            value={searchQuery}
            theme={{colors:{elevation:""}}}
          />
          </View>
          <View className="bg-white h-full flex flex-row rounded-xl px-5 justify-center items-center">
          <TouchableOpacity className="bg-white rounded-xl ">
            <Icon name="filter" size={20}/>
          </TouchableOpacity>
          </View>
        </View>
        {/* services slide */}
        <View className="mt-4">
          <FlatList horizontal showsHorizontalScrollIndicator={false} data={services} renderItem={({item})=>(
            <View className="mr-2 px-2 py-2 rounded-full bg-white">
              <TouchableOpacity  className="flex flex-row items-center gap-2 ">
                <View className="border-[1px] border-black/30 rounded-full p-2"><Icon name="home" size={20}/></View>
                <Text className="text-lg font-medium">{item.name}</Text>
              </TouchableOpacity>
            </View>
          )}/>
        </View>
        {/* Special Offer Section  */}
        <View>
          <FlatList data={[1]} renderItem={({item})=>(
            <View>
             {/* offer will come here  */}
            </View>
          )}/>
        </View>
      </View>
    </SafeAreaView>
  );
}
