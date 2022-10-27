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
};

const VisitCard = ({ visit }: Props) => {
  const tailwind = useTailwind();
  const navigation = useNavigation<VisitScreenNavigationProp>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Visit", { visit: visit })}
    >
      <Card
        containerStyle={[
          tailwind("rounded-lg my-2"),
          {
            backgroundColor: "#59C1CC",
            padding: 0,
            paddingTop: 16,
            shadowColor: "black",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
          },
        ]}
      >
        <View>
          {/* <Icon name="calendar" type="entypo" color="white" /> */}

          <View>
            <Text
              style={tailwind(
                "text-xs text-white text-center uppercase font-bold"
              )}
            >
              {visit.provider}
            </Text>
            <Text style={tailwind("text-center text-white text-lg font-bold")}>
              Date: {new Date(visit.date).toLocaleDateString()}
            </Text>
            {/* TO-DO Create time field for visits */}
            <Text style={tailwind("text-center text-white text-lg font-bold")}>
              Time: {"Insert Time Here"}
            </Text>
            <Divider color="gray" />
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
