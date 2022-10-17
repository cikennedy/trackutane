import { ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useTailwind } from "tailwind-rn";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "../navigator/TabNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigator/RootNavigator";
import { Image } from "@rneui/themed";

// nested stacks, composite navigation prop
// combine the navigation items with all the types needed
export type PatientScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Patients">,
  NativeStackNavigationProp<RootStackParamList>
>;

const PatientsScreen = () => {
  const tailwind = useTailwind();

  const navigation = useNavigation<PatientScreenNavigationProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView>
      <Image
        source={{
          uri: "https://github.com/cikennedy/trackutane-typescript/blob/main/trackutane/assets/undraw_medical_care_movn.png?raw=true",
        }}
        containerStyle={tailwind("2-full h-64")}
      />
    </ScrollView>
  );
};

export default PatientsScreen;
