import { View, Text } from "react-native";
import React from "react";

type Props = {
  visit: Visit;
};

const VisitCard = ({ visit }: Props) => {
  return (
    <View>
      <Text>VisitCard</Text>
    </View>
  );
};

export default VisitCard;
