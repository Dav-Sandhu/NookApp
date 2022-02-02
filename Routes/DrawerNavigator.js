import sendNotification from '../PushNotification';
import TabNavigation from './TabNavigator';
import JokeScreen from './../Components/JokeComponent';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { useContext } from 'react';
import { permissionsContext } from './../Contexts/PermissionsContext';
import { JokeContext } from './../Contexts/JokeContext';
import * as Notifications from 'expo-notifications';

const DrawerNavigation = ({navigation}) => {
    const Drawer = createDrawerNavigator();

    const [setPermissions] = useContext(permissionsContext);
    const [curJoke, getJoke, retrieveJoke, setRetrieveJoke, setCurJoke] = useContext(JokeContext);

    return(
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => {
        return(
        <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
          <DrawerItem label="Show me a Joke" onPress={() => {
                setPermissions(true); 

                //to ensure that the joke/punchline are synced up, all old notifications are first dismissed
                Notifications.dismissAllNotificationsAsync();

                setRetrieveJoke(!retrieveJoke);
                setCurJoke(getJoke);

                if (getJoke.type === 'single'){
                    //goes straight to joke if there is not setup
                    navigation.navigate(JokeScreen); 
                }else{
                    //if there is setup, then it sends push notification first
                    sendNotification(getJoke); 
                    Notifications.addNotificationResponseReceivedListener(() => {navigation.navigate(JokeScreen)});
                }
              
            }}/> 
      </DrawerContentScrollView>)
      }}>
        <Drawer.Screen name="Home" component={TabNavigation} />
      </Drawer.Navigator>
    );
}

export default DrawerNavigation;