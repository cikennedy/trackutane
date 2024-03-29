import { ActivityIndicator, ScrollView } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useTailwind } from "tailwind-rn";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "../navigator/TabNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigator/RootNavigator";
import { Image, Input } from "@rneui/themed";
import { useQuery } from "@apollo/client";
import { GET_PATIENTS } from "../graphql/queries";
import PatientCard from "../components/PatientCard";

// nested stacks, composite navigation prop
// combine the navigation items with all the types needed
export type PatientScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Patients">,
  NativeStackNavigationProp<RootStackParamList>
>;

const PatientsScreen = () => {
  const tailwind = useTailwind();
  const navigation = useNavigation<PatientScreenNavigationProp>();
  const [input, setInput] = useState<string>("");
  const { loading, error, data } = useQuery(GET_PATIENTS);

  return (
    <ScrollView style={{ backgroundColor: "#6c63ff" }}>
      <Image
        source={{
          uri: "https://github.com/cikennedy/trackutane-typescript/blob/main/trackutane/assets/undraw_medical_care_movn.png?raw=true",
        }}
        containerStyle={tailwind("w-full h-64")}
        PlaceholderContent={<ActivityIndicator />}
      />

      <Input
        placeholder="Search by Patient"
        value={input}
        onChangeText={(text) => setInput(text)}
        containerStyle={tailwind("pt-5 pb-0 px-10 bg-white")}
      />

      {data?.getPatients
        ?.filter(
          (patient: PatientList) =>
            patient.value.lastName.includes(input) ||
            patient.value.firstName.includes(input)
        )
        .map(
          ({
            name: ID,
            value: { phone, email, firstName, lastName },
          }: PatientResponse) => (
            <PatientCard
              key={ID}
              email={email}
              phone={phone}
              firstName={firstName}
              lastName={lastName}
              userId={ID}
            />
          )
        )}
    </ScrollView>
  );
};

export default PatientsScreen;
