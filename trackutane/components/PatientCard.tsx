import React from "react";
import { View, Text } from "react-native";
import usePatientVisits from "../hooks/usePatientVisits";

type Props = {
  userId: string;
  name: string;
  email: string;
};

const PatientCard = ({ email, name, userId }: Props) => {
  const { loading, error, visits } = usePatientVisits(userId);

  return (
    <View>
      <Text>PatientCard</Text>
    </View>
  );
};

export default PatientCard;
