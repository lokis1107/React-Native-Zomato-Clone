import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { ClockIcon,  TruckIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";

const Order = (props) => {
  const item = props.route.params;

  return (
    <View className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:10}}>
        <View className="items-center mx-2 mt-2 p-2 rounded-2xl bg-orange-400 shadow-xl">
          <Text className="text-2xl font-bold">{item.name}</Text>
          <Text className="text-xl font-bold">
            Your order has accepted at 11:00 AM
          </Text>
        </View>
        <View className="flex-row items-center justify-center p-2 mx-12 rounded-xl bg-emerald-400 mt-3">
          <ClockIcon color={"white"} size={30} />
          <Text className="text-lg font-bold ml-2">Delivery in 30 mins</Text>
        </View>
        <Text className="mt-3 text-xl font-bold text-center">
          Food preparation will begin shortly!!
        </Text>
        <View className="items-center justify-center">
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUpDX04DyRkpYOMZbKFWf9DFV94SrafyNzpwG7nXG2QFcUqTGWmC0ISoM2uU5SUK4bQJw&usqp=CAU",
            }}
            style={{ height: 200, width: 200 }}
            className="mt-2"
          />
        </View>
        <Text
          style={{
            borderWidth: 1,
            borderColor: "black",
            height: 1,
            marginTop: 10,
          }}
        />
        <View className="flex-row items-center justify-center mt-3">
          <TruckIcon color={"black"} size={45}/>
          <View className="ml-2">
            <Text className="text-lg font-bold text-orange-300">4 valets near the restaurant</Text>
            <Text className="text-lg font-bold">anyone will pick up the order</Text>
          </View>
        </View>
        <Text
          style={{
            borderWidth: 1,
            borderColor: "black",
            height: 1,
            marginTop: 15,
          }}
        />
        <View className="flex-row items-center justify-center mt-3">
          <View className="ml-3 mx-4">
            <Text className="text-2xl font-bold text-center">Tip your hunger saviour</Text>
            <Text className="text-lg font-bold">Thank your delivery partner for helping you stay safe
              indoors.Support them through these tough times with a tip</Text>
          </View>
        </View>
        <View className="mt-2 items-center justify-center">
          <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmig-j5FRIsSACRtZfq_bo-u5wiZiALBluOw&usqp=CAU"}} style={{height:80, width:190}}/>
        </View>
      </ScrollView>
    </View>
  );
};  

export default Order;
