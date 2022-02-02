import DrawerNavigation from './DrawerNavigator';
import JokeScreen from './../Components/JokeComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const StackNavigation = () => {
    const Stack = createNativeStackNavigator();
    return(
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
          <Stack.Screen name="JokeScreen" component={JokeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default StackNavigation;