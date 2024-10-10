import {
  View,
  Text,
  navigation,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import Foundation from "@expo/vector-icons/Foundation";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";

const CoffeeSlin02 = ({ navigation }) => {
  return (
    <View>
      <View className=" bg-gray-900 ">
        <View>
          <View className="flex-row justify-between pt-12 pr-7 pl-7">
            <View>
              <Text className="text-gray-400">Location</Text>
              <View className="flex-row">
                <Text className="text-white font-bold">
                  Bilzen, Tanjungbalai
                </Text>
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={24}
                  color="white"
                />
              </View>
            </View>
            <View>
              <Image
                className=" rounded-xl"
                height={70}
                width={70}
                source={{
                  uri: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-olly-733872.jpg&fm=jpg",
                }}
              />
            </View>
          </View>

          <View className="mt-10 pr-8 pl-8 mb-20">
            <View className="flex-row justify-between bg-gray-800 p-1 rounded-2xl">
              <View className="flex-row items-center pl-3">
                <Feather name="search" size={24} color="white" />
                <View className="pl-3">
                  <Text className="text-gray-400">Search coffee</Text>
                </View>
              </View>
              <View className="bg-amber-600 p-3 rounded-2xl">
                <AntDesign name="menufold" size={24} color="white" />
              </View>
            </View>
          </View>
        </View>
      </View>
      {/*Top section ends here */}

      {/*Next section starts */}
      <View className="pl-6">
        <View className="pt-16 pb-3">
          <View className="flex-row justify-between">
            <View className="bg-amber-600 rounded-xl p-2 w-32 ">
              <Text className="text-center text-white font-bold">
                {" "}
                Cappuccino
              </Text>
            </View>
            <View className="rounded-xl bg-white p-2 w-24">
              <Text className="text-center">Machiato</Text>
            </View>
            <View className="rounded-xl bg-white p-2 w-16">
              <Text className="text-center">Latte</Text>
            </View>
            <View className=" bg-white p-2 rounded-l-xl pl-4">
              <Text>Ar</Text>
            </View>
          </View>
        </View>
      </View>
      {/*Next section ends */}

      <View className="p-5">
        {/*middle images starts */}
        <View className="flex-row ">
          <View className="mr-7 border rounded-xl border-gray-200 bg-white">
            <Image
              className="rounded-xl "
              height={120}
              width={150}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_3MxlfxOD_hjQxI9j2POlxa828pwgZZu45g&s",
              }}
            />
            <View className="absolute top-0 left-0 flex-row">
              <View className="p-1">
                <AntDesign name="star" size={15} color="orange" />
              </View>
              <Text className="text-white">4.8</Text>
            </View>

            <View className="p-2">
              <View className="mb-2">
                <Text className="text-lg font-semi-bold">Cappucino</Text>
                <Text className="text-gray-800">with Chocolate</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-lg">$4.53</Text>
                <View className="bg-amber-600 p-1 rounded-xl w-8">
                  <Text className="text-center text-white">+</Text>
                </View>
              </View>
            </View>
          </View>

          <View className=" border  rounded-xl border-gray-200 bg-white">
            <Image
              className="rounded-xl"
              height={120}
              width={150}
              source={{
                uri: "https://www.latteartguide.com/wp-content/uploads/2023/02/Oat-milk-latte-art.jpg",
              }}
            />
            <View className="absolute top-0 left-0 flex-row">
              <View className="p-1">
                <AntDesign name="star" size={15} color="orange" />
              </View>
              <Text className="text-white">4.9</Text>
            </View>

            <View className="p-2">
              <View className="mb-2">
                <Text className="text-lg">Cappucino</Text>
                <Text className="text-gray-800">with Oat Milk</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-lg">$3.90</Text>
                <View className="bg-amber-600 p-1 rounded-xl w-8">
                  <TouchableOpacity
                    onPress={() => navigation.navigate("third")}
                  >
                    <Text className="text-center text-white">+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      {/*middle images ends */}

      {/*duplicate images and bottom tabs 
          <View className="flex-row">
            <View className="mr-7  rounded-xl ">
              <Image
                className="rounded-xl  "
                height={120}
                width={150}
                source={{
                  uri: "https://www.shutterstock.com/image-photo/steaming-cup-delightful-coffee-sits-260nw-2503177539.jpg",
                }}
              />
            </View>

            <View className="rounded-xl ">
              <Image
                className="rounded-xl"
                height={120}
                width={150}
                source={{
                  uri: "https://www.acouplecooks.com/wp-content/uploads/2020/10/how-to-make-cappuccino-005.jpg",
                }}
              />
            </View>
          </View>
        </View>

        

        
        <View className=" ">
          <View className="flex-row justify-between  border p-7 border-gray-200 bg-white rounded-xl">
            <View className=" items-center">
              <Foundation name="home" size={24} color="black" />
            </View>
            <View>
              <MaterialIcons name="favorite" size={24} color="black" />
            </View>
            <View>
              <FontAwesome6 name="bag-shopping" size={24} color="black" />
            </View>

            <View>
              <TouchableOpacity onPress={() => navigation.navigate("third")}>
                <Ionicons name="notifications-sharp" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        duplicate images and bottom tabs */}

      {/* Duplicate images starts here */}
      <View className="flex-row ml-5 ">
        <View className="mr-7 rounded-xl ">
          <Image
            className="rounded-xl "
            height={120}
            width={150}
            source={{
              uri: "https://www.shutterstock.com/image-photo/steaming-cup-delightful-coffee-sits-260nw-2503177539.jpg",
            }}
          />
          <View className="absolute top-0 left-0 flex-row">
            <View className="p-1">
              <AntDesign name="star" size={15} color="orange" />
            </View>
            <Text className="text-white">4.5</Text>
          </View>
        </View>

        <View className="rounded-xl ">
          <Image
            className="rounded-xl"
            height={120}
            width={150}
            source={{
              uri: "https://www.acouplecooks.com/wp-content/uploads/2020/10/how-to-make-cappuccino-005.jpg",
            }}
          />
          <View className="absolute top-0 left-0 flex-row">
            <View className="p-1">
              <AntDesign name="star" size={15} color="orange" />
            </View>
            <Text className="text-white">4.0</Text>
          </View>
        </View>
      </View>
      {/* Duplicate images ends here */}

      {/* Bottom tabs start here */}
      <View style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <View className="flex-row justify-between border p-8 border-gray-200 bg-white rounded-xl">
          <View className=" items-center">
            <Foundation name="home" size={24} color="#C67C4E" />
          </View>
          <View>
            <MaterialIcons name="favorite" size={24} color="gray" />
          </View>
          <View>
            <FontAwesome6 name="bag-shopping" size={24} color="gray" />
          </View>

          <View>
            <Ionicons name="notifications-sharp" size={24} color="gray" />
          </View>
        </View>
      </View>
      {/* Bottom tabs ends here */}
    </View>
  );
};

export default CoffeeSlin02;
