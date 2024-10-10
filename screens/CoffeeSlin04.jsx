{
  /** 

import {
  View,
  Text,
  navigation,
  Button,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const CoffeeSlin04 = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Text>CoffeeSlin04</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate("fifth")}
        />
      </View>

      <View className="flex-row justify-between">
        <Ionicons name="chevron-back" size={24} color="black" />
        <Text>Details</Text>
        <MaterialIcons name="favorite-border" size={24} color="black" />
      </View>

      <View>
        <Image
          height={100}
          width={100}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_3MxlfxOD_hjQxI9j2POlxa828pwgZZu45g&s",
          }}
        />
      </View>

      <View>
        <Text>Cappucino</Text>
        <Text>with Chocolate</Text>
      </View>

      <View className="flex-row">
        <View className="flex-row">
          <AntDesign name="star" size={24} color="black" />
          <Text>4.8(230)</Text>
        </View>
        <View className="flex-row">
          <MaterialCommunityIcons
            name="bread-slice-outline"
            size={24}
            color="black"
          />
          <AntDesign name="inbox" size={24} color="black" />
        </View>
      </View>

      <View className="border-t"></View>

      <View>
        <Text>
          A cappuccinois an approximately 150 ml(50z) beverage,with 25ml of
          espresso coffee and 85ml of fresh milk the fo...
          <Text className="text-orange-400">Read More</Text>
        </Text>
      </View>

      <View>
        <Text>Size</Text>
      </View>

      <View className="flex-row justify-between">
        <View className="border rounded-lg">
          <Text>S</Text>
        </View>
        <View className="border rounded-lg bg-orange-300">
          <Text>M</Text>
        </View>
        <View className="border rounded-lg">
          <Text>L</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CoffeeSlin04;
*/
}

import {
  View,
  Text,
  Button,
  navigation,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Entypo from "@expo/vector-icons/Entypo";

const CoffeeSlin04 = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View className="p-3">
        <View className="flex-row mb-3">
          <Ionicons name="chevron-back" size={24} color="black" />
          <View className="ml-32">
            <Text className="text-lg">Order</Text>
          </View>
        </View>

        <View className="flex-row bg-gray-200 rounded-2xl p-1">
          <View className="p-2 w-48 bg-amber-600 rounded-xl">
            <Text className="text-lg text-white text-center">Deliver</Text>
          </View>
          <View className="p-2 pl-10 ">
            <Text className="text-lg ">Pick Up</Text>
          </View>
        </View>

        <View className="mt-4 mb-1 ">
          <Text className="text-lg">Delivery Address</Text>
        </View>
        <View className="mb-1">
          <Text className="text-lg">JI.Kpg Sutoyo</Text>
        </View>
        <View className="mb-4">
          <Text className="text-gray-700">
            Kpg.Sutoyo No. 620, Bilzen, Tanjungbalai
          </Text>
        </View>

        <View className="flex-row mb-5">
          <View
            className="flex-row p-1 w-36 border border-gray-300 rounded-2xl 
          mr-4 items-center pl-3 "
          >
            <Feather name="edit" size={17} color="black" />
            <Text className="pl-2">Edit Address</Text>
          </View>
          <View
            className="flex-row  p-1 w-36 border border-gray-300 rounded-2xl 
          items-center pl-3"
          >
            <SimpleLineIcons name="notebook" size={17} color="black" />
            <Text className="pl-2">Add Note</Text>
          </View>
        </View>

        <View className="border-t border-gray-300 mb-4"></View>

        <View className="flex-row mb-2">
          <View>
            <Image
              className="rounded-xl"
              height={70}
              width={70}
              source={{
                uri: "https://www.latteartguide.com/wp-content/uploads/2023/02/Oat-milk-latte-art.jpg",
              }}
            />
          </View>

          <View className="ml-4">
            <Text className="text-lg">Cappucino</Text>
            <Text>with Chocolate</Text>
          </View>

          <View className="flex-row ml-5">
            <View className=" rounded-3xl h-9 p-2 border border-gray-300 mr-3">
              <Text className="text-center ">&#8212; </Text>
            </View>
            <View className="">
              <Text className="text-xl mr-3">1</Text>
            </View>
            <View className=" rounded-3xl h-9 p-2 border border-gray-300">
              <Text className="">+</Text>
            </View>
          </View>
        </View>
      </View>

      <View className="border-t-2 mb-3 border-gray-300"></View>

      <View className="p-3">
        <View className="flex-row border p-3 justify-between rounded-xl border-gray-300">
          <View className="flex-row">
            <View>
              <FontAwesome5 name="grin-stars" size={24} color="orange" />
            </View>
            <View className="ml-2">
              <Text className="">1 Discount is applied </Text>
            </View>
          </View>
          <View>
            <MaterialCommunityIcons
              name="greater-than"
              size={24}
              color="black"
            />
          </View>
        </View>

        <View className="mb-1 mt-3">
          <Text className="text-lg">Payment Summary</Text>
        </View>

        <View className="flex-row justify-between mb-3">
          <Text>Price</Text>
          <Text>$4.53</Text>
        </View>

        <View className="flex-row justify-between mb-3">
          <Text>Delivery fee</Text>
          <View className="flex-row">
            <Text className="line-through mr-1">$2.0 </Text>
            <Text>$1.0</Text>
          </View>
        </View>

        <View className="border-t border-gray-300 mb-3"></View>

        <View className="flex-row justify-between ">
          <Text>Total Payment</Text>
          <Text>$5.53</Text>
        </View>
      </View>

      <View className="bg-white border-gray-200 rounded-xl pb-8 pt-2 pl-5 pr-5">
        <View className="flex-row justify-between mb-3 pt-2">
          
            <View className="flex-row ">
            <View className="mr-3 ">
              <MaterialCommunityIcons
                name="apple-ios"
                size={28}
                color="#C67C4E"
              />
            </View>
            <View className="flex-row bg-gray-100 w-36 rounded-full ">
            <View className=" w-14  mr-3 bg-amber-600 rounded-full p-1">
              <Text className="text-center text-white ">Cash</Text>
            </View>
            <View className="">
              <Text className="text-base">$5.53</Text>
            </View>
            </View>
          </View>
          <View className="bg-gray-500 rounded-full p-1">
            <Entypo name="dots-three-horizontal" size={24} color="white" />
          </View>
        </View>
        <View className="bg-amber-600 rounded-xl p-3">
          <TouchableOpacity onPress={() => navigation.navigate("fifth")}>
            <Text className="text-center text-lg text-white">Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CoffeeSlin04;
