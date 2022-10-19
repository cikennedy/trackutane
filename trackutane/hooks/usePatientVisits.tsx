import React from "react";
import { useQuery } from "@apollo/client";
import { GET_VISITS } from "../graphql/queries";

const usePatientVisits = () => {
  const { loading, error, data } = useQuery(GET_VISITS);

  return <div>usePatientVisits</div>;
};

export default usePatientVisits;
