import {
  View,
  Text,
  navigation,
  Button,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const CoffeeSlin03 = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View className="p-5">
        {/*Top section starts here */}
        <View className="flex-row justify-between mt-4">
          <Ionicons name="chevron-back" size={24} color="black" />
          <Text className="text-lg">Detail</Text>
          <MaterialIcons name="favorite-border" size={28} color="black" />
        </View>
        {/*Top section ends here */}

        {/*Image section starts here */}
        <View className="mt-5 mb-5">
          <Image
            className="rounded-xl"
            height={200}
            width={340}
            source={{
              uri: "https://www.latteartguide.com/wp-content/uploads/2023/02/Oat-milk-latte-art.jpg",
            }}
          />
        </View>
        {/*Image section ends here */}

        {/*Middle section starts here */}

        <View className="mb-2">
          <Text className="text-2xl text-black ">Cappucino</Text>
          <Text className="text-gray-500 pt-1">with Chocolate</Text>
        </View>
        {/*Middle section ends here */}

        {/*sub-middle section starts here */}

        <View className="flex-row justify-between  ">
          <View className="flex-row items-center">
            <AntDesign name="star" size={20} color="#C67C4E" />
            <Text className="text-lg">4.8 </Text>
            <Text className="text-xs">(230)</Text>
          </View>

          <View className="flex-row mb-4">
            <View className="p-2 bg-gray-200 rounded-xl mr-3">
              <FontAwesome6 name="bread-slice" size={24} color="#C67C4E" />
            </View>

            <View className="p-2 bg-gray-200 rounded-xl">
              <FontAwesome5 name="box" size={24} color="#C67C4E" />
            </View>
          </View>
        </View>
        {/*sub-middle section ends here */}

        <View className="border-t border-gray-200 mb-4"></View>

        {/*Description section starts here */}

        <View className="mb-3">
          <Text className="text-xl text-black">Description</Text>
        </View>

        <View className="mb-3">
          <Text className=" text-sm text-gray-500">
            A cappuccino is an approximately 150 ml(50z) beverage, with 25ml of
            espresso coffee and 85ml of fresh milk the fo...
            <Text className="text-amber-600">Read More</Text>
          </Text>
        </View>
        {/*Description section ends here */}

        {/*Size section starts here */}

        <View className="mb-2">
          <Text className="text-lg text-black">Size</Text>
        </View>

        <View className="flex-row justify-between ">
          <View className="border rounded-xl p-2 w-28 border-gray-300">
            <Text className="text-center text-lg text-gray-700">S</Text>
          </View>
          <View className="border rounded-xl p-2 w-28 bg-orange-100 border-amber-600">
            <Text className="text-center text-lg  text-orange-300">M</Text>
          </View>
          <View className="border rounded-xl p-2 w-24 border-gray-300">
            <Text className="text-center text-lg text-gray-700">L</Text>
          </View>
        </View>
      </View>
      {/*Size section ends here */}

      {/*down section */}
      <View className="rounded-xl bg-white border-gray-200 p-8 pt-4">
        <View className="flex-row justify-between">
          <View>
            <Text className="text-sm text-gray-500">Price</Text>
            <Text className="text-amber-600 text-lg">$4.53</Text>
          </View>
          <View className="p-4 bg-amber-600 w-56 rounded-xl">
            <TouchableOpacity onPress={() => navigation.navigate("fourth")}>
              <Text className="text-white text-lg text-center">Buy Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/*down section */}
    </SafeAreaView>
  );
};

export default CoffeeSlin03;
