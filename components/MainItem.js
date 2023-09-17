import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  ChevronDoubleRightIcon,
  ClockIcon,
  HeartIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import { TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MainItem = ({ item }) => {
  const [favorite, setFavorite] = useState(false);
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Food", { ...item })}
    >
      <View className="mx-4 m-3">
        <View>
          <Image
            style={{
              width: "100%",
              aspectRatio: 6 / 4,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
            source={{ uri: item.featured_image }}
          />
        </View>
        <View
          style={{
            position: "absolute",
            right: 20,
            top: 10,
            backgroundColor: "rgba(255,255,255,0.2)",
          }}
          className="rounded-full"
        >
          <TouchableOpacity
            className="p-2 rounded-full"
            onPress={() => setFavorite(!favorite)}
          >
            <HeartIcon color={favorite ? "red" : "white"} size={30} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            position: "absolute",
            right: 20,
            top: 150,
            backgroundColor: "#1C7CF7",
          }}
          className="p-2 rounded-xl flex-row items-center justify-between"
        >
          <ClockIcon color={"white"} size={25} />
          <Text className="text-white text-lg font-bold ml-2">{item.time}</Text>
        </View>
        <View
          style={{
            backgroundColor: "#F0F0F0",
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            position: "relative",
          }}
          className="-mt-5 border shadow-2xl"
        >
          <View className="mx-3 flex-row items-center justify-between">
            <View>
              <Text className="text-2xl font-bold mt-2">{item.name}</Text>
              <Text>{item.cuisines}</Text>
            </View>
            <View className="bg-cyan-200 p-1 rounded-xl flex-row items-center justify-between">
              <StarIcon color={"white"} size={28} />
              <Text className="text-lg font-bold text-white mr-2">
                {item.aggregate_rating}
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                borderColor: "gray",
                borderWidth: 1,
                height: 1,
                marginTop: 10,
              }}
              className="mx-2"
            />
          </View>
          <View className="flex-row items-center justify-between pb-3">
            <View className="flex-row items-center justify-center mt-2 mx-1">
              <ChevronDoubleRightIcon size={28} color={"#2870EE"} />
              <Text className="text-lg font-bold">
                {item.no_of_Delivery} Order placed here
              </Text>
            </View>
            <View className="mt-2 mr-4">
              <Text className="font-bold text-lg">MAX SAFETY</Text>
              <Text className="font-semibold text-center">DELIVERY</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MainItem;
