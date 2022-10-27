import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import ModalScreen from "../screens/ModalScreen";
import VisitDetailsScreen from "../screens/VisitDetailsScreen";

// this is all in the documentation
export type RootStackParamList = {
  // no props so we aren't going to pass any value
  Main: undefined;
  MyModal: {
    userId: string;
    firstName: string;
    lastName: string;
  };
  Visit: { visit: any };
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen name="Main" component={TabNavigator} />
      </RootStack.Group>

      <RootStack.Group
        screenOptions={{
          presentation: "modal",
        }}
      >
        <RootStack.Screen
          options={{ headerShown: false }}
          name="MyModal"
          component={ModalScreen}
        />
      </RootStack.Group>

      <RootStack.Group>
        <RootStack.Screen name="Visit" component={VisitDetailsScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;
