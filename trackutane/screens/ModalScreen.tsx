import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import { useTailwind } from "tailwind-rn/dist";

const ModalScreen = () => {
  const tailwind = useTailwind();

  return (
    <View>
      <TouchableOpacity style={tailwind("absolute right-5 top-5")}>
        <Icon name="closecircle" type="antdesign" />
      </TouchableOpacity>
    </View>
  );
};

export default ModalScreen;
