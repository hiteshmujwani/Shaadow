import { Stack, Tabs } from "expo-router";
import HomeOutline from "@/assets/images/CustomIcons/Home.svg";
import BookingOutline from "@/assets/images/CustomIcons/Booking.svg";
import SavedOutline from "@/assets/images/CustomIcons/Saved.svg";
import ProfileOutline from "@/assets/images/CustomIcons/Profile.svg";
import HomeFilled from "@/assets/images/CustomIcons/HomeFilled.svg";
import BookingFilled from "@/assets/images/CustomIcons/BookingFilled.svg";
import SavedFilled from "@/assets/images/CustomIcons/SavedFilled.svg";
import ProfileFilled from "@/assets/images/CustomIcons/ProfileFilled.svg";

export default function RootLayout() {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        headerShown: false,
        tabBarStyle: { height: 70 },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 600,
          color: "#FF8C42",
          marginBottom: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) =>
            focused ? <HomeFilled /> : <HomeOutline />,
        }}
      />
      <Tabs.Screen
        name="booking"
        options={{
          title: "Booking",
          tabBarIcon: ({ focused }) =>
            focused ? <BookingFilled /> : <BookingOutline />,
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          tabBarIcon: ({ focused }) =>
            focused ? <SavedFilled /> : <SavedOutline />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) =>
            focused ? <ProfileFilled /> : <ProfileOutline />,
        }}
      />
    </Tabs>
  );
}
