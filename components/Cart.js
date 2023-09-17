import { View, Text, TouchableOpacity, Modal } from "react-native";
import React, { useContext, useState } from "react";
import { cardItem } from "../Context";
import {
  ShoppingBagIcon,
  TicketIcon,
  XMarkIcon,
} from "react-native-heroicons/solid";
import { ClockIcon, ReceiptPercentIcon } from "react-native-heroicons/outline";
import { ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { Audio } from "expo-av";

const Cart = ({ item }) => {
  const { card, setCard } = useContext(cardItem);
  const total = card
    .map((item) => Number(item.price.replace("₹", "")))
    .reduce((pre, cur) => pre + cur, 0);
  const [model, setModel] = useState(false);

  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/zomato.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const navigation = useNavigation();

  const handlePress = () => {
    setModel(false);
    setCard([]);
    navigation.navigate("Order", { ...item });

    setTimeout(() => {
      playSound();
    }, 1000);
  };
  const checkout = () => {
    return (
      <View
        style={{
          justifyContent: "flex-end",
          backgroundColor: "rgba(255,255,255,0.6)",
          flex: 1,
        }}
      >
        <TouchableOpacity
          className="p-2 border rounded-full items-center justify-center w-12 ml-44 mb-2"
          onPress={() => setModel(false)}
        >
          <XMarkIcon size={30} color={"black"} />
        </TouchableOpacity>
        <View
          style={{
            height: 500,
            backgroundColor: "#FFFFFF",
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
          }}
        >
          <View className="mt-3">
            <Text className="text-center font-bold text-2xl text-pink-600">
              {item.name}
            </Text>
          </View>
          <View className="flex-row items-center mx-4 mt-2">
            <ClockIcon size={30} color={"green"} />
            <Text className="text-xl font-bold ml-2">Delivery in 30 mins</Text>
          </View>
          <Text
            style={{ borderWidth: 1, borderColor: "gray", height: 1 }}
            className=" mx-4 mt-2"
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
          >
            {card.map((item, index) => {
              return (
                <View
                  key={index}
                  className="flex-row items-center justify-between mx-4 mt-2"
                >
                  <Text className="text-xl font-bold text-pink-600">
                    {item.name}
                  </Text>
                  <Text className="text-xl font-bold text-pink-600">
                    {item.price}
                  </Text>
                </View>
              );
            })}
            <Text
              style={{ borderWidth: 1, borderColor: "gray", height: 1 }}
              className=" mx-4 mt-2"
            />
            <Text className="mt-2 text-lg font-bold mx-4">Offers</Text>
            <View className="mx-4 mt-2 flex-row items-center">
              <ReceiptPercentIcon size={30} color={"blue"} />
              <Text className="text-lg font-bold">Select the Promo code</Text>
            </View>
            <Text
              style={{ borderWidth: 1, borderColor: "gray", height: 1 }}
              className=" mx-4 mt-2"
            />
            <Text className="mt-2 text-lg font-bold mx-4">
              Climate Conscious Delivery
            </Text>
            <View className="mx-4 flex-row items-center mt-2">
              <View>
                <ShoppingBagIcon size={30} color={"green"} />
              </View>
              <View className="ml-2">
                <Text className="font-semibold">
                  Dont't send cutler tissues and straus
                </Text>
                <Text className="font-semibold">
                  Thank you for cary for the environment
                </Text>
              </View>
            </View>
            <View className="mx-4 mt-2 flex-row items-center justify-between">
              <TicketIcon size={30} color={"green"} />
              <View>
                <Text className="font-semibold mx-2 mr-5">
                  We fund environment projects to offset carbon footprint of our
                  own delivery.
                </Text>
              </View>
            </View>
            <Text
              style={{ borderWidth: 1, borderColor: "gray", height: 1 }}
              className=" mx-4 mt-2"
            />
            <View
              className="mt-2 mx-4 bg-yellow-300 p-2"
              style={{ borderTopRightRadius: 20, borderTopLeftRadius: 20 }}
            >
              <View className="flex-row items-center justify-between">
                <Text className="text-lg font-semibold">Items Total</Text>
                <Text className="text-lg font-semibold">₹{total}</Text>
              </View>
              <Text
                style={{ borderWidth: 1, borderColor: "#f0f0f0", height: 1 }}
                className="mt-2"
              />
              <View className="flex-row items-center justify-between">
                <Text className="text-lg font-semibold">Delivery fee</Text>
                <Text className="text-lg font-semibold">₹50</Text>
              </View>
              <Text
                style={{ borderWidth: 1, borderColor: "#f0f0f0", height: 1 }}
                className="mt-2"
              />
              <View className="flex-row items-center justify-between">
                <Text className="text-lg font-semibold">Donation Fee</Text>
                <Text className="text-lg font-semibold">₹3</Text>
              </View>
              <Text
                style={{ borderWidth: 1, borderColor: "#f0f0f0", height: 1 }}
                className="mt-2"
              />
            </View>
            <View>
              <TouchableOpacity
                onPress={handlePress}
                className="bg-red-500 p-4 mx-4 mt-2 rounded-2xl"
              >
                <Text className="text-center font-bold text-white text-xl">
                  Place Order ₹{total + 50 + 3}
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  };
  return (
    <>
      <StatusBar hidden />
      <Modal
        animationType="slide"
        transparent={true}
        visible={model}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModel(!model);
        }}
      >
        {checkout()}
      </Modal>

      <View>
        {total === 0 ? null : (
          <TouchableOpacity
            className="p-4 ml-24 items-center rounded-2xl justify-center"
            style={{
              bottom: 20,
              position: "absolute",
              width: 200,
              backgroundColor: "red",
            }}
            onPress={() => setModel(true)}
          >
            <Text className="text-lg font-bold text-white">
              View Cart ₹{total}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default Cart;
