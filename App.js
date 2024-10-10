import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CoffeeSlin01 from "./screens/CoffeeSlin01";
import CoffeeSlin02 from "./screens/CoffeeSlin02";
import CoffeeSlin03 from "./screens/CoffeeSlin03";
import CoffeeSlin04 from "./screens/CoffeeSlin04";
import CoffeeSlin05 from "./screens/CoffeeSlin05";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={CoffeeSlin01} 
        options={{ headerShown: false }}/>
        <Stack.Screen name="second" component={CoffeeSlin02}
         options={{ headerShown: false }}/>
        <Stack.Screen name="third" component={CoffeeSlin03} 
        options={{ headerShown: false }}/>
        <Stack.Screen name="fourth" component={CoffeeSlin04} 
        options={{ headerShown: false }}/>
        <Stack.Screen name="fifth" component={CoffeeSlin05} 
        options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
