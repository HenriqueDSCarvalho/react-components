import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./src/Views/Home";
import About from "./src/Views/About";
import Xbox from "./src/Views/Xbox";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Xbox" component={Xbox}/>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="About" component={About}/>
      </Stack.Navigator>
    </NavigationContainer>
  
  );
}