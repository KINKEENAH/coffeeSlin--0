import {
  View,
  Text,
  Button,
  navigation,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView,} from "react-native-safe-area-context";
import { Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from '@expo/vector-icons/Feather';

const CoffeeSlin05 = ({ navigation }) => {
  return (
    <SafeAreaView >
      <View>
        <ImageBackground
          className="h-full"
          source={{
            uri: "https://s3-alpha-sig.figma.com/img/283a/ab35/bdf8034cf30d137c478ce73bd08713fd?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NtfIDGvd7rgKbPyiFHMYwY~SUsa0vRevEkxo6He9XcC4FPIlr6sy4LuBgQMljUu4dFrh9Qjto3mkYMm~5DFOJs6d18tQlaGjAecVy0GkHilRixcSYqzyOdXLAhTk0uVpO9ydqNAX9ApBIzswqt0UeV9MF7Wt1WK5FettBVTmqb5C5c~l1pz0Hg9rNjDkMH2cGn-chvbBDQUgZqeXGMjAibwQIiNKrmXWWkn1HDrQ2B8Q3JBOaVd~1iUa0vmLlnFG6u67laGkEACh6DwCkYgtTqN5KZQZvb~zWaypSzlgBsjnin3Sw~xXoNPuSf1c1XgSqbfHReMAaeoyHD~BKy~OVA__",
          }}
        >
          <View className="flex-row justify-between p-5">
            <View className="rounded-xl bg-white p-3">
              <MaterialCommunityIcons
                name="less-than"
                size={28}
                color="black"
              />
            </View>
            <View className="rounded-xl bg-white p-3">
              <MaterialIcons name="my-location" size={24} color="black" />
            </View>
          </View>

          <View className="mt-80 bg-white rounded-2xl p-7">
            <View>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Text className="text-lg text-center">10 minutes left</Text>
            </TouchableOpacity>
            </View>

            <View className="mb-4">
              <Text className="text-center">Delivery to <Text className="text-base">JI. Kpg Sutoyo</Text></Text>
            </View>

            <View className="flex-row justify-between mb-4">
           <View className="border-t-4 border-green-500 w-1/6 rounded-full"></View>
           <View className="border-t-4 border-green-500 w-1/5 rounded-full"></View>
           <View className="border-t-4 border-green-500 w-1/5 rounded-full"></View>
           <View className="border-t-4 border-gray-200 w-1/5 rounded-full"></View>
           </View>

           <View className="flex-row border rounded-2xl p-2 border-gray-200 mb-4">
           <View className="border border-gray-400 p-2 m-2 rounded-2xl">
           <MaterialIcons name="delivery-dining" size={44} color="#C67C4E" />
           </View>

           <View className="ml-2">
            <Text className="text-lg mb-1">Delivered your order</Text>
            <Text className="text-base text-gray-600">We deliver your goods to you  </Text>
            <Text className="text-base text-gray-600">in the shortest possible time</Text>
           </View>
           </View>

           <View className="flex-row justify-between">
            <View className="flex-row">
            <View>
              <Image className="rounded-xl"
              height={70} 
              width={80}
              source={{uri:"https://t4.ftcdn.net/jpg/00/88/53/89/360_F_88538986_5Bi4eJ667pocsO3BIlbN4fHKz8yUFSuA.jpg"}}/>
            </View>
            
            
            <View className="ml-4">
              <Text className="mb-2">Johan Hawn</Text>
              <Text className="text-gray-600">Personal Courier</Text>
            </View>
            </View>
            <View className="border-gray-300 p-3 border h-16 rounded-2xl w-16 items-center">
            <Feather name="phone-call" size={24} color="gray" />
            </View>
            
           </View>

          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default CoffeeSlin05;
