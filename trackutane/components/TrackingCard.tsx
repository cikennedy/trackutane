import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Card, Icon } from "@rneui/themed";
import { useTailwind } from "tailwind-rn/dist";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "../navigator/TabNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigator/RootNavigator";

export type VisitScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Visits">,
  NativeStackNavigationProp<RootStackParamList>
>;

type Props = {
  visit: Visit;
};

const TrackingCard = ({ visit }: Props) => {
  const tailwind = useTailwind();
  const navigation = useNavigation<VisitScreenNavigationProp>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Visit", { visit: visit })}
    >
      <Card containerStyle={tailwind("px-5 rounded-lg")}>
        <View style={tailwind("flex-row justify-between items-center")}>
          <View style={tailwind("self-start items-center")}>
            {/* <Icon name="" color="#59C1CC" type="" /> */}
            <Text style={{ fontSize: 10 }}>
              {new Date(visit.visitDate).toDateString()}
            </Text>
            <Text style={{ fontSize: 10 }}>{visit.visitTime}</Text>
          </View>

          <View style={tailwind("self-start items-center")}>
            <Text>
              Patient: {visit.tracking?.patient?.lastName},{" "}
              {visit.tracking?.patient?.firstName}{" "}
            </Text>
            <Text>Provider: {visit.provider}</Text>
          </View>

          {/* <View style={tailwind("flex-row items-center")}>
            <Text style={(tailwind("text-sm"), { color: "#59C1CC" })}>
              {}, {},{" "}
            </Text>
            <Text></Text>
          </View> */}
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default TrackingCard;
