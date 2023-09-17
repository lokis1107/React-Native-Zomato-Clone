import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { MagnifyingGlassIcon } from "react-native-heroicons/solid";
import Categories from "../components/Categories";
import Preferred from "../components/Preferred";
import { hotel } from "../dummy_data/data";
import MainItem from "../components/MainItem";

const Home = () => {
  return (
    <View className="flex-1">
      <SafeAreaView>
        {/* Search Part */}
        <View className="flex-row items-center justify-between mx-4 mt-3 p-3 border rounded-full mb-3">
          <TextInput placeholder="Restaurant name and a dish" />
          <TouchableOpacity className="rounded-full">
            <MagnifyingGlassIcon color={"#E25822"} size={35} strokeWidth={2} />
          </TouchableOpacity>
        </View>

        <ScrollView
          contentContainerStyle={{ paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
        >
          {/* Categories Part */}
          <Categories />

          {/* Most Preferred Part */}
          <Preferred />

          {/* Main items of the home screen */}
          {hotel.map((item) => (
            <MainItem item={item} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Home;
