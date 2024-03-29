import { ActivityIndicator, ScrollView, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useTailwind } from "tailwind-rn";
import { Button, Image, Text } from "@rneui/themed";
import { RootStackParamList } from "../navigator/RootNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "../navigator/TabNavigator";
import useVisits from "../hooks/useVisits";
import TrackingCard from "../components/TrackingCard";

export type VisitScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Visits">,
  NativeStackNavigationProp<RootStackParamList>
>;

const VisitsScreen = () => {
  const tailwind = useTailwind();
  const navigation = useNavigation<VisitScreenNavigationProp>();
  const { loading, error, visits } = useVisits();
  const [ascending, setAscending] = useState<boolean>(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      tabBarLabel: ({ focused, color }) => (
        <Text style={{ color: focused ? "#6c63ff" : color, fontSize: 10 }}>
          Visits
        </Text>
      ),
    });
  }, []);

  return (
    <ScrollView>
      <Image
        source={{
          uri: "https://github.com/cikennedy/trackutane-typescript/blob/main/trackutane/assets/undraw_Booking_re_gw4j.png?raw=true",
        }}
        containerStyle={tailwind("w-full h-64")}
        PlaceholderContent={<ActivityIndicator />}
      />

      <View>
        <Button
          color="white"
          titleStyle={{
            color: "#6c63ff",
            fontWeight: "500",
            borderColor: "#6c63ff",
          }}
          style={tailwind("py-2 px-5")}
          onPress={() => setAscending(!ascending)}
        >
          {ascending ? "Oldest First" : "Newest First"}
        </Button>

        {visits
          ?.sort((a, b) => {
            if (ascending) {
              return new Date(a.visitDate) > new Date(b.visitDate) ? 1 : -1;
            } else {
              return new Date(a.visitDate) < new Date(b.visitDate) ? 1 : -1;
            }
          })
          .map((visit) => (
            <TrackingCard key={visit.visitId} visit={visit} />
          ))}
      </View>
    </ScrollView>
  );
};

export default VisitsScreen;
