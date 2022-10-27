import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Card, Icon } from "@rneui/themed";
import { useTailwind } from "tailwind-rn/dist";

type Props = {
  visit: Visit;
};

const TrackingCard = ({ visit }: Props) => {
  const tailwind = useTailwind();

  return (
    <TouchableOpacity>
      <Card containerStyle={tailwind("px-5 rounded-lg")}>
        <View style={tailwind("flex-row justify-between items-center")}>
          <View>
            {/* <Icon name="" color="#59C1CC" type="" /> */}
            <Text style={{ fontSize: 10 }}>
              {new Date(visit.date).toDateString()}
            </Text>
          </View>

          <View>
            <Text>
              Patient: {visit.tracking.patient?.lastName},{" "}
              {visit.tracking.patient?.firstName}{" "}
            </Text>
            <Text>Provider: {visit.provider}</Text>
          </View>

          <View style={tailwind("flex-row items-center")}>
            <Text style={(tailwind("text-sm"), { color: "#59C1CC" })}>
              {}, {},{" "}
            </Text>
            <Text></Text>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default TrackingCard;
