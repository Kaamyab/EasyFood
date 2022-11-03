import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from 'expo-font';
import HomeScreen from './screens/HomeScreen';
import RecipeScreen from './screens/RecipeScreen'

const Stack = createNativeStackNavigator();

const App = () => {

  const [fontsLoaded] = useFonts({
    'Quicksand-Bold': require('./assets/fonts/quicksand/Quicksand-Bold.ttf'),
    'Quicksand-Light': require('./assets/fonts/quicksand/Quicksand-Light.ttf'),
    'Quicksand-Medium': require('./assets/fonts/quicksand/Quicksand-Medium.ttf'),
    'Quicksand-Regular': require('./assets/fonts/quicksand/Quicksand-Regular.ttf'),
    'Quicksand-SemiBold': require('./assets/fonts/quicksand/Quicksand-SemiBold.ttf'),
    'Dosis-Bold': require('./assets/fonts/dosis/Dosis-Bold.ttf'),
    'Dosis-ExtraBold': require('./assets/fonts/dosis/Dosis-ExtraBold.ttf'),
    'Dosis-ExtraLight': require('./assets/fonts/dosis/Dosis-ExtraLight.ttf'),
    'Dosis-Light': require('./assets/fonts/dosis/Dosis-Light.ttf'),
    'Dosis-Medium': require('./assets/fonts/dosis/Dosis-Medium.ttf'),
    'Dosis-Regular': require('./assets/fonts/dosis/Dosis-Regular.ttf'),
    'Dosis-SemiBold': require('./assets/fonts/dosis/Dosis-SemiBold.ttf'),
  });

  return (

  <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Recipe" component={RecipeScreen} />
      </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App