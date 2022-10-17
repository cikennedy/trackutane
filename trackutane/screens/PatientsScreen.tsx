import { Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "../navigator/TabNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigator/RootNavigator";

// nested stacks, composite navigation prop
// combine the navigation items with all the types needed
export type PatientScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Patients">,
  NativeStackNavigationProp<RootStackParamList>
>;

const PatientsScreen = () => {
  const tailwind = useTailwind();

  const navigation = useNavigation();

  return (
    <ScrollView>
      <SafeAreaView>
        <Text style={tailwind("text-blue-600")}>PatientsScreen</Text>
      </SafeAreaView>
    </ScrollView>
  );
};

export default PatientsScreen;
