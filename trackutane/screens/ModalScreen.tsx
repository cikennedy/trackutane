import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
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
import usePatientVisits from "../hooks/usePatientVisits";
import VisitCard from "../components/VisitCard";

type ModalScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList>,
  NativeStackNavigationProp<RootStackParamList, "MyModal">
>;

type ModalScreenRouteProp = RouteProp<RootStackParamList, "MyModal">;

const ModalScreen = () => {
  const tailwind = useTailwind();
  const navigation = useNavigation<ModalScreenNavigationProp>();
  const {
    params: { name, userId },
  } = useRoute<ModalScreenRouteProp>();

  const { loading, error, visits } = usePatientVisits(userId);

  return (
    <View>
      <TouchableOpacity
        onPress={navigation.goBack}
        style={tailwind("absolute right-5 top-5 z-10")}
      >
        <Icon name="closecircle" type="antdesign" />
      </TouchableOpacity>

      <View style={{ marginTop: 10 }}>
        <View style={[tailwind("py-5 border-b"), { borderColor: "#59C1CC" }]}>
          <Text
            style={[
              tailwind("text-center text-xl font-bold"),
              { color: "#59C1CC" },
            ]}
          >
            Name:{" "}
          </Text>
          <Text style={[tailwind("text-center text-sm"), { color: "#59C1CC" }]}>
            Visits:{" "}
          </Text>
        </View>
      </View>

      <FlatList
        contentContainerStyle={{ paddingBottom: 200 }}
        data={visits}
        keyExtractor={(visit) => visit.date}
        renderItem={({ item: visit }) => <VisitCard visit={visit} />}
      />
    </View>
  );
};

export default ModalScreen;
