import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  navigation,
  Button,
  TouchableOpacity,
} from "react-native";

const CoffeeSlin01 = ({navigation}) => {
  return (
    <SafeAreaView className="">
     
        <ImageBackground
          className="h-full"
          source={{
            uri: "https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg",
          }}
        >
          <View className="">
            <View className="mt-80">
              <View className=" p-4 ">
              <Text className="text-5xl text-white text-center font-extrabold w-auto tracking-wide ">
                Coffee so good, your taste buds will love it.
              </Text>
              </View>
            </View>
            <View className="mt-2">
              <Text className="text-xl text-gray-300 text-center">
                The best grain, the finest roast , the powerful flavor
              </Text>
            </View>

            <View className="">
              <View className="p-7">
                <View className="bg-amber-600 rounded-3xl p-4">
                  <TouchableOpacity onPress={() => navigation.navigate("second")}>
                  <Text className="text-xl text-white text-center font-bold">
                    Get started
                  </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      
    </SafeAreaView>
  );
};

export default CoffeeSlin01;
