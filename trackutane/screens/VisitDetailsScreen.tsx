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

  useLayoutEffect(() => {}, [visit]);

  return (
    <View style={tailwind("-mt-2")}>
      <Text>VisitScreen</Text>
    </View>
  );
};

export default VisitDetailsScreen;
