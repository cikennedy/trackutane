import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn/dist";
import { Card, Divider, Icon } from "@rneui/themed";
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
  fullWidth?: boolean;
};

const VisitCard = ({ visit, fullWidth }: Props) => {
  const tailwind = useTailwind();
  const navigation = useNavigation<VisitScreenNavigationProp>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Visit", { visit: visit })}
    >
      <Card
        containerStyle={[
          tailwind(
            `${fullWidth ? "rounded-none m-0" : "rounded-lg"}rounded-lg my-2`
          ),
          {
            backgroundColor: fullWidth ? "white" : "#6c63ff",
            padding: 0,
            paddingTop: 16,
            shadowColor: "black",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
          },
        ]}
      >
        <View style={fullWidth && { height: "100%" }}>
          {/* <Icon name="calendar" type="entypo" color="white" /> */}

          <View>
            <Text style={tailwind("text-center text-white text-lg font-bold")}>
              Date: {new Date(visit.visitDate).toLocaleDateString()}
            </Text>
            {/* TO-DO Create time field for visits */}
            <Text style={tailwind("text-center text-white text-lg font-bold")}>
              Time: {visit.visitTime}
            </Text>
            {/* <Divider color="white" /> */}
            <Text
              style={tailwind(
                "text-xs text-white text-center uppercase font-bold"
              )}
            >
              {visit.provider}
            </Text>
          </View>

          <View style={tailwind("mx-auto pb-5")}>
            <Text style={tailwind("text-center text-white font-bold mt-5")}>
              Appointment Notes:
            </Text>

            <Text style={tailwind("text-center text-white text-sm")}>...</Text>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default VisitCard;
