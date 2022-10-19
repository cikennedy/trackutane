import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_VISITS } from "../graphql/queries";

const usePatientVisits = () => {
  const { loading, error, data } = useQuery(GET_VISITS);
  const [visits, setVisits] = useState<Visit[]>([]);

  useEffect(() => {
    if (!data) return;

    const visits: Visit[] = data.getVisits.map(({ value }: VisitResponse) => ({
      date: value.date,
      visitDosage: value.visitDosage,
      cumulativeDosage: value.cumulativeDosage,
      nextVisit: value.nextVisit,
    }));
  }, [data]);

  return <div></div>;
};

export default usePatientVisits;
