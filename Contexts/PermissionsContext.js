import { createContext } from 'react';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import {useState, useEffect} from 'react';

export const permissionsContext = createContext();

export const NotificationPermission = (props) => {
    const [getPermissions, setPermissions] = useState(false);
    
    useEffect(() => {
        if (getPermissions){
            registerForPushNotification();
        }

        async function registerForPushNotification() {
            try{
                if (Device.isDevice) {
                    const { status: existingStatus } = await Notifications.getPermissionsAsync();
                    let finalStatus = existingStatus;

                    if (existingStatus !== 'granted') {
                        const { status } = await Notifications.requestPermissionsAsync();
                        finalStatus = status;
                    }
                    if (finalStatus !== 'granted') {
                        alert('Failed to get push token for push notification!');
                        return;
                    }
                }else{
                    alert('Must use a physical device for this feature');
                    return;
                }
            }catch(error) {
                console.error(error);
            }
        }
      }, [getPermissions]);

      return(
          <permissionsContext.Provider value={[setPermissions]}>
            {props.children}
          </permissionsContext.Provider>
      );
}