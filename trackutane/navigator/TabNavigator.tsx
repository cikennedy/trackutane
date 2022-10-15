import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PatientsScreen from "../screens/PatientsScreen";
import VisitsScreen from "../screens/VisitsScreen";

export type TabStackParamList = {
  Patients: undefined;
  Visits: undefined;
};

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Patients" component={PatientsScreen} />
      <Tab.Screen name="Visits" component={VisitsScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
