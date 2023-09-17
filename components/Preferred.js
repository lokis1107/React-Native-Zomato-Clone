import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { mostPrefer } from '../dummy_data/data'

const Preferred = () => {
  return (
    <View className="mx-4">
      <Text className="text-xl font-bold">The Most People Preferred</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
            mostPrefer.map((item, index)=>(
                <View className="p-3" key={index}>
                    <Image style={{height:70, width:70}} source={{uri:item.image}} className="rounded-full" />
                    <Text className="mt-1 text-lg font-bold ml-3">{item.name}</Text>
                </View>
            ))
        }
      </ScrollView>
    </View>
  )
}

export default Preferred