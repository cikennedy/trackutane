import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PatientsScreen from "../screens/PatientsScreen";
import VisitsScreen from "../screens/VisitsScreen";
import { useNavigation } from "@react-navigation/native";

export type TabStackParamList = {
  Patients: undefined;
  Visits: undefined;
};

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => {
  const navigation = useNavigation();

  // get rid of header, can also do this at the root nagivator level, however it is cleaner here
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Tab.Navigator>
      <Tab.Screen name="Patients" component={PatientsScreen} />
      <Tab.Screen name="Visits" component={VisitsScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
