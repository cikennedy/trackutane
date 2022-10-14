import { Text, SafeAreaView } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn";

const PatientsScreen = () => {
  const tailwind = useTailwind();

  return (
    <SafeAreaView>
      <Text style={tailwind("text-blue-600")}>PatientsScreen</Text>
    </SafeAreaView>
  );
};

export default PatientsScreen;
