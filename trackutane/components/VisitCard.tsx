import { View, Text } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn/dist";
import { Card, Icon } from "@rneui/themed";

type Props = {
  visit: Visit;
};

const VisitCard = ({ visit }: Props) => {
  const tailwind = useTailwind();

  return (
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
        <Icon name="calendar" type="entypo" color="white" />

        <View>
          <Text
            style={tailwind(
              "text-xs text-center uppercase text-white font-bold"
            )}
          >
            {visit.provider}
          </Text>
          <Text>Date: {new Date(visit.date).toLocaleDateString()}</Text>
        </View>
      </View>
    </Card>
  );
};

export default VisitCard;
