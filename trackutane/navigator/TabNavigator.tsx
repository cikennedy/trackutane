import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PatientsScreen from "../screens/PatientsScreen";
import VisitsScreen from "../screens/VisitsScreen";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import { Image } from "@rneui/themed";
import { Text, View } from "react-native";

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
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#6c63ff",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Patients") {
            return (
              <View>
                <Text>Hello</Text>
              </View>
              // <Icon
              //   name="users"
              //   type="entypo"
              //   color={focused ? "#6c63ff" : "gray"}
              // />
            );
          } else if (route.name === "Visits") {
            return (
              <View>
                <Text>Hello</Text>
              </View>
              // <Icon
              //   name="calendar"
              //   type="entypo"
              //   color={focused ? "red" : "gray"}
              // />
            );
          }
        },
      })}
    >
      <Tab.Screen name="Patients" component={PatientsScreen} />
      <Tab.Screen name="Visits" component={VisitsScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
