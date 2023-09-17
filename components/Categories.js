import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { categories, offers } from "../dummy_data/data";

const Categories = () => {
  const [active, setActive] = useState("fastest delivery");
  return (
    <View className="mb-3">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((item, index) => {
          let isActive = item == active;
          let TextColor = isActive ? "text-white font-bold" : "text-black";
          return (
            <TouchableOpacity
              key={index}
              style={{ backgroundColor: isActive ? "#E25822" : "#FFFFFF" }}
              className="mx-2 p-3 rounded-2xl"
              onPress={() => setActive(item)}
            >
              <Text className={TextColor}>{item.name}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <View className="px-4 mt-4 flex-row mb-3 items-center justify-between">
        <Text className="text-2xl font-bold">Offer of the month</Text>
        <TouchableOpacity>
          <Text className="font-semibold text-lg" style={{ color: "#E25822" }}>
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {offers.map((item, index) => {
            return (
              <View key={index} className="px-2">
                <Image
                  style={{ height: 120, width: 225 }}
                  source={{ uri: item.image }}
                  className="rounded-xl"
                />
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Categories;
