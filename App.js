import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import react from "react";
import Login from "./Screens/Login";
import Home from "./Screens/Home";
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const App=()=>{
  const Stack = createNativeStackNavigator();

return ( <NavigationContainer>
  <Stack.Navigator initialRouteName="Login"> 
<Stack.Screen name="Login" component={Login}/>
<Stack.Screen name="Home" component={Home}/>
  </Stack.Navigator>
</NavigationContainer>
  
 
)
}
export default App;
