import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useTailwind } from "tailwind-rn/dist";
import {
  CompositeNavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "../navigator/TabNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigator/RootNavigator";
import VisitCard from "../components/VisitCard";

export type VisitDetailsScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Visits">,
  NativeStackNavigationProp<RootStackParamList>
>;

type VisitDetailsScreenRouteProp = RouteProp<RootStackParamList, "Visit">;

const VisitDetailsScreen = () => {
  const tailwind = useTailwind();
  const navigation = useNavigation<VisitDetailsScreenNavigationProp>();
  const {
    params: { visit },
  } = useRoute<VisitDetailsScreenRouteProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle:
        visit.tracking.patient.lastName +
        ", " +
        visit.tracking.patient.firstName,
      headerTintColor: "",
      headerTitleStyle: { color: "black" },
      headerBackTitle: "Appointments",
    });
  }, [visit]);

  return (
    <View>
      <VisitCard visit={visit} fullWidth />
    </View>
  );
};

export default VisitDetailsScreen;
