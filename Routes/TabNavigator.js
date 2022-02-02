import CustomTab from './../Components/TabsComponent';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const TabNavigation = () => {
    const Tab = createBottomTabNavigator();
    return(      
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Tab 1" children={()=><CustomTab name="Tab 1" />} />
        <Tab.Screen name="Tab 2" children={()=><CustomTab name="Tab 2" />}/>
      </Tab.Navigator>
    );
}

export default TabNavigation;