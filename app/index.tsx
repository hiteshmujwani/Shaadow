import { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Badge, Divider, Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import services from "@/constants/Services";
import Haircut from "@/assets/images/Haircut2.svg";
import FilterIcon from "@/assets/images/filter-icon.svg";
import "@/global.css";
import shops from "@/constants/Shops";
import Carousel from 'react-native-reanimated-carousel'
export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");
  const images = [
    { uri: 'https://dummyimage.com/300.jpg'},
    { uri: 'https://dummyimage.com/300.jpg' },
    { uri: 'https://dummyimage.com/300.jpg' },
  ];

  
  return (
    <SafeAreaView className=" flex-1">
      <ScrollView>
        <View className="m-3">
          {/* Header  */}
          <View className="flex flex-row gap-2 justify-between items-center">
            <View className="flex flex-row gap-3">
              <TouchableOpacity className="h-[50px] w-[50px] rounded-2xl overflow-hidden bg-red-400 ">
                <Image
                  className="h-full w-full"
                  source={require("@/assets/images/avtar.png")}
                />
              </TouchableOpacity>
              <View className="flex">
                <Text className="text-lg font-medium text-black/50">
                  Hello,
                </Text>
                <Text className="text-xl font-bold text-black">
                  Hitesh Mujwani
                </Text>
              </View>
            </View>
            <View>
              <TouchableOpacity className="relative">
                <Icon
                  name="notifications-outline"
                  className=""
                  size={30}
                  color={"#000000"}
                />
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
                placeholder="Search Salon, Parlour & Spas..."
                placeholderTextColor={"#000000"}
                iconColor="#000000"
                onChangeText={(e) => setSearchQuery(e)}
                value={searchQuery}
                theme={{ colors: { elevation: "" } }}
              />
            </View>
            <View className="bg-white h-full flex flex-row rounded-xl px-5 justify-center items-center">
              <TouchableOpacity className="bg-white rounded-xl ">
                <FilterIcon/>
              </TouchableOpacity>
            </View>
          </View>
          {/* Special Offer Section  */}
          
          <View className='flex-1 rounded-xl overflow-hidden justify-center items-center mt-4'>
      <Carousel
        loop
        width={360} 
        height={200} 
        autoPlay={true}
        autoPlayInterval={3000}
        data={images}
        snapEnabled={true}
        renderItem={({ item }) => (
          <View className='justify-center items-center mr-2'>
            <Image source={item} className='w-full h-full ' />
            <Text className='mt-2 text-lg text-gray-800'>Caption for Image</Text>
          </View>
        )}
      />
    </View>
          {/* Services List  */}
          <View className="mt-6">
            <FlatList
              data={services}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => {
                if(item.id != 0){
                  return(
                <View className="flex items-center  mr-5 gap-2">
                  <TouchableOpacity className=" bg-[#FF8C42]/10 p-5 rounded-xl">
                    <Haircut height={28} width={28} />
                  </TouchableOpacity>
                  <Text className="text-[14px] font-bold">{item.name}</Text>
                </View>)}else{
                  return null
                }
              }}
            ></FlatList>
          </View>
          {/* nearby slide */}
          <View className="my-6 flex gap-3">
            <View className="flex flex-row my-2 justify-between">
              <Text className="text-[1.3rem] font-extrabold ">
                Nearby Your Location
              </Text>
              <Text className="text-[#FF8C42] text-lg font-bold">See All</Text>
            </View>
            <View className="flex flex-row">
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={services}
                renderItem={({ item, index }) => (
                  <View
                    key={index}
                    className={`mr-2 px-6 py-3 rounded-full ${item.id == 0 ? 'bg-[#FF8C42]' : 'bg-white'}  border-2 border-[#FF8C42]`}
                  >
                    <TouchableOpacity className="flex flex-row items-center ">
                      <Text className={`text-[#FF8C42] ${item.id == 0 ? 'text-white' : 'text-[#FF8C42]'} font-bold`}>
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
              />
            </View>
            <View className="mt-4 flex gap-2">
              <FlatList
                data={shops}
                scrollEnabled={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                  <View className="bg-white mb-6 p-4 rounded-2xl flex flex-row gap-3">
                    <Image
                      className="h-[80px] w-[80px] rounded-2xl"
                      source={{uri: 'https://dummyimage.com/100.jpg'}}
                    />
                    <View className="flex-1 flex-row justify-between">
                      <View className="flex gap-2">
                        <Text className="text-lg font-extrabold">
                          {item.name}
                        </Text>
                        <Text className="text-sm text-black/60 font-bold">
                          {item.location.substring(0, 20)}
                        </Text>
                        <View className="flex flex-row gap-4">
                          <View className="flex flex-row items-center gap-1">
                            <Icon
                              name="location-sharp"
                              size={15}
                              color={"#FF8C42"}
                            />
                            <Text className="text-sm font-bold">
                              {item.distance} Km
                            </Text>
                          </View>
                          <View className="flex flex-row items-center gap-1">
                            <Icon name="star" size={15} color={"#FF8C42"} />
                            <Text className="text-sm font-bold">
                              {item.rating}
                            </Text>
                          </View>
                        </View>
                      </View>
                      <Icon
                        name={item.id == "1" ? 'bookmark' : 'bookmark-outline'}
                        size={25}
                        color={"#FF8C42"}
                      />
                    </View>
                  </View>
                )}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


