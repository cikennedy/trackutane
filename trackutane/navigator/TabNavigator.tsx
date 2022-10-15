import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PatientsScreen from "../screens/PatientsScreen";
import VisitsScreen from "../screens/VisitsScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Patients" component={PatientsScreen} />
      <Tab.Screen name="Visits" component={VisitsScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
