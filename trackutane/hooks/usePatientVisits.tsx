import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_VISITS } from "../graphql/queries";

const usePatientVisits = (userId: string) => {
  const { loading, error, data } = useQuery(GET_VISITS);
  const [visits, setVisits] = useState<Visit[]>([]);

  useEffect(() => {
    if (!data) return;

    const visits: Visit[] = data.getVisits.map(({ value }: VisitResponse) => ({
      date: value.date,
      visitDosage: value.visitDosage,
      cumulativeDosage: value.cumulativeDosage,
      nextVisit: value.nextVisit,
      followUp: value.followUp,
    }));

    // TO-DO! patient id and follow ups
    // const patientVisits = visits.filter(
    //   (visit) => visit.followUp.patient_id === userId
    // );
  }, [data]);

  return { loading, error, visits };
};

export default usePatientVisits;
