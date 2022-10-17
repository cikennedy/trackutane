import { ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useTailwind } from "tailwind-rn";
import { Image } from "@rneui/themed";
import { RootStackParamList } from "../navigator/RootNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "../navigator/TabNavigator";

export type PatientScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Patients">,
  NativeStackNavigationProp<RootStackParamList>
>;

const VisitsScreen = () => {
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
          uri: "https://github.com/cikennedy/trackutane-typescript/blob/main/trackutane/assets/undraw_Booking_re_gw4j.png?raw=true",
        }}
        containerStyle={tailwind("2-full h-64")}
      />
    </ScrollView>
  );
};

export default VisitsScreen;
