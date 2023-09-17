import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useContext } from "react";
import {
  ChevronLeftIcon,
  ReceiptPercentIcon,
  StarIcon,
  TruckIcon,
} from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import {
  CameraIcon,
  BookmarkIcon,
  ShareIcon,
  ClockIcon,
  CurrencyRupeeIcon,
} from "react-native-heroicons/outline";
import { menu } from "../dummy_data/data";
import MenuCard from "../components/MenuCard";
import { cardItem } from "../Context";
import Cart from "../components/Cart";

const Food = (props) => {
  const item = props.route.params;
  const { card, setCard } = useContext(cardItem);
  const navigation = useNavigation();
  // console.log(item);
  return (
    <View className="flex-1">
      <View className="flex-row items-center justify-between">
        <View className="items-center justify-center">
          <TouchableOpacity
            className="p-2 ml-2 mt-2 border rounded-full"
            onPress={() => navigation.goBack()}
          >
            <ChevronLeftIcon size={30} color={"black"} />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center justify-between mt-3">
          <CameraIcon size={35} color={"black"} />
          <BookmarkIcon size={35} color={"black"} />
          <ShareIcon size={35} color={"black"} />
        </View>
      </View>
      <View className="mx-4 pt-3 flex-row items-center justify-between">
        <View>
          <Text className="text-2xl font-bold">{item.name}</Text>
          <Text className="text-lg font-semibold">{item.cuisines}</Text>
          <Text className="text-lg font-semibold text-blue-500">
            {item.smalladress}
          </Text>
        </View>
        <View>
          <View className="flex-row items-center p-2 bg-emerald-600 rounded-2xl">
            <StarIcon size={30} color={"gold"} />
            <Text className="text-lg font-bold text-white ml-3 text-center">
              {item.aggregate_rating}
            </Text>
          </View>
          <View className="p-1 w-28 bg-pink-400 mt-1 rounded-2xl">
            <Text className="text-lg font-bold text-white text-center">30</Text>
            <Text className="text-lg font-bold text-white text-center">
              PHOTOS
            </Text>
          </View>
        </View>
      </View>
      <View className="flex-row items-center justify-between mx-4 mt-2">
        <View className="flex-row items-center">
          <TruckIcon size={45} color={"black"} />
          <View className="ml-1">
            <Text className="text-lg font-bold">Mode</Text>
            <Text className="text-lg font-bold -mt-2">Delivery</Text>
          </View>
        </View>
        <View className="flex-row items-center">
          <ClockIcon color={"black"} size={40} />
          <View className="ml-1">
            <Text className="text-lg font-bold">TIME</Text>
            <Text className="text-lg font-bold -mt-2">30mins</Text>
          </View>
        </View>
        <View className="flex-row items-center">
          <ReceiptPercentIcon color={"#1979F3"} size={40} />
          <View className="ml-1">
            <Text className="text-lg font-bold">OFFERS</Text>
            <Text className="text-lg font-bold -mt-2">View</Text>
          </View>
        </View>
      </View>
      <View className="flex-row items-center mx-4 p-2 mt-2 rounded-xl bg-slate-400">
        <CurrencyRupeeIcon color={"black"} size={35} />
        <Text className="text-lg font-bold ml-1">
          ₹30 additional distance fee
        </Text>
      </View>

      {/* Menu List */}
      <ScrollView
        contentContainerStyle={{ paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="mx-4 mt-2">
          <Text className="text-xl font-bold">Full Menu</Text>
          <Text
            style={{
              borderColor: "#E11358",
              height: 2,
              width: 90,
              borderWidth: 2,
            }}
          />
        </View>
        {menu.map((item) => (
          <MenuCard item={item} card={card} setCard={setCard} />
        ))}
      </ScrollView>
      <Cart item={item} />
    </View>
  );
};

export default Food;
