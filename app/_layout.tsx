import { Stack, Tabs } from "expo-router";
import HomeOutline from '@/assets/images/CustomIcons/Home.svg'
import BookingOutline from '@/assets/images/CustomIcons/Booking.svg'
import SavedOutline from '@/assets/images/CustomIcons/Saved.svg'
import ProfileOutline from '@/assets/images/CustomIcons/Profile.svg'


export default function RootLayout() {
  return (
    <Tabs initialRouteName="index" screenOptions={{ headerShown: false,tabBarStyle:{height:70},tabBarLabelStyle:{fontSize:12,fontWeight:600,color:"#FF8C42"}}}>
      <Tabs.Screen name="index" options={{title:"Home", tabBarIcon:()=><HomeOutline/>}}/>
      <Tabs.Screen name="booking" options={{title:"Booking", tabBarIcon:()=><BookingOutline/>}}/>
      <Tabs.Screen name="saved" options={{title:"Saved", tabBarIcon:()=><SavedOutline/>}}/>
      <Tabs.Screen name="profile" options={{title:"Profile", tabBarIcon:()=><ProfileOutline/>}}/>
    </Tabs>
  );
}
