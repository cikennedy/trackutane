import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn";

const PatientsScreen = () => {
  const tailwind = useTailwind();

  return (
    <SafeAreaView>
      <Text style={tailwind("text-red-500")}>PatientsScreen</Text>
    </SafeAreaView>
  );
};

export default PatientsScreen;
