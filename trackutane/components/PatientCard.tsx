import { useNavigation } from "@react-navigation/native";
import { Card, Icon } from "@rneui/themed";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
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
    <TouchableOpacity>
      <Card containerStyle={tailwind("p-5 rounded-lg")}>
        <View>
          <View>
            <Text>{name}</Text>
            <Text>Phone: </Text>
            <Text>Email: {email}</Text>
          </View>

          <View>
            {/* put most recent visit here instead of amount of visits? */}
            <Text>{loading ? "loading..." : `${visits.length} visits`}</Text>
            {/* patient image here? otherwise render icon */}
            <Icon
              style={tailwind("mb-5 ml-auto")}
              name=""
              type="font-awesome"
              color=""
              size={50}
            />
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default PatientCard;
