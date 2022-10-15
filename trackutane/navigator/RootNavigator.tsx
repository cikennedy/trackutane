import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";

// this is all in the documentation
export type RootStackParamList = {
  // no props so we aren't going to pass any value
  Main: undefined;
  MyModal: { userId: string; name: string };
  Visit: { visit: any };
};

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen name="Main" component={TabNavigator} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;
