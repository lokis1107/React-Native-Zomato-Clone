import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { MinusIcon, PlusIcon, StarIcon } from "react-native-heroicons/solid";
import { HeartIcon, ShareIcon } from "react-native-heroicons/outline";

const MenuCard = ({ item, card, setCard }) => {
  const [count, setCount] = useState(0);
  return (
    <View className="flex-row items-center justify-between mx-1">
      <View>
        <View className="p-5">
          <Text className="text-lg font-bold">{item.name}</Text>
          <Text className="font-bold text-lg">{item.price}</Text>
        </View>
        <View className="flex-row items-center mx-4">
          <View className="flex-row items-center">
            <StarIcon color={"gold"} size={30} />
            <Text className="text-lg font-bold ml-2">{item.star}</Text>
          </View>
          <View className="p-1 ml-3 bg-pink-400 rounded-xl">
            <Text className="text-lg font-bold">{item.bestSeller}</Text>
          </View>
        </View>
        <View className="flex-row items-center mx-4 mt-3">
          <View className="p-2 border rounded-full mr-2 border-pink-400">
            <HeartIcon size={30} color={"#E11358"} />
          </View>
          <View className="p-2 border rounded-full border-pink-400">
            <ShareIcon size={30} color={"#E11358"} />
          </View>
        </View>
      </View>
      <View>
        <Image
          source={{ uri: item.image }}
          style={{ height: 130, width: 130 }}
          className="-mt-8 mr-2 rounded-2xl"
        />
        <View
          className="flex-row items-center justify-between p-2 mx-1 rounded-2xl -mt-3"
          style={{ backgroundColor: "#F05050" }}
        >
          <TouchableOpacity
            onPress={() => {
              setCard(card.filter((p) => p.id !== item.id));
              setCount(count - 1);
            }}
          >
            <MinusIcon color={"white"} size={30} />
          </TouchableOpacity>
          <Text className="text-2xl font-bold text-white">{count}</Text>
          <TouchableOpacity
            onPress={() => {
              setCard([...card, item]);
              setCount(count + 1);
            }}
          >
            <PlusIcon color={"white"} size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MenuCard;
