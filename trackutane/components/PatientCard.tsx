import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import { useTailwind } from "tailwind-rn/dist";
import usePatientVisits from "../hooks/usePatientVisits";
import { PatientScreenNavigationProp } from "../screens/PatientsScreen";

type Props = {
  userId: string;
  name: string;
  email: string;
};

const PatientCard = ({ email, name, userId }: Props) => {
  const tailwind = useTailwind();
  const { loading, error, visits } = usePatientVisits(userId);
  const navigation = useNavigation<PatientScreenNavigationProp>();

  return (
    <View>
      <Text>PatientCard</Text>
    </View>
  );
};

export default PatientCard;
